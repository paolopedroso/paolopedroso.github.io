/**
 * @copyright 2024 Paolo Pedroso
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import Coursecard from "./Coursecard";

const courses = [
    {
      content: 'Covers network models, protocols, routing, switching, error control, congestion, and hands-on wireless and wireline networking experience through labs.',
      name: 'Computer Networks',
      courseLink: 'https://catalog.ucsc.edu/current/general-catalog/courses/cse-computer-science-and-engineering/upper-division/cse-150/',
      courseN: 'CSE150'
    },
    {
      content: 'Introduces abstract data types, algorithms, big-Oh analysis, and covers linked lists, stacks, queues, trees, heaps, graphs in C/C++.',
      name: 'Data Structures and Algorithms',
      courseLink: 'https://catalog.ucsc.edu/en/current/general-catalog/courses/cse-computer-science-and-engineering/upper-division/cse-101/',
      courseN: 'CSE101'
    },
    {
      content: 'Covers Boolean algebra, logic minimization, finite-state machines, sequential circuits, programmable logic, system-level design, and circuit electrical behavior, including propagation delay and fanout.',
      name: 'Logic Design',
      courseLink: 'https://catalog.ucsc.edu/en/2020-2021/general-catalog/courses/cse-computer-science-and-engineering/upper-division/cse-100/',
      courseN: 'CSE100'
    },
    {
      content: 'An introduction to parallel and concurrent programming, focusing on platforms, program design, optimization, performance analysis, load balancing, and parallel algorithms.',
      name: 'Parallel/Concurrent Programming',
      courseLink: 'https://catalog.ucsc.edu/en/2023-2024/general-catalog/courses/cse-computer-science-and-engineering/upper-division/cse-113/',
      courseN: 'CSE113'
    },
    {
      content: 'An overview of electrical components, circuit analysis, design, and elementary electronics, covering theorems, responses, and analog filters.',
      name: 'Electric Circuits',
      courseLink: 'https://catalog.ucsc.edu/en/2019-2020/general-catalog/courses/ece-electrical-and-computer-engineering/upper-division/ece-101/',
      courseN: 'ECE101'
    },
    {
      content: 'Explores computer systems design principles, including memory, storage, networking, concurrency, layering, naming, client-server models, and performance, with hands-on programming projects.',
      name: 'Principles of Computer Systems Design',
      courseLink: 'https://catalog.ucsc.edu/en/current/general-catalog/courses/cse-computer-science-and-engineering/upper-division/cse-130/',
      courseN: 'CSE130'
    }
  ];

const Course = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        scrub: true,
        start:'-200% 80%',
        end: '500% 80%'
      },
      x: '-1000'
    })
  })

    return (
        <section 
            id="courses"
            className="section overflow-hidden"
        >
            <div className="container">

                <h2 className="headline-2 mb-8 reveal-up">
                    Courses I&apos;ve Taken so Far...
                </h2>

                <div className="flex items-stretch gap-3 w-fit scrub-slide">
                    {courses.map(({ content, name, courseLink, courseN }, key) => (
                        <Coursecard 
                            key={key}
                            name={name}   
                            courseLink={courseLink}
                            courseN={courseN}
                            content={content}
                        />
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Course