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
      content: 'Add Details',
      name: 'Add CSE Class',
      courseLink: 'http://test.com',
      courseN: 'Add CSE Class Number'
    },
    {
      content: 'Add Details',
      name: 'Add CSE Class',
      courseLink: '',
      courseN: 'Add CSE Class Number'
    },
    {
      content: 'Add Details',
      name: 'Add CSE Class',
      courseLink: '',
      courseN: 'Add CSE Class Number'
    },
    {
      content: 'Add Details',
      name: 'Add CSE Class',
      courseLink: '',
      courseN: 'Add CSE Class Number'
    },
    {
      content: 'Add Details',
      name: 'Add CSE Class',
      courseLink: '',
      courseN: 'Add CSE Class Number'
    },
    {
      content: 'Add Details',
      name: 'Add CSE Class',
      courseLink: '',
      courseN: 'Add CSE Class Number'
    }
  ];

const Course = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        scrub: true,
        start:'-200% 80%',
        end: '400% 80%'
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