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
    <header className={`fixed z-[1000] top-0 left-0 w-full h-[82px] px-[clamp(22px,5vw,82px)] flex items-center transition-all duration-300 ${
      scrolled ? 'bg-black/[0.94] backdrop-blur-[16px] border-b border-white/[0.08]' : ''
    }`}>
      <a className="logo flex-shrink-0" href="#inicio">
        <img src="/logo-white.png" alt="Stevron" className="w-[330px]" />
      </a>
      <nav className={`hidden md:flex justify-center gap-[clamp(16px,2vw,38px)] flex-1 ${menuOpen ? '!flex' : ''}`}>
        <a onClick={() => scrollToSection('productos')} className="text-[11px] font-black uppercase tracking-[0.05em] cursor-pointer transition-colors hover:text-[#c3c82e]">Productos</a>
        <a onClick={() => scrollToSection('sistema-1ne')} className="text-[11px] font-black uppercase tracking-[0.05em] cursor-pointer transition-colors hover:text-[#c3c82e]">Sistema 1ne</a>
        <a onClick={() => scrollToSection('distribuidores')} className="text-[11px] font-black uppercase tracking-[0.05em] cursor-pointer transition-colors hover:text-[#c3c82e]">Distribuidores</a>
        <a onClick={() => scrollToSection('soporte')} className="text-[11px] font-black uppercase tracking-[0.05em] cursor-pointer transition-colors hover:text-[#c3c82e]">Soporte</a>
        <a onClick={() => scrollToSection('nosotros')} className="text-[11px] font-black uppercase tracking-[0.05em] cursor-pointer transition-colors hover:text-[#c3c82e]">Nosotros</a>
        <a onClick={() => scrollToSection('contacto')} className="text-[11px] font-black uppercase tracking-[0.05em] cursor-pointer transition-colors hover:text-[#c3c82e]">Contacto</a>
      </nav>
      <button
        className="md:hidden w-6 h-6 flex flex-col justify-center gap-[6px] border-0 bg-none cursor-pointer ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <span className="w-[26px] h-[2px] bg-white block"></span>
        <span className="w-[26px] h-[2px] bg-white block"></span>
      </button>
      <span className="hidden sm:block text-[11px] font-black ml-auto">ES⌄</span>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="fixed top-[72px] left-0 right-0 bg-black/[0.98] p-[30px] flex flex-col gap-4 z-50">
          <a onClick={() => scrollToSection('productos')} className="text-[11px] font-black uppercase tracking-[0.05em] cursor-pointer">Productos</a>
          <a onClick={() => scrollToSection('sistema-1ne')} className="text-[11px] font-black uppercase tracking-[0.05em] cursor-pointer">Sistema 1ne</a>
          <a onClick={() => scrollToSection('distribuidores')} className="text-[11px] font-black uppercase tracking-[0.05em] cursor-pointer">Distribuidores</a>
          <a onClick={() => scrollToSection('soporte')} className="text-[11px] font-black uppercase tracking-[0.05em] cursor-pointer">Soporte</a>
          <a onClick={() => scrollToSection('nosotros')} className="text-[11px] font-black uppercase tracking-[0.05em] cursor-pointer">Nosotros</a>
          <a onClick={() => scrollToSection('contacto')} className="text-[11px] font-black uppercase tracking-[0.05em] cursor-pointer">Contacto</a>
        </nav>
      )}
    </header>
  );
}
