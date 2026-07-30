'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed z-[1000] top-0 left-0 w-full transition-all duration-300 ${scrolled || menuOpen ? 'bg-black/[0.97] backdrop-blur-[16px] border-b border-white/[0.08]' : ''
      }`}>
      <div className="h-[72px] md:h-[98px] px-[clamp(18px,5vw,82px)] flex items-center gap-4">
        {/* Logo */}
        <a className="flex-shrink-0" href="#inicio">
          <img src="/logo-white.png" alt="Stevron" className="w-[160px] sm:w-[220px] md:w-[280px] lg:w-[270px]" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-center gap-[clamp(16px,2vw,38px)] flex-1">
          <a onClick={() => scrollToSection('productos')} className="text-[15px] font-black uppercase tracking-[0.05em] cursor-pointer transition-colors hover:text-[#c3c82e]">Productos</a>
          <a onClick={() => scrollToSection('sistema-1ne')} className="text-[15px] font-black uppercase tracking-[0.05em] cursor-pointer transition-colors hover:text-[#c3c82e]">Sistema 1ne</a>
          <a onClick={() => scrollToSection('distribuidores')} className="text-[15px] font-black uppercase tracking-[0.05em] cursor-pointer transition-colors hover:text-[#c3c82e]">Distribuidores</a>
          <a onClick={() => scrollToSection('soporte')} className="text-[15px] font-black uppercase tracking-[0.05em] cursor-pointer transition-colors hover:text-[#c3c82e]">Soporte</a>
          <a onClick={() => scrollToSection('nosotros')} className="text-[15px] font-black uppercase tracking-[0.05em] cursor-pointer transition-colors hover:text-[#c3c82e]">Nosotros</a>
          <a onClick={() => scrollToSection('contacto')} className="text-[15px] font-black uppercase tracking-[0.05em] cursor-pointer transition-colors hover:text-[#c3c82e]">Contacto</a>
        </nav>

        {/* Right side: ES + hamburger */}
        <div className="flex items-center gap-4 ml-auto">
          <span className="text-[11px] font-black">ES⌄</span>
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] border-0 bg-transparent cursor-pointer p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span className={`w-[22px] h-[2px] bg-white block transition-all duration-300 origin-center ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
            <span className={`w-[22px] h-[2px] bg-white block transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
            <span className={`w-[22px] h-[2px] bg-white block transition-all duration-300 origin-center ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <nav className="flex flex-col px-[clamp(18px,5vw,82px)] pb-6 border-t border-white/10">
          {[
            { id: 'productos', label: 'Productos' },
            { id: 'sistema-1ne', label: 'Sistema 1ne' },
            { id: 'distribuidores', label: 'Distribuidores' },
            { id: 'soporte', label: 'Soporte' },
            { id: 'nosotros', label: 'Nosotros' },
            { id: 'contacto', label: 'Contacto' },
          ].map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="py-[13px] text-[13px] font-black uppercase tracking-[0.1em] cursor-pointer border-b border-white/[0.07] last:border-0 hover:text-[#c3c82e] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
