const Contact = () => (
  <section
    id="contact"
    className="py-10 border-t border-neutral-200 dark:border-neutral-800"
  >
    <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-5">
      Contact
    </h2>
    <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed">
      Reach me at{" "}
      <a
        href="mailto:paoloapedroso@gmail.com"
        className="underline underline-offset-4 hover:text-black dark:hover:text-white"
      >
        paoloapedroso@gmail.com
      </a>
      .
    </p>
  </section>
);

export default Contact;
