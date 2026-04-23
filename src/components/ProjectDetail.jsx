import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { projects } from "../data/projects";

const parseGithubRepo = (url) => {
  const m = url.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!m) return null;
  return { owner: m[1], repo: m[2].replace(/\.git$/, "") };
};

const README_CANDIDATES = [
  "README.md",
  "readme.md",
  "Readme.md",
  "README.MD",
  "README",
  "readme",
];

const getDefaultBranch = async (owner, repo) => {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    if (res.ok) {
      const data = await res.json();
      if (data.default_branch) return data.default_branch;
    }
  } catch (_) {}
  return "main";
};

const fetchReadme = async (owner, repo, defaultBranch) => {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      { headers: { Accept: "application/vnd.github.raw" } }
    );
    if (res.ok) {
      const text = await res.text();
      if (text && text.trim()) return { text, branch: defaultBranch };
    }
  } catch (_) {}

  const branches = Array.from(new Set([defaultBranch, "main", "master"]));
  for (const branch of branches) {
    for (const name of README_CANDIDATES) {
      try {
        const res = await fetch(
          `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${name}`
        );
        if (res.ok) {
          const text = await res.text();
          if (text && text.trim()) return { text, branch };
        }
      } catch (_) {}
    }
  }

  return null;
};

const resolveImageUrl = (url, owner, repo, branch) => {
  if (!url) return url;
  if (url.startsWith("data:")) return url;
  if (/^https?:\/\//i.test(url)) {
    const m = url.match(
      /^https?:\/\/github\.com\/([^/]+)\/([^/]+)\/(?:blob|raw)\/([^/]+)\/(.+)$/i
    );
    if (m) {
      return `https://raw.githubusercontent.com/${m[1]}/${m[2]}/${m[3]}/${m[4]}`;
    }
    return url;
  }
  if (url.startsWith("//")) return "https:" + url;
  if (url.startsWith("/")) {
    return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}${url}`;
  }
  const clean = url.replace(/^\.\//, "");
  return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${clean}`;
};

const resolveLinkUrl = (url, owner, repo, branch) => {
  if (!url) return url;
  if (
    url.startsWith("#") ||
    url.startsWith("mailto:") ||
    url.startsWith("data:")
  ) {
    return url;
  }
  if (/^https?:\/\//i.test(url) || url.startsWith("//")) return url;
  if (url.startsWith("/")) {
    return `https://github.com/${owner}/${repo}/blob/${branch}${url}`;
  }
  const clean = url.replace(/^\.\//, "");
  return `https://github.com/${owner}/${repo}/blob/${branch}/${clean}`;
};

const buildMarkdownComponents = (owner, repo, branch) => ({
  img: ({ src, alt, ...props }) => (
    <img
      src={resolveImageUrl(src, owner, repo, branch)}
      alt={alt || ""}
      {...props}
    />
  ),
  a: ({ href, children, ...props }) => {
    const resolved = resolveLinkUrl(href, owner, repo, branch);
    const external = resolved && !resolved.startsWith("#");
    return (
      <a
        href={resolved}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  },
  table: ({ node, ...props }) => (
    <div className="overflow-x-auto">
      <table {...props} />
    </div>
  ),
});

const Tabs = ({ view, setView }) => {
  const tabs = [
    { key: "readme", label: "README" },
    { key: "description", label: "Description" },
  ];
  return (
    <div className="flex gap-1 border-b border-neutral-200 dark:border-neutral-800 mb-6">
      {tabs.map((t) => {
        const active = view === t.key;
        return (
          <button
            key={t.key}
            onClick={() => setView(t.key)}
            className={
              "px-3 py-2 text-sm -mb-px border-b-2 transition-colors " +
              (active
                ? "border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100"
                : "border-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200")
            }
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
};

const DescriptionEditor = ({ projectTitle }) => {
  const [draft, setDraft] = useState("");
  return (
    <div className="space-y-4">
      <p className="text-sm text-neutral-500">
        Write a description for this project (Markdown supported). When
        you&apos;re ready, paste it into the{" "}
        <code className="px-1 py-0.5 text-xs rounded bg-neutral-100 dark:bg-neutral-900">
          customDescription
        </code>{" "}
        field for this project in{" "}
        <code className="px-1 py-0.5 text-xs rounded bg-neutral-100 dark:bg-neutral-900">
          src/data/projects.js
        </code>
        .
      </p>
      <textarea
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder={`About ${projectTitle}...`}
        className="w-full min-h-[220px] p-4 rounded-md text-sm font-mono
                   bg-white dark:bg-neutral-900
                   text-neutral-800 dark:text-neutral-200
                   border border-neutral-200 dark:border-neutral-800
                   outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-600"
      />
      {draft && (
        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
            Preview
          </p>
          <div className="prose-custom">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{draft}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [readme, setReadme] = useState(null);
  const [readmeStatus, setReadmeStatus] = useState("loading");
  const [branch, setBranch] = useState("main");
  const [view, setView] = useState("description");

  const repoInfo = project ? parseGithubRepo(project.link) : null;

  useEffect(() => {
    if (!project || !repoInfo) {
      setReadmeStatus("missing");
      return;
    }
    let cancelled = false;
    setReadmeStatus("loading");
    (async () => {
      const defaultBranch = await getDefaultBranch(
        repoInfo.owner,
        repoInfo.repo
      );
      const result = await fetchReadme(
        repoInfo.owner,
        repoInfo.repo,
        defaultBranch
      );
      if (cancelled) return;
      if (result) {
        setReadme(result.text);
        setBranch(result.branch);
        setReadmeStatus("ok");
      } else {
        setBranch(defaultBranch);
        setReadmeStatus("missing");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [project, repoInfo?.owner, repoInfo?.repo]);

  if (!project) return <Navigate to="/" replace />;

  const mdComponents = repoInfo
    ? buildMarkdownComponents(repoInfo.owner, repoInfo.repo, branch)
    : undefined;

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Link
        to="/"
        className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
      >
        ← Back
      </Link>

      <header className="mt-8 mb-8">
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          {project.title}
        </h1>
        <p className="text-xs text-neutral-500 mb-3">
          {project.tags.join(" · ")}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-neutral-700 dark:text-neutral-300 underline underline-offset-4 hover:text-black dark:hover:text-white"
        >
          View on GitHub →
        </a>
      </header>

      <Tabs view={view} setView={setView} />

      {view === "readme" && (
        <>
          {readmeStatus === "loading" && (
            <p className="text-sm text-neutral-500">Loading README…</p>
          )}
          {readmeStatus === "ok" && (
            <div className="prose-custom">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={mdComponents}
              >
                {readme}
              </ReactMarkdown>
            </div>
          )}
          {readmeStatus === "missing" && (
            <p className="text-sm text-neutral-500">
              No README found in this repository. Switch to the Description
              tab to add your own.
            </p>
          )}
        </>
      )}

      {view === "description" && (
        <>
          {project.customDescription ? (
            <div className="prose-custom">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={mdComponents}
              >
                {project.customDescription}
              </ReactMarkdown>
            </div>
          ) : (
            <DescriptionEditor projectTitle={project.title} />
          )}
        </>
      )}
    </main>
  );
};

export default ProjectDetail;
