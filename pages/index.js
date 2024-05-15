import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, Element } from 'react-scroll';
import { useSpring, animated } from 'react-spring';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const fadeInProps = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  return (
    <div>
      <Head>
        <title>Linbo Cao - Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-lightgrey text-darkgrey p-10 flex flex-col items-center justify-center min-h-screen relative">
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          <animated.div style={{ ...fadeInProps, width: '450px' }} className="bg-white shadow-lg p-16 rounded-lg mb-10 md:mb-0 md:mr-10">
            <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'serif' }}>Linbo Cao</h1>
            <p className="text-2xl mb-2">2A Honours Mathematics, University of Waterloo</p>
            <p className="text-lg mb-1">Email: l6cao@uwaterloo.ca</p>
            <p className="text-lg mb-1">Phone: 647-466-9388</p>
            <p className="text-lg mb-1">Waterloo, ON</p>
            <a className="text-lg mb-1 text-navy" href="https://1drv.ms/b/s!AjVhTMvarPSWvG8vj1ZceqQUQXJo?e=HJGI9y" target="_blank" rel="noopener noreferrer">Résumé</a>
          </animated.div>
          <animated.div style={fadeInProps} className="rounded-full overflow-hidden w-96 h-96">
            <Image src="/profile.jpg" alt="Linbo Cao" width={384} height={384} />
          </animated.div>
        </div>

        <div className="text-center mt-40">
          <h1 className="text-6xl font-bold mb-4">I Knew You'd Come! Welcome!</h1>
          <p className="text-2xl mb-4">
            I am your go-to guy, <span className="text-darkgrey font-bold">Linbo Cao</span>. This website is dedicated to showcasing my skills, projects, and so much more.
          </p>
          <Link to="about" smooth={true} duration={1000}>
            <button className="text-xl bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </header>

      <Element name="about">
        <div className="bg-lightgreen text-darkgrey py-10 px-5 text-center min-h-screen flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-2xl max-w-4xl mx-auto mb-4">
            I am Linbo Cao, a 2A Honours Mathematics student at the University of Waterloo. I have strong skills in programming, mathematics, and web development. I enjoy collaborating on diverse projects and exploring new technologies.
          </p>
          <ul className="text-2xl max-w-4xl mx-auto list-disc list-inside">
            <li data-aos="fade-right" className="mb-2">Valedictorian of high school.</li>
            <li data-aos="fade-right" className="mb-2">Ranked 12th in 2023 Canadian Computing Competition (CCC) Senior Group.</li>
            <li data-aos="fade-right" className="mb-2">Ranked top 5%, achieved Honor Roll status in the Euclid Mathematics Contest.</li>
            <li data-aos="fade-right" className="mb-2">Enjoys playing football and engaging in AI projects.</li>
            <li data-aos="fade-right" className="mb-2">Loves experimenting with hardware, VR, and racing games.</li>
          </ul>
          <Link to="skills" smooth={true} duration={1000}>
            <button className="text-xl bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition duration-300 mt-6">
              My Skills
            </button>
          </Link>
        </div>
      </Element>

      <Element name="skills">
        <div className="bg-lightgrey text-darkgrey py-10 px-5 text-center min-h-screen flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <animated.div style={fadeInProps} className="bg-white shadow-lg p-10 rounded-lg" data-aos="fade-up">
              <p className="text-3xl font-bold mb-4">Programming</p>
              <ul className="list-disc list-inside text-left text-2xl mb-20">
                <li>Proficient: C, Python</li>
                <li>Familiar: C++, C#, SQL</li>
                <li>Understanding: JavaScript, R</li>
              </ul>
              <p className="text-2xl font-bold mt-8 mb-2">Web Development</p>
              <ul className="list-disc list-inside text-left text-xl">
                <li>Basic experience: Vue, React</li>
                <li>HTML5, CSS3</li>
              </ul>
            </animated.div>
            <animated.div style={fadeInProps} className="bg-white shadow-lg p-8 rounded-lg" data-aos="fade-up">
              <p className="text-2xl font-bold mb-2">Tools &amp; Software</p>
              <ul className="list-disc list-inside text-left text-xl">
                <li>Microsoft Office Suite</li>
                <li>Git</li>
                <li>Entry-level Unity</li>
              </ul>
              <p className="text-2xl font-bold mt-6 mb-2">Hardware</p>
              <ul className="list-disc list-inside text-left text-xl">
                <li>Expert in PC builds</li>
                <li>Home servers, NAS</li>
                <li>Network management</li>
              </ul>
              <p className="text-2xl font-bold mt-6 mb-2">Mathematics</p>
              <ul className="list-disc list-inside text-left text-xl">
                <li>Strong analytical abilities</li>
                <li>Problem-solving skills</li>
              </ul>
            </animated.div>
          </div>
          <Link to="projects" smooth={true} duration={1000}>
            <button className="text-2xl bg-primary text-white py-3 px-6 rounded hover:bg-secondary transition duration-300 mt-10">
              Projects
            </button>
          </Link>
        </div>
      </Element>

      <Element name="projects">
        <div className="bg-lightgreen text-darkgrey py-10 px-5 text-center min-h-screen flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <animated.div style={fadeInProps} className="bg-white shadow-lg p-10 rounded-lg" data-aos="fade-up">
              <p className="text-3xl font-bold mb-4">Snake Game</p>
              <p className="text-xl mb-4">A classic Snake game implemented using Python and Pygame</p>
              <ul className="list-disc list-inside text-left text-lg">
                <li>Object-oriented programming</li>
                <li>Game development basics</li>
                <li>Understanding of game loops and user input handling</li>
              </ul>
            </animated.div>
            <animated.div style={fadeInProps} className="bg-white shadow-lg p-10 rounded-lg" data-aos="fade-up">
              <p className="text-3xl font-bold mb-4">GPT Application (NotiSimplify)</p>
              <p className="text-xl mb-4">Combines &quot;notification&quot; and &quot;simplify&quot; to show the tool&apos;s function (C#, OpenAI API)</p>
              <ul className="list-disc list-inside text-left text-lg">
                <li>Developed a messaging application that integrates with OpenAI&apos;s GPT-4 API for generating intelligent responses</li>
                <li>Implemented a user-friendly interface using C# for the front-end and leveraged OpenAI&apos;s powerful language model for the back-end</li>
              </ul>
            </animated.div>
            <animated.div style={fadeInProps} className="bg-white shadow-lg p-10 rounded-lg" data-aos="fade-up">
              <p className="text-3xl font-bold mb-4">Todo List Manager</p>
              <p className="text-xl mb-4">A command-line tool for managing todo lists, with features like adding, editing, and deleting tasks, and saving data to a file</p>
              <ul className="list-disc list-inside text-left text-lg">
                <li>File I/O operations</li>
                <li>Data persistence</li>
                <li>CRUD functionality</li>
                <li>Command-line interface design</li>
              </ul>
            </animated.div>
            <animated.div style={fadeInProps} className="bg-white shadow-lg p-10 rounded-lg" data-aos="fade-up">
              <p className="text-3xl font-bold mb-4">Pathfinding Visualizer</p>
              <p className="text-xl mb-4">A web application that visualizes pathfinding algorithms (e.g., A*, Dijkstra&apos;s) on a grid, allowing users to create obstacles and select start and end points</p>
              <ul className="list-disc list-inside text-left text-lg">
                <li>Understanding of pathfinding algorithms</li>
                <li>Data structures (graphs)</li>
                <li>Front-end development with React</li>
                <li>Interactive visualizations</li>
              </ul>
            </animated.div>
          </div>
          <Link to="more" smooth={true} duration={1000}>
            <button className="text-2xl bg-primary text-white py-3 px-6 rounded hover:bg-secondary transition duration-300 mt-10">
              More
            </button>
          </Link>
        </div>
      </Element>

      <Element name="more">
        <div className="bg-lightgrey text-darkgrey py-10 px-5 text-center min-h-screen flex flex-col justify-center" id="more">
          <h2 className="text-4xl font-bold mb-4">More About Me</h2>
          <p className="text-2xl max-w-4xl mx-auto mb-4">
            Here are some additional details about me. 
          </p>
                    <div className="mt-6">
            <a href="https://github.com/l6cao" className="text-navy mx-2">GitHub</a>
            <a href="https://www.linkedin.com/in/linbo-cao-90968b309/" className="text-navy mx-2">LinkedIn</a>
          </div>
        </div>
      </Element>

      {/* Floating Icons */}
      <div className="fixed top-5 right-5 flex flex-col items-center space-y-4">
        <a href="https://github.com/l6cao" className="animate-float">
          <Image src="/icons/github.svg" alt="GitHub" width={50} height={50} />
        </a>
        <a href="https://www.linkedin.com/in/linbo-cao-90968b309/" className="animate-float">
          <Image src="/icons/linkedin.svg" alt="LinkedIn" width={50} height={50} />
        </a>
      </div>
    </div>
  );
}
