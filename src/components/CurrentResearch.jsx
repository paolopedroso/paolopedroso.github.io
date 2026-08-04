const CurrentResearch = () => (
  <section
    id="current-research"
    className="py-10 border-t border-neutral-200 dark:border-neutral-800"
  >
    <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-5">
      Current Research
    </h2>
    <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed">
      My research works toward physically aware sequential optimization, with an
      emphasis on retiming and low power methodologies. Conventional retiming
      operates before placement and optimizes against gate delays alone; this
      work explores ways to bring physical information such as interconnect
      delay, placement, and routing structure into sequential optimization, with
      the goal of meeting timing targets at reduced register, area, and power
      cost.
    </p>
    <figure className="mt-6">
      <img
        src="/pdfs/retimingexample.jpg"
        alt="(a) Insertion of two-stage flip-flops after the original ReLU circuit; (b) Circuit after retiming."
        className="w-full rounded border border-neutral-200 dark:border-neutral-800 bg-white"
      />
      <figcaption className="text-xs text-neutral-500 mt-2 leading-relaxed">
        (a) Insertion of two-stage flip-flops after the original ReLU circuit;
        (b) Circuit after retiming. From Xu, K., Zhang, G. L., Schlichtmann, U.,
        &amp; Li, B. (2023). Logic Design of Neural Networks for High-Throughput
        and Low-Power Applications. In{" "}
        <em>
          2024 29th IEEE/ACM Asia and South Pacific Design Automation Conference
          (ASP-DAC)
        </em>
        .{" "}
        <a
          href="https://doi.org/10.1109/ASP-DAC58780.2024.10473844"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 hover:text-black dark:hover:text-white"
        >
          doi:10.1109/ASP-DAC58780.2024.10473844
        </a>
      </figcaption>
    </figure>
  </section>
);

export default CurrentResearch;
