import Head from 'next/head';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/layout/Navigation';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import IconButton from '../components/ui/IconButton';
import ProjectCard from '../components/ui/ProjectCard';
import FlipCard from '../components/ui/FlipCard';
import Footer from '../components/layout/Footer';
import RightNavigation from '../components/layout/RightNavigation';
import GradientBackground from '../components/layout/GradientBackground';

export default function Home() {
  useEffect(() => {
    // Reset scroll position on page load
    window.scrollTo(0, 0);
  }, []);

  // Fade in animation for hero section
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <>
      <Head>
        <title>Linbo Cao - AI Research & Development</title>
        <meta name="description" content="LLM Research & Development | Mathematics Undergraduate | Competitive Programmer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GradientBackground />
      <Navigation />
      <RightNavigation />

      {/* Hero Section */}
      <Section
        id="home"
        fullHeight
        className="pr-4 sm:pr-8 md:pr-20"
        isCover={true}
      >
        <div className="max-w-5xl mx-auto w-full pr-4 sm:pr-8 md:pr-12">
          <motion.div
            className="grid md:grid-cols-2 gap-6 md:gap-12 items-center"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            {/* Profile Image - Now on the left, smaller on mobile */}
            <motion.div
              className="relative mx-auto md:mx-0 w-3/4 md:w-full mt-6 md:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                {/* Inner shadow/vignette effect */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_30px_rgba(0,0,0,0.6)] rounded-2xl z-10"></div>

                {/* The image */}
                <img
                  src="/profile.jpg"
                  alt="Linbo Cao"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text Content - Now on the right, with responsive text breaks */}
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-title tracking-tighter text-surface">
                Linbo Cao
                <br />
                <span className="text-accent-green font-accent whitespace-normal md:whitespace-nowrap">LLM Researcher</span>
                <br className="block" />
                <span className="block">&amp; Developer</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-surface/80">
                <span className="whitespace-normal md:whitespace-nowrap">Mathematics Undergraduate at UWaterloo (2023 - 2028)</span>
                <br />
                LLM Addict
                <br />
                Focusing on LLM Evaluation, PEFT, and Alignment.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <Button
                  href="/cv"
                  variant="primary"
                  className="border-2 border-accent-green"
                >
                  View CV
                </Button>
                <Button
                  to="about"
                  variant="outline"
                >
                  About Me
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="pr-4 sm:pr-8 md:pr-20" darkBg>
        <div className="max-w-5xl mx-auto w-full pr-4 sm:pr-8 md:pr-12">
          <h2 className="text-3xl md:text-4xl font-bold font-title tracking-tighter text-surface mb-8">
            About <span className="text-accent-green font-accent">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* About Content */}
            <div className="space-y-6">
              <p className="text-lg text-surface/80">
                I am a Mathematics undergraduate at the University of Waterloo, now singularly focused on the core challenges of Large Language Models: <strong>evaluation, safety, and efficiency (PEFT).</strong>
              </p>
              <p className="text-lg text-surface/80">
                After a high-achieving background in mathematics and programming, the launch of models like GPT-4 was a profound turning point. The almost alien-like intelligence, the emergence of alter-egos like 'Sydney' in Bing, the cat-and-mouse game of 'DAN' prompts—I was completely captivated. Then, during my first year of university, witnessing the rapid evolution with models like Claude 3 and Gemini 1.5, I realized I couldn't afford to wait. I had to dive in, and contributing to this field became my absolute priority, every single day.
              </p>
              <p className="text-lg text-surface/80">
                This is the drive that fuels my research. It's what has allowed me, with the help of great collaborators, to contribute to the work you see here. My goal is to bring this same hands-on intensity to a team building the next generation of robust and reliable AI systems.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-surface">Technical Skills</h3>

              {/* Programming Languages */}
              <div className="space-y-2">
                <h4 className="text-accent-green">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'C#', 'C++', 'R'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-surface/5 rounded-full text-surface/80 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI/ML */}
              <div className="space-y-2">
                <h4 className="text-accent-green">AI & Machine Learning</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'PyTorch',
                    'LLM Deployment',
                    'LLM Evaluation',
                    'LLM Fine-tuning',
                    'PEFT', // Added PEFT explicitly
                    'Multi-agent Systems',
                    'Natural Language Processing',
                    'LLM Alignment & Safety' // Added Alignment/Safety
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-surface/5 rounded-full text-surface/80 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Web Development */}
              <div className="space-y-2">
                <h4 className="text-accent-green">Web Development</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React',
                    'Next.js',
                    'HTML/CSS',
                    'Tailwind CSS',
                    'Git'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-surface/5 rounded-full text-surface/80 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data Analysis */}
              <div className="space-y-2">
                <h4 className="text-accent-green">Data Analysis</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Matplotlib',
                    'NumPy',
                    'pandas',
                    'Seaborn',
                    'Statistical Analysis'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-surface/5 rounded-full text-surface/80 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className="space-y-2">
                <h4 className="text-accent-green">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Git',
                    'Linux',
                    'Docker',
                    'Figma',
                    'Canva',
                    'Google Analytics',
                    'HubSpot',
                    'LaTeX',
                    'vLLM', // Added from research
                    'Ollama' // Added from research
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-surface/5 rounded-full text-surface/80 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="pr-4 sm:pr-8 md:pr-20" darkBg>
        <div className="max-w-5xl mx-auto w-full pr-4 sm:pr-8 md:pr-12">
          <h2 className="text-3xl md:text-4xl font-bold font-title tracking-tighter text-surface mb-12">
            Work <span className="text-accent-green font-accent">Experience</span>
          </h2>
          <div className="space-y-8">
            <div className="bg-surface/5 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-surface mb-1">Cofounder & Founding Engineer</h3>
              <p className="text-accent-green mb-2">
                <a href="https://socaio.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Socaio</a> | Aug 2025 - Sep 2025
              </p>
              <ul className="list-disc list-inside text-surface/80 space-y-1">
                <li>Solely engineered the LLM-powered social simulation platform from concept to MVP.</li>
                <li>Developed the full stack, including a Next.js front-end, FastAPI back-end, and the core LLM pipeline.</li>
                <li>Shipped the product in under one month, establishing the foundation for initial user and investor outreach.</li>
              </ul>
            </div>

            <div className="bg-surface/5 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-surface mb-1">Web Content & Digital Marketing Specialist</h3>
              <p className="text-accent-green mb-2">Darlings Ingredients | Sep 2024 - Dec 2024</p>
              <ul className="list-disc list-inside text-surface/80 space-y-1">
                <li>Managed digital marketing campaigns and web content strategy.</li>
                <li>Utilized tools including Canva, Figma, Google Analytics, and HubSpot.</li>
                <li>Implemented SEO optimization and UI/UX improvements.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Research Section */}
      <Section id="research" className="pr-4 sm:pr-8 md:pr-20" darkBg>
        <div className="max-w-5xl mx-auto w-full pr-4 sm:pr-8 md:pr-12">
          <h2 className="text-3xl md:text-4xl font-bold font-title tracking-tighter text-surface mb-12">
            Research <span className="text-accent-green font-accent">Focus</span>
          </h2>

          {/* Updated grid to accommodate 4 cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Robust LLM Evaluation (Debate-Driven) */}
            <FlipCard
              frontContent={
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-surface">
                    Pretraining on the Test Set Is No Longer All You Need: A Debate-Driven Approach to QA Benchmarks
                  </h3>
                  <p className="text-surface/80">
                    Introduces a debate-driven evaluation paradigm for QA benchmarks, applicable to all QA datasets, tackling data contamination and benchmark saturation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                      COLM 2025
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                      LLM Evaluation
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                      Data Contamination
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                      Multi-Agent Systems
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                      Benchmarking
                    </span>
                  </div>
                </div>
              }
              backContent={
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-surface">Details & Contributions</h3>
                  <ul className="list-disc list-inside text-surface/80 space-y-2">
                    <li>First author on COLM 2025 accepted paper introducing a debate-driven evaluation paradigm for QA benchmarks.</li>
                    <li>Developed a systematic pipeline to convert QA tasks into adversarial debates, with a judge model blind to the correct answer.</li>
                    <li>Demonstrated that debate-based evaluation penalizes memorization and is robust to data contamination, outperforming standard benchmarks.</li>
                    <li>Released a public benchmark and code, showing scalability and cost-effectiveness for future LLM evaluation.</li>
                    <li>Technologies: Python, LLM APIs, Benchmarking, Multi-agent Systems</li>
                  </ul>
                  <Button
                    href="https://arxiv.org/abs/2507.17747"
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Paper (arXiv)
                  </Button>
                </div>
              }
            />

            {/* Card 2: UORA - PEFT Method */}
            <FlipCard
              frontContent={
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-surface">UORA: Uniform Orthogonal Reinitialization Adaptation</h3>
                  <p className="text-surface/80">
                    Novel parameter-efficient fine-tuning method achieving state-of-the-art efficiency through interpolation-based reinitialization of frozen projection matrices.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                      ACL 2025 Main
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                      PEFT
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                      LLM Fine-tuning
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                      Low-Rank Methods
                    </span>
                  </div>
                </div>
              }
              backContent={
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-surface">Details & Contributions</h3>
                  <ul className="list-disc list-inside text-surface/80 space-y-2">
                    <li>Contributor on paper accepted to ACL 2025 main conference, focusing on parameter-efficient fine-tuning innovation.</li>
                    <li>UORA achieves 15x fewer parameters than LoRA on GLUE benchmarks and 8x fewer on E2E benchmarks while maintaining competitive performance.</li>
                    <li>Key innovation: interpolation-based reinitialization mechanism that selectively updates frozen matrices based on vector magnitude heuristics, enabling lower ranks than VeRA.</li>
                    <li>Comprehensive evaluation across NLU (GLUE), NLG (E2E), instruction-tuning (LLaMA), and computer vision (ViT) tasks demonstrating broad applicability.</li>
                    <li>Implemented orthogonal uniform initialization and dimension pruning strategies to enhance gradient flow and parameter efficiency.</li>
                    <li>Contributed to experimental design using PyTorch, extensive hyperparameter tuning, and ablation studies validating the approach.</li>
                  </ul>
                  <Button
                    href="https://arxiv.org/abs/2505.20154"
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Paper (arXiv)
                  </Button>
                </div>
              }
            />

            {/* Card 3: Role-Play Bias */}
            <FlipCard
              frontContent={
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-surface">Bias & Toxicity in Role-Play Reasoning</h3>
                  <p className="text-surface/80">
                    Investigating how LLM role-play, especially with automated role selection, can amplify bias and generate harmful content even from neutral roles.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                      LLM Bias
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                      Toxicity Analysis
                    </span>
                     <span className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                      Role-Play Scenarios
                    </span>
                     <span className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                      Safety Risks
                    </span>
                  </div>
                </div>
              }
              backContent={
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-surface">Details & Contributions</h3>
                  <ul className="list-disc list-inside text-surface/80 space-y-2">
                    <li>Co-first author on research paper currently under peer review, contributing significantly to methodology and analysis.</li>
                    <li>Conducted in-depth analysis of risks associated with automated role selection mechanisms in LLMs, highlighting potential failure modes and safety concerns.</li>
                    <li>Systematically examined how assigning different persona roles (even neutral ones) impacts the generation frequency and severity of biased or harmful content across various contexts.</li>
                    <li>Contributed to the experimental design, data collection process, and interpretation of results for the study, ensuring rigorous evaluation.</li>
                    <li>Utilized Python for scripting experiments, interacted with various LLM APIs, employed standard safety and bias benchmarks, and performed rigorous data analysis using libraries like pandas and Matplotlib.</li>
                  </ul>
                  {/* Keep arXiv link if it's already public */}
                  <Button
                    href="https://arxiv.org/abs/2409.13979" // Link from CV
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Paper (arXiv)
                  </Button>
                </div>
              }
            />

            {/* Card 4: Reasoning Framework Bias */}
            <FlipCard
              frontContent={
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-surface">Safety Risks in LLM Reasoning Frameworks</h3>
                  <p className="text-surface/80">
                    Examining toxicity and fairness issues arising from advanced LLM reasoning techniques like chain-of-thought and multi-agent debating.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                      LLM Safety
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                      Reasoning Frameworks
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                      Toxicity & Fairness
                    </span>
                     <span className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                      Alignment
                    </span>
                  </div>
                </div>
              }
              backContent={
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-surface">Details & Contributions</h3>
                   <ul className="list-disc list-inside text-surface/80 space-y-2">
                    <li>Co-first author on paper under review, sharing primary responsibility for the research direction and execution.</li>
                    <li>Provided empirical evidence demonstrating how advanced reasoning prompts (e.g., chain-of-thought, multi-agent interactions) can inadvertently bypass safety alignments, leading to undesirable outputs.</li>
                    <li>Performed comprehensive evaluations across a diverse set of large language models and utilized multiple established safety benchmarks to ensure the robustness and generalizability of findings.</li>
                    <li>Investigated the influence of prompt structure, complexity, and language variations on model safety performance during complex reasoning tasks.</li>
                    <li>Leveraged Python, various LLM APIs, and efficient inference libraries like vLLM and Ollama for large-scale experiments, coupled with detailed statistical data analysis.</li>
                  </ul>
                  {/* No public link mentioned in abstract/CV */}
                </div>
              }
            />
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="pr-4 sm:pr-8 md:pr-20" darkBg>
        <div className="max-w-5xl mx-auto w-full pr-4 sm:pr-8 md:pr-12">
          <h2 className="text-3xl md:text-4xl font-bold font-title tracking-tighter text-surface mb-8">
            My <span className="text-accent-green font-accent">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FlipCard
              frontContent={
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-surface">Personal Website</h3>
                  <p className="text-surface/80">
                    Modern portfolio site showcasing my research and projects. Built with modern web technologies and deployed on cloud infrastructure.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Tailwind CSS', 'Cloudflare'].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              }
              backContent={
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-surface">Details & Implementation</h3>
                  <ul className="list-disc list-inside text-surface/80 space-y-2">
                    <li>Developed responsive, performance-optimized portfolio website using React, Next.js, and Tailwind CSS, featuring custom animations and interactive components</li>
                    <li>Implemented deployment pipeline using Cloudflare for CDN and Oracle VPS for hosting, ensuring reliable performance and global accessibility</li>
                    <li>Designed component architecture focused on maintainability and extensibility, with a modular approach to UI elements and content sections</li>
                    <li>Future plans include integrating LLM capabilities to serve as my digital 'representative', allowing visitors to interact with an AI version of myself that can answer questions about my research and projects</li>
                    <li>Utilized modern development practices including version control with Git, responsive design principles, and accessibility considerations</li>
                  </ul>
                  <div className="flex space-x-3 mt-4">
                    <Button
                      href="https://github.com/l6cao/l6cao.github.io"
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Button>
                    <Button
                      href="https://l6cao.github.io"
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              }
            />
            <FlipCard
              frontContent={
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-surface">Pathfinding Visualizer</h3>
                  <p className="text-surface/80">
                    Simple interactive tool demonstrating basic pathfinding algorithms with visual feedback. A beginner coding project.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'JavaScript', 'Algorithms'].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              }
              backContent={
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-surface">Details & Implementation</h3>
                  <ul className="list-disc list-inside text-surface/80 space-y-2">
                    <li>Basic student learning project created to practice JavaScript and React fundamentals while exploring simple algorithms</li>
                    <li>Implemented a few pathfinding algorithms (A*, BFS) with basic visual representation on a simple grid</li>
                    <li>Created a minimal UI allowing users to place start/end points and draw basic obstacles</li>
                    <li>Project has limitations including performance issues with larger grids and limited customization options</li>
                    <li>Built primarily as a personal learning exercise to understand how these algorithms traverse graphs</li>
                    <li>Not intended as a robust or feature-complete implementation, but rather as a hands-on way to visualize concepts from algorithms courses</li>
                  </ul>
                  <div className="mt-4">
                    <Button
                      href="https://github.com/l6cao/pathfinding-visualizer"
                      variant="outline"
                      size="sm"
                      className="w-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repository
                    </Button>
                  </div>
                </div>
              }
            />
            <FlipCard
              frontContent={
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-surface">NotiSimplify</h3>
                  <p className="text-surface/80">
                    Basic notification simplification tool. Essentially a wrapper for OpenAI's API to summarize notification text.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['C#', 'LLM Integration', 'UI Design'].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              }
              backContent={
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-surface">Details & Implementation</h3>
                  <ul className="list-disc list-inside text-surface/80 space-y-2">
                    <li>Simple student project with minimal functionality: paste notification text, send to OpenAI API, and display the simplified result</li>
                    <li>Completed in May 2024 as a quick weekend project, just months before Apple announced Apple Intelligence at WWDC 2024, which includes similar notification simplification features built into every device</li>
                    <li>Gave me a good laugh seeing a basic idea I implemented as a simple project later appear in a major product announcement — should have pursued it more seriously! 😄</li>
                    <li>Very basic UI with a text input field, a "simplify" button, and a results display area</li>
                    <li>Uses a straightforward prompt to the OpenAI API requesting simplified language for the input text</li>
                    <li>Built with C# mainly to practice API integration, with a bare-bones interface focused on functionality rather than design</li>
                    <li>No actual system integration with device notifications - merely a proof of concept</li>
                  </ul>
                  <div className="mt-4">
                    <Button
                      href="https://github.com/l6cao/NotiSimplify"
                      variant="outline"
                      size="sm"
                      className="w-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repository
                    </Button>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="pr-4 sm:pr-8 md:pr-20">
        <div className="max-w-5xl mx-auto w-full pr-4 sm:pr-8 md:pr-12">
          <h2 className="text-3xl md:text-4xl font-bold font-title tracking-tighter text-surface mb-12">
            Get in <span className="text-accent-green font-accent">Touch</span>
          </h2>
          
          <div>
            <h3 className="text-xl font-bold text-surface mb-6">Contact Information</h3>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0">
              <a
                href="mailto:l6cao@uwaterloo.ca"
                className="flex items-center space-x-4 text-surface hover:text-accent-green transition-colors duration-300 group"
              >
                <IconButton
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                    </svg>
                  }
                  label="Email"
                />
                <span>l6cao@uwaterloo.ca</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/linbo-cao/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-surface hover:text-accent-green transition-colors duration-300 group"
              >
                <IconButton
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  }
                  label="LinkedIn"
                />
                <span>linkedin.com/in/linbo-cao</span>
              </a>
              
              <a
                href="https://github.com/l6cao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-surface hover:text-accent-green transition-colors duration-300 group"
              >
                <IconButton
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  }
                  label="GitHub"
                />
                <span>github.com/l6cao</span>
              </a>
              
              <a
                href="https://scholar.google.com/citations?user=MvVnENkAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-surface hover:text-accent-green transition-colors duration-300 group"
              >
                <IconButton
                  icon={ 
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10.9c-2.67 0-8 1.337-8 4.1v1.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-1.5c0-2.763-5.33-4.1-8-4.1z"/>
                    </svg>
                  }
                  label="Google Scholar"
                />
                <span>Google Scholar Profile</span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}