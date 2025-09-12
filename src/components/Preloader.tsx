import React, { useEffect, useState } from 'react';
const Preloader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    // Show welcome text after a short delay
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 500);
    // Handle progress bar animation
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 100);
    return () => {
      clearInterval(interval);
      clearTimeout(textTimer);
    };
  }, []);
  return <div className="fixed inset-0 bg-white/90 backdrop-blur-md flex flex-col justify-center items-center z-50">
      <div className="mb-8 animate-bounce">
        <img src="/Sobadanavi.png" alt="Sobadhanavi Logo" className="w-64 h-auto drop-shadow-xl" />
      </div>
      <div className={`transition-all duration-1000 ease-in-out transform ${showText ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-blue-900 text-4xl font-bold mb-6 text-center animate-pulse">
          Welcome to the Ceremony
        </h1>
        <h2 className="text-blue-800 text-2xl mb-10 text-center">
          Sobadhanavi 350 MW LNG Power Plant
        </h2>
      </div>
      <div className="w-80 h-4 bg-gray-200 rounded-full mb-4 overflow-hidden p-1">
        <div className="h-full rounded-full transition-all duration-300 shadow-inner relative" style={{
        width: `${loadingProgress}%`,
        background: 'linear-gradient(to right, #2C3E8C, #5C6FC6, #FFD700)',
        backgroundSize: '200% 100%',
        animation: 'gradientMove 2s linear infinite'
      }}>
          <style jsx>{`
            @keyframes gradientMove {
              0% {
                background-position: 0% 0%;
              }
              100% {
                background-position: 200% 0%;
              }
            }
          `}</style>
        </div>
      </div>
      <div className="flex items-center">
        <div className="animate-spin mr-3 h-5 w-5 border-2 border-blue-700 border-t-transparent rounded-full"></div>
        <p className="text-blue-800 font-medium animate-pulse">
          Loading your safety information... {loadingProgress}%
        </p>
      </div>
    </div>;
};
export default Preloader;