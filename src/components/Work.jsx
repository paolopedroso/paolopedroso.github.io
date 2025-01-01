/**
 * @copyright 2024 Paolo Pedroso
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/logo-paolo.png',
      title: 'My Portfolio',
      tags: ['Web-Design', 'Development'],
      projectLink: 'https://github.com/paolopedroso/paolopedroso.github.io'
    },
    {
      imgSrc: '/images/Dino-game-proj.jpg',
      title: 'Dino Game on FPGA',
      tags: ['System Verilog', 'FPGA'],
      projectLink: 'https://github.com/paolopedroso/Dino-Run'
    },
    {
      imgSrc: '/images/sorting-visualizer-proj.jpg',
      title: 'Sorting Visualizer',
      tags: ['Python', 'PyGame', 'Algorithms'],
      projectLink: 'https://github.com/paolopedroso/Sorting-Visualizer'
    },
    {
      imgSrc: '/images/router-proj.jpg',
      title: 'IPv4 Router',
      tags: ['Firewall','Mininet','Wireshark'],
      projectLink: 'https://github.com/paolopedroso/simpleipv4router'
    },
    {
      imgSrc: '/images/art-proj.jpg',
      title: 'Online Art Exhibit',
      tags: ['Web-Design', 'Development'],
      projectLink: 'https://github.com/paolopedroso/online-art-exhibit'
    },
    {
      imgSrc: '/images/underconstruction-proj.webp',
      title: 'Bookstore App *Underconstruction',
      tags: ['MERN', 'Web-design', 'Development'],
      projectLink: ''
    },
  ];

const Work = () => {
    return (
        <section 
            className="section"
            id="work"
        >
            <div className="container">

                <h2 className="headline-2 mb-8 reveal-up">
                    My Portfolio Highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        className="reveal-up"
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Work