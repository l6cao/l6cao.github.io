import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';

export default function CV() {
  return (
    <>
      <Head>
        <title>CV - Linbo Cao</title>
        <meta name="description" content="Professional CV of Linbo Cao - LLM Research & Development" />
      </Head>
      
      {/* Page transition overlay - fades from dark to white */}
      <motion.div 
        className="fixed inset-0 bg-primary z-50 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      
      <main className="pt-8 pb-16 bg-white text-black min-h-screen">
        <motion.div 
          className="max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Back Button */}
          <div className="mb-6">
            <Link href="/" className="text-[#6ba123] hover:text-[#557f1b] transition-colors flex items-center">
              <ArrowLeft size={20} className="mr-2" />
              <span>Back to Home</span>
            </Link>
          </div>
          
          {/* CV Header */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1 className="text-3xl font-bold mb-2">Curriculum Vitae</h1>
            <h2 className="text-xl text-gray-700">Linbo Cao</h2>
            
            <div className="border-t border-gray-200 py-4 my-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold mb-2">Contact Information</h3>
                  <ul className="space-y-1">
                    <li>Email: l6cao@uwaterloo.ca</li>
                    <li>Location: Waterloo, ON, Canada</li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/linbo-cao/" className="text-[#6ba123] hover:text-[#557f1b]">linkedin.com/in/linbo-cao</a></li>
                    <li>Google Scholar: <a href="https://scholar.google.com/citations?user=MvVnENkAAAAJ" className="text-[#6ba123] hover:text-[#557f1b]">Profile</a></li>
                    <li>GitHub: <a href="https://github.com/l6cao" className="text-[#6ba123] hover:text-[#557f1b]">github.com/l6cao</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Professional Summary */}
          <motion.section 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#FF6600]">Professional Summary</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Mathematics undergraduate at the University of Waterloo with a focus on AI research and development.</li>
              <li>Possesses an extraordinarily strong interest and experience in LLM development and implementation.</li>
              <li>Actively engaged in ongoing research encompassing LLM evaluation, PEFT, ethics, and alignment.</li>
              <li>Quick learner capable of managing tasks across diverse fields, including IT maintenance and UI/UX design.</li>
              <li>Demonstrated excellence in competitive programming and mathematics competitions.</li>
            </ul>
          </motion.section>
          
          {/* Education */}
          <motion.section 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#FF6600]">Education</h2>
            <div className="mb-4">
              <div className="mb-1">
                <h3 className="font-bold">Bachelor of Mathematics, Honours Co-op</h3>
                <p>University of Waterloo, 2023 - 2028 </p>
              </div>
              <ul className="list-disc list-inside ml-2">
                <li>Relevant coursework: Statistics, Objective Programming, Technical Writing</li>
                <li>President's Scholarship of Distinction recipient</li>
              </ul>
            </div>
            <div className="mb-4">
              <div className="mb-1">
                <h3 className="font-bold">Secondary Education</h3>
                <p>Westfield Secondary School</p>
              </div>
              <ul className="list-disc list-inside ml-2">
                <li>Valedictorian</li>
                <li>Ranked 12th in 2023 Canadian Computing Competition (CCC) Senior Group</li>
                <li>Ranked top 5%, Honor Roll in Euclid Mathematics Contest</li>
              </ul>
            </div>
          </motion.section>
          
          {/* Research Experience */}
          <motion.section 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#FF6600]">Research Experience</h2>
            
            {/* Debate-Driven Evaluation Paper */}
            <div className="mb-6">
              <div className="mb-1">
                <h3 className="font-bold">Pretraining on the Test Set Is No Longer All You Need: A Debate-Driven Approach to QA Benchmarks</h3>
                <p>First Author, March 2025 - July 2025, accepted to COLM 2025</p>
              </div>
              <ul className="list-disc list-inside ml-2">
                <li>Proposed a debate-driven evaluation paradigm for QA benchmarks, transforming standard datasets into adversarial debates between models adjudicated by a blind judge model</li>
                <li>Developed an evaluation pipeline and public benchmark demonstrating robustness against data contamination and shallow memorization</li>
                <li>Empirical results show debate-based evaluation penalizes memorization and scales to future, more capable systems</li>
                <li>Technologies: Python, LLM APIs, Benchmarking, Multi-agent Systems</li>
                <li>Paper available on <a href="https://arxiv.org/abs/2507.17747" className="text-[#6ba123] hover:text-[#557f1b]">arXiv</a></li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="mb-1">
                <h3 className="font-bold">UORA: Uniform Orthogonal Reinitialization Adaptation</h3>
                <p>Contributing Author, December 2024 - February 2025, accepted to ACL 2025 Main Conference</p>
              </div>
              <ul className="list-disc list-inside ml-2">
                <li>Contributed to developing UORA, a novel PEFT method achieving 15x parameter reduction vs LoRA while maintaining performance</li>
                <li>Implemented orthogonal uniform initialization and dimension pruning strategies</li>
                <li>Technologies: Python, PyTorch, LLM APIs, Deep Learning</li>
                <li>Paper available on <a href="https://arxiv.org/abs/2505.20154" className="text-[#6ba123] hover:text-[#557f1b]">arXiv</a></li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="mb-1">
                <h3 className="font-bold">Bias and Toxicity in Role-Play Reasoning</h3>
                <p>Co-first Author, August 2024 - December 2024, currently under revision & review</p>
              </div>
              <ul className="list-disc list-inside ml-2">
                <li>Co-first author on research paper currently under peer review</li>
                <li>Investigated bias and toxicity affects in LLM role-play scenarios</li>
                <li>Technologies: Python, LLM APIs, LLM Benchmarks, Data Management, Matplotlib, NumPy, pandas</li>
                <li>Paper available on <a href="https://arxiv.org/abs/2409.13979" className="text-[#6ba123] hover:text-[#557f1b]">arXiv</a></li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="mb-1">
                <h3 className="font-bold">Bias and Toxicity in Other Reasoning Frameworks in LLMs</h3>
                <p>Co-first Author, November 2024 - February 2025, currently under review</p>
              </div>
              <ul className="list-disc list-inside ml-2">
                <li>Studying bias and toxicity patterns in complex reasoning tasks</li>
                <li>Technologies: Python, LLM APIs, vLLM, Ollama, Data Analysis</li>
              </ul>
            </div>
          </motion.section>
          
          {/* Professional Experience */}
          <motion.section 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#FF6600]">Professional Experience</h2>
            
            <div className="mb-6">
              <div className="mb-1">
                <h3 className="font-bold">Web Content & Digital Marketing Specialist</h3>
                <p>Darlings Ingredients, September 2024 - December 2024</p>
              </div>
              <ul className="list-disc list-inside ml-2">
                <li>Managed digital marketing campaigns and web content strategy</li>
                <li>Utilized tools including Canva, Figma, Google Analytics, and HubSpot</li>
                <li>Implemented SEO optimization and UI/UX improvements</li>
              </ul>
            </div>
          </motion.section>
          
          {/* Projects */}
          <motion.section 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#FF6600]">Technical Projects</h2>
            
            <div className="mb-4">
              <div className="mb-1">
                <h3 className="font-bold">Personal Website</h3>
                <p>React-based personal website built with Next.js and Tailwind CSS</p>
              </div>
              <ul className="list-disc list-inside ml-2">
                <li>Technologies: React, Next.js, Tailwind CSS, HTML/CSS, Git</li>
                <li>Implemented responsive design and modern UI components</li>
                <li>Link: <a href="https://l6cao.github.io" className="text-[#6ba123] hover:text-[#557f1b]">l6cao.github.io</a></li>
              </ul>
            </div>
            
            <div className="mb-4">
              <div className="mb-1">
                <h3 className="font-bold">Pathfinding Visualizer</h3>
                <p>Interactive pathfinding algorithm visualization tool</p>
              </div>
              <ul className="list-disc list-inside ml-2">
                <li>Technologies: React, JavaScript</li>
                <li>GitHub: <a href="https://github.com/l6cao/pathfinding-visualizer" className="text-[#6ba123] hover:text-[#557f1b]">Repository</a></li>
              </ul>
            </div>
            
            <div className="mb-4">
              <div className="mb-1">
                <h3 className="font-bold">NotiSimplify</h3>
                <p>Notification text simplification system using LLMs</p>
              </div>
              <ul className="list-disc list-inside ml-2">
                <li>Technologies: C#, LLM Integration</li>
                <li>GitHub: <a href="https://github.com/l6cao/NotiSimplify" className="text-[#6ba123] hover:text-[#557f1b]">Repository</a></li>
              </ul>
            </div>
          </motion.section>
          
          {/* Skills */}
          <motion.section 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#FF6600]">Skills</h2>
            
            <div className="mb-3">
              <h3 className="font-bold">Programming Languages</h3>
              <p>Python, JavaScript, C#, C++, R</p>
            </div>
            
            <div className="mb-3">
              <h3 className="font-bold">LLM & Machine Learning</h3>
              <p>PyTorch, LLM Deployment, LLM Evaluation, LLM Fine-tuning, Multi-agent Systems, Natural Language Processing</p>
            </div>

            <div className="mb-3">
              <h3 className="font-bold">Data Analysis</h3>
              <p>Matplotlib, NumPy, pandas, Seaborn, Statistical Analysis</p>
            </div>
            
            <div className="mb-3">
              <h3 className="font-bold">Web Development</h3>
              <p>React, Next.js, HTML/CSS, Git</p>
            </div>
            
            <div className="mb-3">
              <h3 className="font-bold">Tools & Technologies</h3>
              <p>Git, Linux, Docker, Figma, Canva, Google Analytics, HubSpot, LaTeX</p>
            </div>
          </motion.section>
          
          {/* Achievements */}
          <motion.section 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#FF6600]">Notable Achievements</h2>
            <ul className="list-disc list-inside">
              <li>Publications in Progress under ACL Rolling Review</li>
              <li>Ranked 12th in 2023 Canadian Computing Competition Senior Group</li>
              <li>University of Waterloo President's Scholarship of Distinction</li>
              <li>Euclid Mathematics Contest Honor Roll (Top 5%)</li>
              <li>High School Valedictorian</li>
            </ul>
          </motion.section>
          
          {/* Back to Home link at bottom */}
          <motion.div 
            className="mt-10 pt-4 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Link href="/" className="text-[#6ba123] hover:text-[#557f1b] transition-colors">
              Home
            </Link>
          </motion.div>
        </motion.div>
      </main>
      
      <Footer />
    </>
  );
}