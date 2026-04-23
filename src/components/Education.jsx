const degrees = [
  {
    degree: "M.S. Computer Science and Engineering",
    school: "University of California, Santa Cruz",
    note: "Incoming Fall 2026",
  },
  {
    degree: "B.S. Computer Engineering, Systems Programming Concentration",
    school: "University of California, Santa Cruz",
    note: "",
  },
];

const Education = () => (
  <section
    id="education"
    className="py-10 border-t border-neutral-200 dark:border-neutral-800"
  >
    <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-5">
      Education
    </h2>
    <ul className="space-y-5">
      {degrees.map(({ degree, school, note }, i) => (
        <li key={i}>
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {degree}
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 italic">
            {school}
          </p>
          {note && (
            <p className="text-xs text-neutral-500 mt-1">{note}</p>
          )}
        </li>
      ))}
    </ul>
  </section>
);

export default Education;
