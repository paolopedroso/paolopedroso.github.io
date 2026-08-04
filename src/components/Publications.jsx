const entries = [
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
        In the proceedings of <em>ACM GLSVLSI &apos;26</em> (oral and poster),
        Finger Lakes, NY, USA.
      </>
    ),
    links: [
      { label: "arxiv", url: "https://arxiv.org/abs/2605.05374" },
      { label: "code", url: "https://github.com/paolopedroso/ORFS-FF2Latch" },
    ],
  },
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
        Preprint, <em>arXiv:2606.04126</em>.
      </>
    ),
    links: [
      { label: "arxiv", url: "https://arxiv.org/abs/2606.04126" },
      { label: "website", url: "https://vlsida.github.io/HighTide/" },
      { label: "code", url: "https://github.com/VLSIDA/HighTide" },
    ],
  },
  {
    title: "HighTide: An Open-Source Hardware Benchmark Suite",
    authors: (
      <>
        Goldblatt, B., <strong>Pedroso, P.</strong>, Modaresi, F., &amp;
        Guthaus, M. R. (2026).
      </>
    ),
    venue: (
      <>
        Poster presented at <em>ACM/IEEE DAC</em>, Long Beach, CA, USA.
      </>
    ),
    links: [
      { label: "pdf", url: "/pdfs/HighTide%20WIP%20DAC%20Poster%202026.pdf" },
    ],
  },
  {
    title:
      "An End-to-End Open-Source Flow for Flip-Flop to Two-Phase Latch Conversion with Synthesis Optimizations and Clock Gating",
    authors: (
      <>
        <strong>Pedroso, P.</strong> (2026).
      </>
    ),
    venue: <>Bachelor&apos;s Thesis. Advised by Guthaus, M. R.</>,
    links: [{ label: "pdf", url: "/pdfs/pedroso_2026_bs_thesis.pdf" }],
  },
];

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
      Publications &amp; Posters
    </h2>
    <ul className="space-y-6">
      {entries.map((p, i) => (
        <Entry key={i} {...p} />
      ))}
    </ul>
  </section>
);

export default Publications;
