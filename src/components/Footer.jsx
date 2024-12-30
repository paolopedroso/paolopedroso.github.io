/**
 * @copyright 2024 Paolo Pedroso
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Courses',
      href: '#courses'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://www.github.com/codewithsadee-org'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/codewithsadee'
    },
    {
        label: 'LeetCode',
        href: 'https://leetcode.com/u/ppedroso/'
    },
  ];

  const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                
                <div className="lg:grid lg:grid-cols-2">

                    {/* Left Section: Heading and Button */}
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                            Let&apos;s Work Together!
                        </h2>

                        <div className="mb-8">
                            <ButtonPrimary 
                                href="mailto:paoloapedroso@gmail.com"
                                label="Email"
                                icon="chevron_right"
                                classes="reveal-up"
                            />
                        </div>
                    </div>

                    {/* Right Section: Sitemap and Socials */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Sitemap */}
                        <div>
                            <p className="reveal-up mb-2 font-semibold text-zinc-200">Sitemap</p>
                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a 
                                            href={href} 
                                            className="reveal-up block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Socials */}
                        <div>
                            <p className="reveal-up mb-2 font-semibold text-zinc-200">Socials</p>
                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a 
                                            href={href} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="reveal-up block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="flex items-center justify-between pt-10 mb-8">
                    <a href="/" className="logo reveal-up">
                        <img 
                            src="/images/logo-paolo.png" 
                            width={40}
                            height={40}
                            alt="Logo" 
                        />
                    </a>
                    <p className="reveal-up text-zinc-500 text-sm">
                        &copy; 2024 <span className="text-zinc-200">Paolo Pedroso</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

