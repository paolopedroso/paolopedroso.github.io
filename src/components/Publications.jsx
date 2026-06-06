const accepted = [
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
        Accepted at <em>ACM GLSVLSI &apos;26</em> (oral and poster), Finger
        Lakes, NY, USA.
      </>
    ),
    links: [{ label: "arxiv", url: "https://arxiv.org/abs/2605.05374" }],
  },
];

const submitted = [
  {
    title: "HighTide: An Agent-Curated Open-Source VLSI Benchmark Suite",
    authors: (
      <>
        Goldblatt, B., <strong>Pedroso, P.</strong>, Modaresi, F., Sifferman,
        E., &amp; Guthaus, M. R. (2026).
      </>
    ),
    venue: (
      <>
        Submitted to <em>ACM/IEEE MLCAD &apos;26</em>, Jeju, South Korea.
      </>
    ),
    links: [{ label: "arxiv", url: "https://arxiv.org/abs/2606.04126" }],
  },
];

const bachelorsThesis = {
  title:
    "An End-to-End Open-Source Flow for Flip-Flop to Two-Phase Latch Conversion with Synthesis Optimizations and Clock Gating",
  authors: (
    <>
      <strong>Pedroso, P.</strong> (2026). [Bachelor&apos;s thesis]. Advised by
      M. R. Guthaus.
    </>
  ),
  links: [{ label: "pdf", url: "/pdfs/pedroso_2026_bs_thesis.pdf" }],
};

const Entry = ({ title, authors, venue, links }) => (
  <li>
    <p className="text-neutral-900 dark:text-neutral-100 font-medium leading-snug">
      {title}
    </p>
    <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1 leading-relaxed">
      {authors}
    </p>
    {venue && <p className="text-xs text-neutral-500 mt-1">{venue}</p>}
    {links && links.length > 0 && (
      <p className="text-sm mt-1 space-x-2">
        {links.map((l, i) => (
          <a
            key={i}
            href={l.url}
            target="_blank"
            rel="noreferrer"
            className="text-black dark:text-white underline-offset-4 hover:underline"
          >
            [{l.label}]
          </a>
        ))}
      </p>
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
      Accepted Papers
    </h3>
    <ul className="space-y-6">
      {accepted.map((p, i) => (
        <Entry key={i} {...p} />
      ))}
    </ul>

    <h3 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mt-10 mb-4">
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
