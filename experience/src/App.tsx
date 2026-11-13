import React, { useState } from 'react';
import { HeroScene } from './components/HeroScene';
import { NeuralStructure } from './components/NeuralStructure';
import { FooterScene } from './components/FooterScene';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { 
  ExternalLink, 
  Github, 
  Linkedin, 
  Layers, 
  Cpu, 
  Terminal, 
  Sparkles,
  ArrowUpRight,
  Code2,
  Workflow
} from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'neural' | 'projects'>('overview');

  const projects = [
    {
      title: "VIRELO",
      subtitle: "Universal Media Downloader & Transcode Workstation",
      desc: "High-fidelity stream extraction with FFmpeg transcoding pipelines across 1,700+ websites.",
      tags: ["Python 3.12", "FastAPI", "FFmpeg", "TypeScript"],
      github: "https://github.com/praveeneyyy/virelo"
    },
    {
      title: "Biometric Vision AI Platform",
      subtitle: "National Missing Persons Identification Workbench",
      desc: "Air-gapped biometric facial recognition calculating 128-dimensional embeddings for law enforcement.",
      tags: ["Python", "OpenCV", "Face Recognition", "NumPy"],
      github: "https://github.com/praveeneyyy/missing-person"
    },
    {
      title: "Clickity Click",
      subtitle: "Interactive Photobooth Web Application",
      desc: "Hardware-accelerated browser capture with real-time canvas filters and custom photo strip export.",
      tags: ["React 19", "Vite", "Framer Motion", "Canvas API"],
      github: "https://github.com/praveeneyyy/clickity-click"
    },
    {
      title: "JARVIS AI",
      subtitle: "Conversational Desktop AI Assistant",
      desc: "Desktop agent combining Google Gemini intelligence with interactive 3D particle audio visualization.",
      tags: ["Next.js 14", "Electron", "Three.js", "Gemini API"],
      github: "https://github.com/praveeneyyy/Jarvis-Ai"
    },
    {
      title: "ORION 1.0 Platform",
      subtitle: "24-Hour National Hackathon Infrastructure",
      desc: "Official digital infrastructure for Sathyabama Microsoft Club's flagship national hackathon.",
      tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"],
      link: "https://orion-sathyabama.vercel.app",
      github: "https://github.com/praveeneyyy/orion-1.0"
    },
    {
      title: "Touchless Virtual Mouse",
      subtitle: "Computer Vision Hand Landmark Interface",
      desc: "Real-time 21-point hand landmark kinematic tracking mapping finger angles to OS navigation.",
      tags: ["Python", "MediaPipe", "OpenCV", "PyAutoGUI"],
      github: "https://github.com/praveeneyyy/gesture-controlled-mouse"
    }
  ];

  return (
    <div className="min-h-screen bg-[#080B10] text-[#F5F7FA] font-sans relative selection:bg-[#67E8F9]/20 selection:text-[#67E8F9]">
      {/* Background Ambience */}
      <div className="fixed inset-0 noise-bg pointer-events-none opacity-30" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#67E8F9]/5 via-[#818CF8]/5 to-transparent blur-3xl pointer-events-none" />

      {/* Top Fixed Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#080B10]/80 border-b border-[#202938]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#67E8F9] shadow-[0_0_12px_#67E8F9]" />
            <a href="#" className="font-heading font-bold tracking-wider text-sm hover:text-[#67E8F9] transition-colors">
              PRAVEEN KUMAR <span className="font-mono text-xs text-[#64748B] font-normal">// 3D EXPERIENCE</span>
            </a>
          </div>

          <div className="flex items-center space-x-4 text-xs font-mono">
            <a 
              href="https://praveeneyyy.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1.5 rounded-md bg-[#111827] border border-[#202938] hover:border-[#67E8F9]/50 hover:text-[#67E8F9] transition-all flex items-center space-x-1.5"
            >
              <span>Portfolio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://github.com/praveeneyyy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#9CA3AF] hover:text-[#F5F7FA] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com/in/praveenkumar2212" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#9CA3AF] hover:text-[#818CF8] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-16">
        
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#111827] border border-[#202938] text-xs font-mono text-[#67E8F9] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SATHYABAMA AI &amp; ML '28 · SYSTEM ARCHITECT</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-gradient">
                S PRAVEEN KUMAR
              </h1>
              <p className="text-sm md:text-base font-mono text-[#818CF8] tracking-widest mt-1">
                AI/ML ENGINEER · FULL-STACK DEVELOPER
              </p>
            </div>
            
            <p className="text-sm text-[#9CA3AF] max-w-md font-sans leading-relaxed">
              "Building intelligent systems with thoughtful engineering and intentional design."
            </p>
          </div>

          {/* 3D Scene Viewport */}
          <HeroScene />
        </section>

        {/* Interactive 3D Neural Architecture Explorer */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#202938] pb-4">
            <div className="flex items-center space-x-3">
              <Cpu className="w-5 h-5 text-[#67E8F9]" />
              <h2 className="text-xl font-heading font-bold text-[#F5F7FA]">
                3D Neural &amp; Computational Topology
              </h2>
            </div>
            <span className="text-xs font-mono text-[#64748B]">INTERACTIVE TOPOLOGY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 3D Canvas Container */}
            <div className="lg:col-span-2 h-80 rounded-xl bg-[#0D1117] border border-[#202938] overflow-hidden relative">
              <div className="absolute top-3 left-3 z-10 text-[10px] font-mono text-[#67E8F9] bg-[#111827]/80 px-2 py-1 rounded border border-[#202938]">
                AGENTIC &amp; RAG GRAPH TOPOLOGY
              </div>
              <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} dpr={[1, 1.5]}>
                <ambientLight intensity={0.6} />
                <pointLight position={[3, 3, 3]} intensity={1.5} color="#67E8F9" />
                <pointLight position={[-3, -3, -2]} intensity={1.5} color="#818CF8" />
                <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
                  <NeuralStructure scale={1.1} />
                </Float>
                <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} />
              </Canvas>
            </div>

            {/* Architectural Highlights */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0D1117] border border-[#202938]">
                <h3 className="text-sm font-heading font-semibold text-[#67E8F9] flex items-center space-x-2">
                  <Workflow className="w-4 h-4" />
                  <span>Agentic Workflows</span>
                </h3>
                <p className="text-xs text-[#9CA3AF] mt-2 leading-relaxed">
                  Orchestrating stateful multi-agent systems via LangGraph, integrating iterative self-critique loops and reliable tool execution.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0D1117] border border-[#202938]">
                <h3 className="text-sm font-heading font-semibold text-[#818CF8] flex items-center space-x-2">
                  <Layers className="w-4 h-4" />
                  <span>Vector &amp; RAG Pipelines</span>
                </h3>
                <p className="text-xs text-[#9CA3AF] mt-2 leading-relaxed">
                  High-precision dense vector retrieval with Pinecone and FAISS, utilizing hybrid lexical-semantic chunking for verifiable provenance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0D1117] border border-[#202938]">
                <h3 className="text-sm font-heading font-semibold text-[#A78BFA] flex items-center space-x-2">
                  <Code2 className="w-4 h-4" />
                  <span>Full-Stack Backends</span>
                </h3>
                <p className="text-xs text-[#9CA3AF] mt-2 leading-relaxed">
                  Asynchronous REST microservices with FastAPI, Next.js, and Docker for scalable, zero-latency inference delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Projects Showcase */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#202938] pb-4">
            <div className="flex items-center space-x-3">
              <Terminal className="w-5 h-5 text-[#818CF8]" />
              <h2 className="text-xl font-heading font-bold text-[#F5F7FA]">
                Featured Production Systems
              </h2>
            </div>
            <span className="text-xs font-mono text-[#64748B]">VERIFIED CODEBASES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-[#0D1117] border border-[#202938] hover:border-[#67E8F9]/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#64748B]">SYSTEM // 0{idx + 1}</span>
                    <div className="flex items-center space-x-2">
                      {p.link && (
                        <a 
                          href={p.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#67E8F9] hover:underline text-xs font-mono flex items-center space-x-1"
                        >
                          <span>Live</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a 
                        href={p.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#9CA3AF] hover:text-[#F5F7FA] transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-[#F5F7FA] mt-2 group-hover:text-[#67E8F9] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs font-mono text-[#818CF8] mt-0.5">
                    {p.subtitle}
                  </p>
                  <p className="text-xs text-[#9CA3AF] mt-3 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#202938]">
                  {p.tags.map((t, tidx) => (
                    <span 
                      key={tidx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111827] text-[#9CA3AF] border border-[#202938]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer with 3D Artifact */}
        <footer className="space-y-6 pt-10 border-t border-[#202938]">
          <FooterScene />
          
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-[#64748B] font-mono gap-4">
            <div>
              PRAVEEN KUMAR · CHENNAI, INDIA · 2026
            </div>
            <div>
              ENGINEERING INTELLIGENT SYSTEMS · THOUGHTFUL DESIGN
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};
