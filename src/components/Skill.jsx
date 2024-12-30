/**
 * @copyright 2024 Paolo Pedroso
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: '/images/python-svgrepo-com (2).svg',
      label: 'Python',
      desc: 'Software'
    },
    {
      imgSrc: '/images/cpp3-svgrepo-com.svg',
      label: 'C++',
      desc: 'Software'
    },
    {
      imgSrc: '/images/systemverilog-svgrepo-com.svg',
      label: 'System Verilog',
      desc: 'Hardware'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];

const Skill = () => {
    return (
        <section className="">
            <div className="container">

                <h2 className="headline-2 reveal-up mt-20">
                    Essential Tools I use
                </h2>

                <p className="text-zinc-400 mt-6 mb-8 max-w-[50ch] reveal-up">
                    Discover the powerful tools and technologies I use to create
                    my exceptional, high-performing projects & applications
               </p>

               <div className="reveal-up grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc}, key) =>
                        (
                            <SkillCard 
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                className="reveal-up"
                            />
                        ))
                    }
               </div>

            </div>
        </section>
    )
}

export default Skill