import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Build", id: "build" },
    { name: "Stack", id: "stack" },
    { name: "Ping", id: "ping" }
  ];

  // Detect scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id) => {
    setIsOpen(false);
    
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Add slight delay for better UX
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100; // Adjusted offset
        const elementPosition = element.offsetTop - offset;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] z-50 backdrop-blur-xl ${
      scrolled ? 'bg-black/80 border-white/30' : 'bg-black/60 border-white/20'
    } shadow-2xl rounded-2xl md:rounded-3xl border transition-all duration-300`}>
      
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div 
          className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight cursor-pointer hover:text-cyan-300 transition-colors"
          onClick={() => handleScroll('home')}
        >
          ZYNAPTIC
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <li 
              key={item.id}
              className="relative group"
              onClick={() => handleScroll(item.id)}
            >
              <button className="text-white font-bold text-lg lg:text-xl hover:text-cyan-300 transition-colors duration-300 px-2 py-1"
                style={{ fontFamily: "'Playpen Sans', cursive" }}>
                {item.name}
              </button>
              {/* Active indicator */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-black/40 border border-white/20 text-white hover:bg-black/60 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 animate-fadeIn">
          <div className="backdrop-blur-xl bg-black/80 border border-white/20 rounded-xl shadow-2xl">
            <ul className="flex flex-col space-y-1 p-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className="w-full text-left text-white font-bold text-lg hover:text-cyan-300 transition-colors duration-300 py-3 px-4 hover:bg-white/5 rounded-lg flex items-center gap-3 group"
                    style={{ fontFamily: "'Playpen Sans', cursive" }}
                    onClick={() => handleScroll(item.id)}
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
