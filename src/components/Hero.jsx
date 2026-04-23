const linkClass =
  "underline underline-offset-4 hover:text-black dark:hover:text-white";

const Hero = () => (
  <section className="pt-10 sm:pt-16 pb-10 sm:pb-12 flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
    <img
      src="/images/headshot.jpg"
      alt="Paolo Pedroso"
      className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-md bg-neutral-100 dark:bg-neutral-900 flex-shrink-0"
    />
    <div className="min-w-0">
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

      <p className="mt-5 leading-relaxed text-neutral-800 dark:text-neutral-200">
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
        .
      </p>

      <p className="mt-4 leading-relaxed text-neutral-800 dark:text-neutral-200">
        Previously worked on two-phase clocking, focusing on the backend to
        build an end-to-end RTL-to-GDS flow for converting single-phase,
        edge-triggered designs into two-phase, non-overlapping latch-based
        designs in OpenROAD. Built on the foundation of frontend work from a
        prior master&apos;s thesis.
      </p>

      <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">
        Find me on{" "}
        <a
          href="https://github.com/paolopedroso"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/in/paolo-pedroso-848791232/"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          LinkedIn
        </a>
        .
      </p>
      <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
        Email:{" "}
        <a href="mailto:paoloapedroso@gmail.com" className={linkClass}>
          paoloapedroso@gmail.com
        </a>
      </p>
    </div>
  </section>
);

export default Hero;
