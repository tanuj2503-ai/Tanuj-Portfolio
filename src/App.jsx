import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResumeVault from './components/ResumeVault';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import BuildIntelligence from './components/BuildIntelligence';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import SignalWall from './components/SignalWall';
import ScrollProgress from './components/ScrollProgress';
import FloatingDock from './components/FloatingDock';
import CommandPalette from './components/CommandPalette';
import CustomCursor from './components/CustomCursor';
import QuantumField from './components/QuantumField';
import RealityEngine from './components/RealityEngine';
import MissionConsole from './components/MissionConsole';
import TabOrchestrator from './components/TabOrchestrator';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-canvas text-text-main">
      <TabOrchestrator />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="grid-overlay" />
      </div>
      <QuantumField />
      <CustomCursor />
      <RealityEngine />
      <MissionConsole />
      <ScrollProgress />
      <Navbar />
      <FloatingDock />
      <CommandPalette />
      <main className="relative pb-28">
        <Hero />
        <ResumeVault />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Certifications />
        <SignalWall />
        <Contact />
        <BuildIntelligence />
      </main>
    </div>
  );
}

export default App;
