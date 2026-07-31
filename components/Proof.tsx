export default function Proof() {
  return (
    <section className="px-[clamp(24px,6vw,100px)] py-[clamp(30px,5vw,50px)] grid grid-cols-3 max-md:grid-cols-1 text-center bg-[#0a0c0a] gap-[2px]" style={{
      backgroundImage: 'repeating-linear-gradient(115deg, transparent 0 30px, rgba(164, 168, 43, 0.04) 31px 32px)'
    }}>
      <article className="py-[clamp(20px,4vw,40px)] px-4">
        <strong className="block text-[#c3c82e] font-['Oswald'] text-[clamp(42px,8vw,90px)] leading-[1]">+21</strong>
        <span className="font-['Oswald'] text-[clamp(12px,2vw,20px)] uppercase tracking-widest">Países</span>
      </article>
      <article className="py-[clamp(20px,4vw,40px)] px-4 border-t md:border-t-0 md:border-l md:border-r border-white/10">
        <strong className="block text-[#c3c82e] font-['Oswald'] text-[clamp(42px,8vw,90px)] leading-[1]">+5.000</strong>
        <span className="font-['Oswald'] text-[clamp(12px,2vw,20px)] uppercase tracking-widest">Distribuidores</span>
      </article>
      <article className="py-[clamp(20px,4vw,40px)] px-4 border-t md:border-t-0 border-white/10">
        <strong className="block text-[#c3c82e] font-['Oswald'] text-[clamp(42px,8vw,90px)] leading-[1]">5,27 M</strong>
        <span className="font-['Oswald'] text-[clamp(12px,2vw,20px)] uppercase tracking-widest">Clientes</span>
      </article>
    </section>
  );
}
