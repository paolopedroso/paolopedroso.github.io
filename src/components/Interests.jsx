const linkClass =
  "underline underline-offset-4 hover:text-black dark:hover:text-white";

const OPENROAD_URL = "https://github.com/The-OpenROAD-Project/OpenROAD";
const OPENROAD_FLOW_URL =
  "https://github.com/The-OpenROAD-Project/OpenROAD-flow-scripts";

const Interests = () => (
  <section
    id="interests"
    className="py-10 border-t border-neutral-200 dark:border-neutral-800"
  >
    <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-5">
      Research Interests
    </h2>
    <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed mb-6">
      I&apos;m interested in ML and GNNs applied to electronic design
      automation, particularly logic synthesis, circuit optimization, retiming,
      and ASIC design flows. I work with{" "}
      <a
        href={OPENROAD_URL}
        target="_blank"
        rel="noreferrer"
        className={linkClass}
      >
        OpenROAD
      </a>{" "}
      and the{" "}
      <a
        href={OPENROAD_FLOW_URL}
        target="_blank"
        rel="noreferrer"
        className={linkClass}
      >
        OpenROAD Flow Scripts
      </a>{" "}
      on open-source PDKs, exploring where learned models can improve on the
      simplifying approximations classical EDA tools rely on.
    </p>
    <ul className="list-disc pl-5 space-y-2 text-neutral-800 dark:text-neutral-200 leading-relaxed">
      <li>EDA</li>
      <li>Logic synthesis</li>
      <li>GNN/NN</li>
    </ul>
  </section>
);

export default Interests;
