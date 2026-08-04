const linkClass =
  "underline underline-offset-4 hover:text-black dark:hover:text-white";

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
};

const GitHubIcon = () => (
  <svg {...iconProps}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = () => (
  <svg {...iconProps}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ScholarIcon = () => (
  <svg {...iconProps}>
    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
  </svg>
);

const socials = [
  { label: "GitHub", url: "https://github.com/paolopedroso", Icon: GitHubIcon },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/paolo-pedroso-848791232/",
    Icon: LinkedInIcon,
  },
  {
    label: "Google Scholar",
    url: "https://scholar.google.com/citations?view_op=list_works&hl=en&user=gt1wfTgAAAAJ",
    Icon: ScholarIcon,
  },
];

const Hero = () => (
  <section className="pt-10 sm:pt-16 pb-10 sm:pb-12">
    <img
      src="/images/headshot.jpg"
      alt="Paolo Pedroso"
      className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-md bg-neutral-100 dark:bg-neutral-900 mb-6 sm:mb-8 sm:float-left sm:mr-8"
    />
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-3">
        Paolo Pedroso
      </h1>
      <div className="space-y-1 text-neutral-800 dark:text-neutral-200">
        <p>Incoming M.S. Student, Computer Science and Engineering</p>
        <p className="text-neutral-700 dark:text-neutral-300">
          University of California, Santa Cruz
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">
          Advisor:{" "}
          <a
            href="https://vlsida.github.io/about/"
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            Matthew Guthaus
          </a>
        </p>
      </div>

      <p className="mt-5 sm:clear-left leading-relaxed text-neutral-800 dark:text-neutral-200">
        I&apos;m a researcher in the{" "}
        <a
          href="https://vlsida.github.io/"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          VLSI Design and Automation Lab
        </a>
        , part of the{" "}
        <a
          href="https://hsc.ucsc.edu/"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          UCSC Hardware Systems Collective
        </a>
        . Previously worked on two-phase clocking, focusing on the backend to
        build an end-to-end RTL-to-GDS flow for converting single-phase,
        edge-triggered designs into two-phase, non-overlapping latch-based
        designs in{" "}
        <a
          href="https://github.com/The-OpenROAD-Project/OpenROAD"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          OpenROAD
        </a>
        . Built on the foundation of frontend work from a
        prior master&apos;s thesis. Also worked on a Ternary Matrix
        Multiplication Processor (2025-2026) and{" "}
        <a
          href="https://vlsida.github.io/HighTide/"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          HighTide Benchmarks
        </a>{" "}
        (2025-2026), and participated in the{" "}
        <a
          href="https://asu-vda-lab.github.io/MLCAD26-Contest/"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          ASU MLCAD Contest
        </a>{" "}
        (2026), &ldquo;LLM-based Algorithm Discovery for Timing
        Optimization.&rdquo;
      </p>

      <div className="mt-4 flex items-center gap-4">
        {socials.map(({ label, url, Icon }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            title={label}
            className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <Icon />
          </a>
        ))}
      </div>
      <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
        Email:{" "}
        <a href="mailto:paoloapedroso@gmail.com" className={linkClass}>
          paoloapedroso@gmail.com
        </a>
      </p>
    </div>
    <div className="clear-both" />
  </section>
);

export default Hero;
