import React, { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import AgendaSection from './components/AgendaSection';
import SafetySection from './components/SafetySection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
export function App() {
  const [loading, setLoading] = useState(true);
  const [showMap, setShowMap] = useState(false);
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return <div className="relative min-h-screen w-full">
      {/* Background image with blur effect */}
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0" style={{
      backgroundImage: `url('https://uploadthingy.s3.us-west-1.amazonaws.com/rhrApTp69FKDGLHuwkfejw/BG.jpg')`,
      filter: 'blur(3px)',
      opacity: 0.6
    }} />
      {loading ? <Preloader /> : <div className="relative z-10 w-full">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <AgendaSection />
            <SafetySection onViewMap={() => setShowMap(true)} />
            {showMap && <MapSection onClose={() => setShowMap(false)} />}
          </main>
          <Footer />
        </div>}
    </div>;
}