const submitted = [
  {
    title:
      "An Open-Source Flow for Single-Phase, Edge-Triggered to Two-Phase, Non-Overlapping Clocking Conversion",
    authors: (
      <>
        <strong>Pedroso, P.</strong>, Wang, L., &amp; Guthaus, M. R. (2026).
      </>
    ),
    venue: (
      <>
        Submitted to <em>ACM GLSVLSI &apos;26</em>, Finger Lakes, NY, USA.
      </>
    ),
  },
  {
    title:
      "HighTide: A High-performance IC Gauge for Hardware Tracking, Integration, and Design Evaluation",
    authors: (
      <>
        Goldblatt, B., <strong>Pedroso, P.</strong>, Modaresi, F., &amp;
        Guthaus, M. R. (2026).
      </>
    ),
    venue: (
      <>
        Submitted to <em>DAC &apos;26</em>, Long Beach, CA, USA.
      </>
    ),
  },
];

const bachelorsThesis = {
  title:
    "Optimizing Two-Phase in Automation: Clock-gated Synthesis and Validation in Physical Design through OpenROAD-flow-scripts",
  authors: (
    <>
      <strong>Pedroso, P.</strong> (2026). [Bachelor&apos;s thesis]. Advised by
      M. R. Guthaus.
    </>
  ),
};

const Entry = ({ title, authors, venue }) => (
  <li>
    <p className="text-neutral-900 dark:text-neutral-100 font-medium leading-snug">
      {title}
    </p>
    <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1 leading-relaxed">
      {authors}
    </p>
    {venue && (
      <p className="text-xs text-neutral-500 mt-1">{venue}</p>
    )}
  </li>
);

const Publications = () => (
  <section
    id="publications"
    className="py-10 border-t border-neutral-200 dark:border-neutral-800"
  >
    <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-5">
      Publications
    </h2>

    <h3 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-4">
      Submitted Papers
    </h3>
    <ul className="space-y-6">
      {submitted.map((p, i) => (
        <Entry key={i} {...p} />
      ))}
    </ul>

    <h3 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mt-10 mb-4">
      Bachelor&apos;s Thesis
    </h3>
    <ul className="space-y-6">
      <Entry {...bachelorsThesis} />
    </ul>

    {/*
    <h3 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mt-10 mb-4">
      Master&apos;s Thesis
    </h3>
    <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
      In progress.
    </p>
    */}
  </section>
);

export default Publications;
