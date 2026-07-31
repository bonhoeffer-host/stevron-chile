'use client';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="px-[clamp(18px,6vw,100px)] pt-[45px] pb-[20px] bg-[#050605] border-t border-white/[0.1]">
      {/* Main row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-[20px] sm:gap-[35px] pb-[30px]">
        <img src="/logo-white.png" alt="Stevron" className="w-[140px] sm:w-[160px] md:w-[180px]" />
        <p className="text-[#c3c82e] font-['Oswald'] uppercase sm:flex-1">Power. Simplified.</p>
        <nav className="flex flex-col gap-x-[16px] text-[10px] uppercase">
          <a onClick={() => scrollToSection('productos')} className="cursor-pointer hover:text-[#c3c82e] transition-colors whitespace-nowrap">Productos</a>
          <a onClick={() => scrollToSection('sistema-1ne')} className="cursor-pointer hover:text-[#c3c82e] transition-colors whitespace-nowrap">Sistema 1ne</a>
          <a onClick={() => scrollToSection('soporte')} className="cursor-pointer hover:text-[#c3c82e] transition-colors whitespace-nowrap">Soporte</a>
          <a onClick={() => scrollToSection('distribuidores')} className="cursor-pointer hover:text-[#c3c82e] transition-colors whitespace-nowrap">Distribuidores</a>
        </nav>
      </div>
      {/* Bottom bar */}
      <div className="pt-[18px] text-[#747871] border-t border-white/[0.08] text-[9px]">
        © 2026 Stevron Tools Chile · contacto@stevron.cl
      </div>
    </footer>
  );
}
