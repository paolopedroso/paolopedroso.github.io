/**
 * @copyright 2024 Paolo Pedroso
 * @license Apache-2.0
 */

const aboutItems = [
    {
        label: 'Expected Graduation',
        number: 2025
    },
    {
      label: 'Projects done',
      number: 5 + '+'
    },
    // {
    //   label: 'Years of experience',
    //   number: 1 + '+'
    // }
  ];

const About = () => {
    return (
        <section
            id="about"
            className="section"
        >
            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Welcome! I&apos;m Paolo, a student from
                        the University of California, Santa Cruz
                        majoring in Computer Engineering with a 
                        Systems Programming Concentration.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        {/* <span className="text-sky-400 font-semibold md:text-3xl">+</span> */}
                                    </div>
                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }
                        <img 
                        src="/images/logo-paolo.png"
                        alt="Logo"
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px]"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About