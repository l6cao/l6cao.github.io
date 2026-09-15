import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';

const A = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#6ba123] hover:text-[#557f1b] font-bold">{children}</a>
);
const Sec = ({ title, delay, children }) => (
  <motion.section className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }}>
    <h2 className="text-xl font-bold mb-2 text-[#FF6600]">{title}</h2>
    {children}
  </motion.section>
);
// A published-work entry: venue line, author line, then bullets
const Pub = ({ title, venue, authors, children }) => (
  <div className="mb-6">
    <h3 className="font-bold">{title}</h3>
    <p className="text-gray-700">{venue}</p>
    <p className="text-gray-600 text-sm mb-1">{authors}</p>
    <ul className="list-disc list-inside ml-2">{children}</ul>
  </div>
);

export default function CV() {
  return (
    <>
      <Head>
        <title>CV - Linbo Cao</title>
        <meta name="description" content="Professional CV of Linbo Cao - LLM Research & Development" />
      </Head>

      <motion.div className="fixed inset-0 bg-primary z-50 pointer-events-none"
        initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.8, ease: 'easeInOut' }} />

      <main className="pt-8 pb-16 bg-white text-black min-h-screen">
        <motion.div className="max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>

          <div className="mb-6">
            <Link href="/" className="text-[#6ba123] hover:text-[#557f1b] transition-colors flex items-center font-bold">
              <ArrowLeft size={20} className="mr-2" /><span>Back to Home</span>
            </Link>
          </div>

          {/* Header + Contact */}
          <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h1 className="text-3xl font-bold mb-2">Curriculum Vitae</h1>
            <h2 className="text-xl text-gray-700">Linbo Cao</h2>
            <div className="border-t border-gray-200 py-4 my-4">
              <h3 className="font-bold mb-2">Contact Information</h3>
              <ul className="space-y-1">
                <li>Email: l6cao@uwaterloo.ca</li>
                <li>Location: Waterloo, ON, Canada</li>
                <li>LinkedIn: <A href="https://www.linkedin.com/in/linbo-cao/">linkedin.com/in/linbo-cao</A></li>
                <li>Google Scholar: <A href="https://scholar.google.com/citations?user=MvVnENkAAAAJ">Profile</A></li>
                <li>GitHub: <A href="https://github.com/l6cao">github.com/l6cao</A></li>
              </ul>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <Sec title="Professional Summary" delay={0.5}>
            <ul className="list-disc list-inside space-y-1">
              <li>Mathematics undergraduate at the University of Waterloo, 2023–2028.</li>
              <li><strong>LLM researcher since 2024</strong> — <A href="https://scholar.google.com/citations?user=MvVnENkAAAAJ">Google Scholar</A></li>
              <li>Addicted to the full spectrum of LLMs:
                <ul className="list-[circle] list-inside ml-5">
                  <li>Research — pretraining, PEFT, <strong>RL</strong></li>
                  <li>Applied — hardware, infra, <strong>evaluation</strong>, <strong>auto research</strong>, <strong>LLM agents</strong>, <strong>multi-agent</strong></li>
                  <li>Safety — interpretability, <strong>safety</strong>, ethics</li>
                </ul>
              </li>
              <li>Active IT &amp; hardware enthusiast:
                <ul className="list-[circle] list-inside ml-5">
                  <li>Agentic environments — sandboxing, MCPs, RL environments</li>
                  <li>Cluster management — Linux, CUDA, Slurm, distributed FS (NFS, Ceph, Gluster, JuiceFS, ZFS)</li>
                  <li>Hardware — GPUs, NICs, RoCE/RDMA, network topology, HPC</li>
                </ul>
              </li>
              <li>Full-stack startup builder:
                <ul className="list-[circle] list-inside ml-5">
                  <li>Frontend — Codex, Claude Code</li>
                  <li>Backend — FastAPI, Supabase, GCP</li>
                  <li>Deploy — Cloudflare, Docker, PM2, Nginx, Oracle</li>
                </ul>
              </li>
              <li>Builder with LLM agents:
                <ul className="list-[circle] list-inside ml-5">
                  <li>2× Claude Max 20x accounts</li>
                  <li>1× OpenAI Pro 20x account</li>
                  <li>Favorite agentic stack: Ralph loop + Claude Code</li>
                  <li>OpenAI Platform Tier 5</li>
                  <li>Anthropic API Platform Scale tier</li>
                  <li>Google AI Studio Tier 2</li>
                </ul>
              </li>
              <li>Former competitive-coding participant in high school.</li>
            </ul>
          </Sec>

          {/* Education */}
          <Sec title="Education" delay={0.6}>
            <div className="mb-4">
              <h3 className="font-bold">Bachelor of Mathematics, Honours Co-op</h3>
              <p>University of Waterloo, 2023–2028</p>
              <ul className="list-disc list-inside ml-2">
                <li>Relevant coursework: Neural Networks, Statistics, Technical Writing</li>
                <li>President's Scholarship of Distinction recipient</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Secondary Education</h3>
              <p>Westfield Secondary School</p>
              <ul className="list-disc list-inside ml-2">
                <li>Valedictorian</li>
                <li>Ranked 12th in 2023 <A href="https://cemc.uwaterloo.ca/sites/default/files/documents/2023/2023CCCResults.pdf">Canadian Computing Competition (CCC)</A> Senior Group</li>
                <li>Ranked top 5%, Honor Roll in <A href="https://cemc.uwaterloo.ca/sites/default/files/documents/2023/2023EuclidResults.pdf">Euclid Mathematics Contest</A></li>
              </ul>
            </div>
          </Sec>

          {/* Research Experience */}
          <Sec title="Research Experience" delay={0.7}>
            <Pub title="Pretraining on the Test Set Is No Longer All You Need: A Debate-Driven Approach to QA Benchmarks"
              venue="COLM 2025" authors={<><strong>Linbo Cao</strong>, Jinman Zhao</>}>
              <li>A debate-driven paradigm for LLM Evaluation, converting existing QA benchmarks into adversarial debates.</li>
              <li>Developed an evaluation pipeline robust against data contamination and shallow memorization.</li>
              <li>Empirical results show debate-based evaluation penalizes memorization and scales to future, more capable systems.</li>
              <li>Technologies: Python, LLM APIs, Benchmarking, Multi-agent Systems</li>
              <li>Paper available on <A href="https://arxiv.org/abs/2507.17747">arXiv</A></li>
            </Pub>
            <Pub title="UORA: Uniform Orthogonal Reinitialization Adaptation"
              venue="ACL 2025 Main Conference" authors={<>Xueyan Zhang, Jinman Zhao, Zhifei Yang, Yibo Zhong, Shuhao Guan, <strong>Linbo Cao</strong>, Yining Wang</>}>
              <li>Contributed to UORA, a PEFT method with 15x fewer parameters than LoRA without performance loss.</li>
              <li>Implemented orthogonal uniform initialization and dimension pruning strategies.</li>
              <li>Technologies: Python, PyTorch, LLM APIs, PEFT</li>
              <li>Paper available on <A href="https://arxiv.org/abs/2505.20154">arXiv</A></li>
            </Pub>
            <Pub title="Syntactic Prediction through Reinforcement Learning"
              venue="EMNLP 2026 Main Conference" authors={<>Jinman Zhao, Yining Wang, Jiahe Liu, Xueyan Zhang, <strong>Linbo Cao</strong>, Jiakang Huang, Yiren Zhao, Renyi Cai, Yitian Ding, Gerald Penn</>}>
              <li>Two-stage post-training (cold-start SFT, then RL) for LLM syntactic prediction.</li>
              <li>RL drives SOTA on constituency parsing and CCG supertagging, beating SFT baselines.</li>
              <li>Technologies: Python, PyTorch, RL, LLM Post-training</li>
            </Pub>
            <Pub title="From Biased Chatbots to Biased Agents: Examining Role Assignment Effects on LLM Agent Robustness"
              venue="AAAI 2026 TrustAgent Workshop" authors={<><strong>Linbo Cao</strong>, Lihao Sun, Yang Yue</>}>
              <li>The first systematic study of demographic persona bias in LLM agents beyond text generation.</li>
              <li>Task-irrelevant persona cues degrade agentic performance by up to 26.2% across diverse domains.</li>
              <li>Effects persist across task types and model architectures, exposing an agent robustness risk.</li>
              <li>Technologies: LLM Agent, Docker, Apptainer, Sandboxing, Agentic Benchmarks, vLLM</li>
              <li>Paper available on <A href="https://arxiv.org/abs/2602.12285">arXiv</A></li>
            </Pub>
            <Pub title="The More You Say, the More You Risk: Ethical Concerns in Large Language Model Reasoning Frameworks"
              venue="ACM Web Conference 2026 (Companion Proceedings)" authors={<>Jinman Zhao, <strong>Linbo Cao</strong>, Xueyan Zhang, Ken Shi, Yining Wang, Gerald Penn</>}>
              <li>Studied bias and toxicity patterns in complex reasoning tasks.</li>
              <li>Technologies: Python, LLM APIs, vLLM, Ollama, Data Analysis</li>
              <li>Paper available on <A href="https://dl.acm.org/doi/abs/10.1145/3774905.3795475">ACM Digital Library</A></li>
            </Pub>
            <Pub title="Bias and Toxicity in Role-Play Reasoning"
              venue="arXiv 2024" authors={<>Jinman Zhao, Zifan Qian, <strong>Linbo Cao</strong>, Yining Wang, Yitian Ding, Yulan Hu, Zeyu Zhang, Zeyong Jin</>}>
              <li>Co-first author on my first research paper.</li>
              <li>Investigated bias and toxicity effects in LLM role-play scenarios.</li>
              <li>Technologies: Python, LLM APIs, LLM Benchmarks, Data Management, Matplotlib, NumPy, pandas</li>
              <li>Paper available on <A href="https://arxiv.org/abs/2409.13979">arXiv</A></li>
            </Pub>
          </Sec>

          {/* Professional Experience */}
          <Sec title="Professional Experience" delay={0.8}>
            <div className="mb-6">
              <h3 className="font-bold">LLM Researcher / Infra</h3>
              <p className="text-gray-700">Noah's Ark Lab, Huawei Canada, Montreal, January 2026–August 2026</p>
              <ul className="list-disc list-inside ml-2 mt-1">
                <li>Auto-Research
                  <ul className="list-[circle] list-inside ml-5"><li>Ran research largely through agentic auto-research, orchestrating LLM agents to run experiments rather than by hand.</li></ul>
                </li>
                <li>TRMs
                  <ul className="list-[circle] list-inside ml-5"><li>Explored Tiny Recursive Models and their transfer to LLMs, including LLM pretraining to solve Sudoku.</li></ul>
                </li>
                <li>Diffusion LLMs
                  <ul className="list-[circle] list-inside ml-5"><li>Traced the bottleneck to autoregressive decoding and pivoted to diffusion LLM pretraining and RL.</li></ul>
                </li>
                <li>Agent Harness Evolve
                  <ul className="list-[circle] list-inside ml-5"><li>Built an RL benchmark where a master agent RL-trains a smaller LLM to stress-test and evolve the harness.</li></ul>
                </li>
                <li>Multi-Agent
                  <ul className="list-[circle] list-inside ml-5"><li>Built a multi-agent benchmark via Lean.</li></ul>
                </li>
                <li>Infra
                  <ul className="list-[circle] list-inside ml-5">
                    <li>Cluster administration: Slurm, distributed filesystems, CUDA/GPU compute across the lab.</li>
                    <li>Designed and built a ~30-node GPU cluster from local workstations, owning the network topology, filesystem, and full stack.</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="font-bold">Cofounder &amp; Founding Engineer</h3>
              <p className="text-gray-700">Socaio, August 2025–September 2025</p>
              <ul className="list-disc list-inside ml-2">
                <li>Solely engineered a multi-agent social simulation tool for PR pros to stress-test messaging before public release.</li>
                <li>Built Next.js frontend with real-time rendering &amp; WebSockets, using Supabase for auth/DB and multilingual support.</li>
                <li>Architected a FastAPI backend with async/sync endpoints to orchestrate multi-stage simulations.</li>
                <li>Orchestrated multi-agent pipeline via Gemini API, using function calling, key, load, rate, and exception management.</li>
                <li>Deployed on Oracle Cloud, ensuring high availability with PM2 and security/performance with Cloudflare.</li>
                <li>Shipped the concept-to-MVP in under one month, establishing the foundation for user and investor outreach.</li>
              </ul>
            </div>
          </Sec>

          {/* Technical Projects */}
          <Sec title="Technical Projects" delay={0.9}>
            <div className="mb-4">
              <h3 className="font-bold">Personal Website</h3>
              <p>React-based personal website built with Next.js and Tailwind CSS</p>
              <ul className="list-disc list-inside ml-2">
                <li>Technologies: React, Next.js, Tailwind CSS, HTML/CSS, Git</li>
                <li>Implemented responsive design and modern UI components</li>
                <li>Link: <A href="https://l6cao.github.io">l6cao.github.io</A></li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">NotiSimplify</h3>
              <p>Notification text simplification system using LLMs</p>
              <ul className="list-disc list-inside ml-2">
                <li>An entry-level student project, originating from a fun idea.</li>
                <li>Shipped in early 2024, predating Apple Intelligence's notification summaries (announced June 2024).</li>
                <li>Technologies: C#, LLM Integration</li>
                <li>GitHub: <A href="https://github.com/l6cao/NotiSimplify">Repository</A></li>
              </ul>
            </div>
          </Sec>

          {/* Skills */}
          <Sec title="Skills" delay={1.0}>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>LLM &amp; ML</strong>
                <ul className="list-[circle] list-inside ml-5">
                  <li>Training: pretraining, PEFT, RL, diffusion LLMs</li>
                  <li>Inference: vLLM, parallelism</li>
                  <li>Evaluation: benchmarking, safety, interpretability</li>
                </ul>
              </li>
              <li><strong>LLM Agents</strong>
                <ul className="list-[circle] list-inside ml-5">
                  <li>agent harness</li>
                  <li>multi-agent</li>
                  <li>agentic benchmarks</li>
                  <li>auto research</li>
                  <li>sandboxing, MCPs, RL environments</li>
                </ul>
              </li>
              <li><strong>Systems &amp; Infra</strong>
                <ul className="list-[circle] list-inside ml-5">
                  <li>Cluster: Linux, Slurm, CUDA, HPC</li>
                  <li>Storage: distributed FS (NFS, Ceph, Gluster, JuiceFS, ZFS)</li>
                  <li>Networking: RoCE/RDMA, network topology</li>
                  <li>Proxy: V2Ray, WireGuard, TCP, UDP, QUIC, Hysteria, frp, OpenWrt</li>
                  <li>Containers: Docker, Apptainer</li>
                  <li>Hardware: GPUs, NICs, Server/PC builder</li>
                </ul>
              </li>
              <li><strong>Full-Stack &amp; Cloud</strong>
                <ul className="list-[circle] list-inside ml-5">
                  <li>Frontend: Next.js, React</li>
                  <li>Backend: FastAPI, Supabase</li>
                  <li>Deploy: GCP, Oracle Cloud, Cloudflare, PM2, Nginx</li>
                </ul>
              </li>
              <li><strong>Agentic Coding</strong>
                <ul className="list-[circle] list-inside ml-5">
                  <li>Tools: Claude Code, Codex, DSH (DeepSeek Harness), OpenCode, CLI Proxy, Ralph loop, Superpowers</li>
                  <li>Agent Implementations: Ralph loop, Munder Difflin, OpenClaw, Hermes Agent</li>
                </ul>
              </li>
              <li><strong>Academic Writing</strong>
                <ul className="list-[circle] list-inside ml-5">
                  <li>Writing: LaTeX, HTML, technical writing</li>
                  <li>Figures: pandas, matplotlib, seaborn, drawio</li>
                </ul>
              </li>
            </ul>
          </Sec>

          {/* Notable Achievements */}
          <Sec title="Notable Achievements" delay={1.1}>
            <ul className="list-disc list-inside">
              <li><span className="text-[#6ba123] font-bold">50+ citations</span> across published research</li>
              <li>Published at <span className="text-[#6ba123] font-bold">COLM</span> (first author), <span className="text-[#6ba123] font-bold">ACL</span>, <span className="text-[#6ba123] font-bold">EMNLP</span>, AAAI Workshop, and ACM Web Conference (WWW) Workshop</li>
              <li>Ranked 12th in 2023 <A href="https://cemc.uwaterloo.ca/sites/default/files/documents/2023/2023CCCResults.pdf">Canadian Computing Competition</A> Senior Group</li>
              <li>University of Waterloo President's Scholarship of Distinction</li>
              <li><A href="https://cemc.uwaterloo.ca/sites/default/files/documents/2023/2023EuclidResults.pdf">Euclid Mathematics Contest</A> Honor Roll (Top 5%)</li>
              <li>High School Valedictorian</li>
            </ul>
          </Sec>

          <motion.div className="mt-10 pt-4 border-t border-gray-200"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.2 }}>
            <Link href="/" className="text-[#6ba123] hover:text-[#557f1b] transition-colors font-bold">Home</Link>
          </motion.div>

        </motion.div>
      </main>
      <Footer />
    </>
  );
}
