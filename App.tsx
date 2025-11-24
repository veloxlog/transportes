import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import TrackingAndQuote from './components/InteractiveDemo';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white selection:bg-brand-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <TrackingAndQuote />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;