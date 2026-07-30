'use client';

import { useEffect } from 'react';
import { type Product } from '@/lib/products';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const mailto = `mailto:contacto@stevron.cl?subject=Consulta%20producto%20${encodeURIComponent(
    product.code
  )}&body=Hola,%20quisiera%20recibir%20más%20información%20sobre%20el%20producto%20${encodeURIComponent(
    product.code
  )}.`;

  return (
    <div
      className="fixed z-[2000] inset-0 p-[16px] sm:p-[30px] flex items-center justify-center bg-black/85 backdrop-blur-[10px]"
      onClick={handleBackdropClick}
    >
      <button
        className="absolute right-[16px] sm:right-[30px] top-[12px] sm:top-[22px] border-0 text-white bg-transparent text-[42px] leading-none cursor-pointer z-10"
        onClick={onClose}
      >
        ×
      </button>
      <div className="w-[min(1100px,96vw)] max-h-[90vh] flex flex-col md:grid md:grid-cols-2 overflow-auto text-[#111] bg-[#f4f4ef]">
        {/* Image */}
        <div className="min-h-[240px] sm:min-h-[320px] md:min-h-[580px] flex items-center justify-center bg-white flex-shrink-0">
          <img
            src={product.image}
            alt={`${product.title} ${product.code}`}
            className="w-[75%] h-[75%] object-contain"
          />
        </div>
        {/* Content */}
        <div className="p-[28px] sm:p-[40px] md:p-[60px]">
          <span className="inline-flex px-[10px] py-[7px] text-[#080a08] bg-[#c3c82e] text-[9px] font-black uppercase">
            {product.availability}
          </span>
          <p className="mt-[20px] text-[#777] text-[11px] uppercase">
            {product.group} · {product.category}
          </p>
          <h2 className="m-[10px_0_0] font-['Oswald'] text-[clamp(26px,5vw,38px)] uppercase">{product.title}</h2>
          <h3 className="m-[8px_0_20px] text-[#a4a82b] text-[clamp(16px,3vw,22px)]">{product.code}</h3>
          <p className="text-[#626660] leading-[1.7]">{product.description}</p>
          <div className="flex gap-[10px] flex-wrap mt-[28px] md:mt-[35px]">
            <a
              className="min-h-[48px] md:min-h-[52px] px-5 md:px-6 inline-flex items-center justify-center border border-transparent uppercase text-[11px] font-black tracking-[0.035em] transition-transform hover:translate-y-[-3px] text-[#070907] bg-gradient-to-br from-[#c5ca2e] to-[#969b27]"
              href={mailto}
            >
              Solicitar información →
            </a>
            <button
              className="min-h-[48px] md:min-h-[52px] px-5 md:px-6 inline-flex items-center justify-center border border-transparent uppercase text-[11px] font-black tracking-[0.035em] transition-transform hover:translate-y-[-3px] text-white bg-[#121512]"
              onClick={onClose}
            >
              Volver al catálogo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
