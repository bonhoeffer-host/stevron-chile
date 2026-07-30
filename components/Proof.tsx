export default function Proof() {
  return (
    <section className="px-[clamp(24px,6vw,100px)] py-[45px] grid grid-cols-3 max-md:grid-cols-1 text-center bg-[#0a0c0a]" style={{
      backgroundImage: 'repeating-linear-gradient(115deg, transparent 0 30px, rgba(164, 168, 43, 0.04) 31px 32px)'
    }}>
      <article>
        <strong className="block text-[#c3c82e] font-['Oswald'] text-[90px] leading-[1]">+21</strong>
        <span className="font-['Oswald'] text-[20px] uppercase">Países</span>
      </article>
      <article>
        <strong className="block text-[#c3c82e] font-['Oswald'] text-[90px] leading-[1]">+5.000</strong>
        <span className="font-['Oswald'] text-[20px] uppercase">Distribuidores</span>
      </article>
      <article>
        <strong className="block text-[#c3c82e] font-['Oswald'] text-[90px] leading-[1]">5,27 M</strong>
        <span className="font-['Oswald'] text-[20px] uppercase">Clientes</span>
      </article>
    </section>
  );
}
