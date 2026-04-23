import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const ExternalLinkIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Projects = () => (
  <section
    id="projects"
    className="py-10 border-t border-neutral-200 dark:border-neutral-800"
  >
    <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-5">
      Projects
    </h2>
    <ul className="space-y-6">
      {projects.map(({ slug, title, desc, tags, link }) => (
        <li key={slug}>
          <div className="flex items-center gap-2">
            <Link
              to={`/projects/${slug}`}
              className="text-neutral-900 dark:text-neutral-100 font-medium hover:underline underline-offset-4"
            >
              {title}
            </Link>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} on GitHub`}
              title="View on GitHub"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <ExternalLinkIcon />
            </a>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mt-1 leading-relaxed">
            {desc}
          </p>
          <p className="text-xs text-neutral-500 mt-1">{tags.join(" · ")}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;
