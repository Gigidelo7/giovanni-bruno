import React from 'react';
import Navbar from './components/Navbar';
import TerminalHero from './components/TerminalHero';
import Services from './components/Services';
import Locations from './components/Locations';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-tech-blue selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <TerminalHero />
        <Services />
        <Locations />
        <Reviews />
        <Contact />
      </main>
      <AIChat />
    </div>
  );
}

export default App;