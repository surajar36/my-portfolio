import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ResumeCTA from './components/ResumeCTA';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Skillss from './components/skills_logo';

function App() {
  return (
    <>
      <Cursor />
      <Header />
      <main className="container mx-auto px-6">
        <Hero />
        <Skillss />
        <About />
        <Skills />
        <Projects />
        <ResumeCTA />
      </main>
      <Footer />
    </>
  )
}

export default App