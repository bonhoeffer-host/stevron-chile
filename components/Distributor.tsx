export default function Distributor() {
  const mailtoLink =
    'mailto:contacto@stevron.cl?subject=Quiero%20distribuir%20Stevron%20en%20Chile';

  return (
    <section className="flex flex-col md:grid md:grid-cols-[1.15fr_0.85fr] bg-[#080a08] min-h-[420px] md:min-h-[520px]" id="distribuidores">
      <img
        src="/lifestyle/hammers.jpg"
        alt="Herramientas Stevron"
        className="w-full h-[260px] md:h-full object-cover brightness-60"
      />
      <div className="px-[clamp(24px,6vw,100px)] py-[55px] md:py-[70px] flex flex-col justify-center text-center md:text-left">
        <p className="m-0 mb-5 text-[11px] font-black tracking-[0.17em] uppercase text-[#c3c82e]">Distribuidores</p>
        <h2 className="m-[10px_0] font-['Bebas_Neue'] text-[clamp(52px,8vw,85px)] leading-[0.9] uppercase">Crece con Stevron.</h2>
        <p className="text-[#c5c8c2] leading-[1.7]">
          Una gama de alta rotación, presentación profesional y respaldo
          comercial. Formamos parte de un grupo con presencia en más de 21
          países, respaldado por 5.000+ distribuidores y la confianza de 5,27
          millones de clientes.
        </p>
        <a
          className="mt-[20px] mx-auto md:mx-0 w-fit min-h-[52px] px-6 inline-flex items-center justify-center border border-transparent uppercase text-[11px] font-black tracking-[0.035em] transition-transform hover:translate-y-[-3px] text-[#070907] bg-gradient-to-br from-[#c5ca2e] to-[#969b27]"
          href={mailtoLink}
        >
          Quiero ser distribuidor →
        </a>
      </div>
    </section>
  );
}
