import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 text-blue-400 hover:text-blue-300 text-3xl transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Volver arriba"
    >
      <i className="fas fa-arrow-up animate-bounce drop-shadow-sm"></i>
    </button>
  );
}
