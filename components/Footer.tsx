'use client';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="px-[clamp(24px,6vw,100px)] py-[55px] pb-[25px] grid grid-cols-[200px_1fr_1.5fr] gap-[35px] items-center bg-[#050605] border-t border-white/[0.1]">
      <img src="/logo-white.png" alt="Stevron" className="w-[180px]" />
      <p className="text-[#c3c82e] font-['Oswald'] uppercase">Power. Simplified.</p>
      <nav className="flex justify-end gap-[22px] text-[10px] uppercase">
        <a onClick={() => scrollToSection('productos')} className="cursor-pointer hover:text-[#c3c82e] transition-colors">Productos</a>
        <a onClick={() => scrollToSection('sistema-1ne')} className="cursor-pointer hover:text-[#c3c82e] transition-colors">Sistema 1ne</a>
        <a onClick={() => scrollToSection('soporte')} className="cursor-pointer hover:text-[#c3c82e] transition-colors">Soporte</a>
        <a onClick={() => scrollToSection('distribuidores')} className="cursor-pointer hover:text-[#c3c82e] transition-colors">Distribuidores</a>
      </nav>
      <div className="col-span-3 pt-[20px] text-[#747871] border-t border-white/[0.08] text-[9px]">
        © 2026 Stevron Tools Chile · contacto@stevron.cl
      </div>
    </footer>
  );
}
