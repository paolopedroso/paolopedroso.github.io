/**
 * @copyright 2024 Paolo Pedroso
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";

// Languages

const skillItem = [
    {
      imgSrc: '/images/python-svgrepo-com (2).svg',
      label: 'Python',
      desc: 'Software'
    },
    {
      imgSrc: '/images/c-svgrepo-com.svg',
      label: 'C',
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
      imgSrc: '/images/html-5-svgrepo-com.svg',
      label: 'HTML5',
      desc: 'Structure'
    },
    {
      imgSrc: '/images/css-3-svgrepo-com.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];

// Frameworks and Tech

const skillItem2 = [
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/docker-svgrepo-com.svg',
    label: 'Docker',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/git-svgrepo-com.svg',
    label: 'Git',
    desc: 'Technology'
  },
  {
    imgSrc: '/images/wireshark.png',
    label: 'Wireshark',
    desc: 'Network'
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

               {/* Languages */}

               <h3 className="headline-3 reveal-up mt-8 mb-6">
                    Languages
                </h3>

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
            {/* Frameworks and Techologies */}
            <div className="container">

                <h3 className="headline-3 reveal-up mt-8 mb-6">
                    Frameworks and Technologies
                </h3>


               <div className="reveal-up grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem2.map(({ imgSrc, label, desc}, key) =>
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