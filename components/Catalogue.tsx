'use client';

import { useState, useEffect } from 'react';
import { STEVRON_PRODUCTS, type Product } from '@/lib/products';
import ProductModal from './ProductModal';

export default function Catalogue() {
  const [activeGroup, setActiveGroup] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [visibleCount, setVisibleCount] = useState(24);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(STEVRON_PRODUCTS.map((p) => p.category))].sort() as string[];
    setCategories(uniqueCategories);
  }, []);

  useEffect(() => {
    const q = searchTerm.toLowerCase();
    const results = STEVRON_PRODUCTS.filter((p) => {
      const groupMatch = activeGroup === 'Todos' || p.group === activeGroup;
      const categoryMatch = selectedCategory === 'Todas' || p.category === selectedCategory;
      const searchMatch =
        !q ||
        `${p.code} ${p.title} ${p.category} ${p.description}`
          .toLowerCase()
          .includes(q);

      return groupMatch && categoryMatch && searchMatch;
    });

    setFiltered(results);
    setVisibleCount(24);
  }, [activeGroup, searchTerm, selectedCategory]);

  useEffect(() => {
    const handleSetGroup = (e: Event) => {
      const customEvent = e as CustomEvent;
      setActiveGroup(customEvent.detail);
    };

    window.addEventListener('setProductGroup', handleSetGroup);
    return () => window.removeEventListener('setProductGroup', handleSetGroup);
  }, []);

  const handleGroupClick = (group: string) => {
    setActiveGroup(group);
  };

  const visibleProducts = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <>
      <section className="px-[clamp(22px,5vw,82px)] py-[85px] text-[#111] bg-[#f2f2ed]" id="productos">
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-[70px] items-end mb-[48px]">
          <div>
            <p className="m-0 mb-5 text-[11px] font-black tracking-[0.17em] uppercase text-[#a4a82b]">Catálogo Chile</p>
            <h2 className="m-0 font-['Bebas_Neue'] text-[72px] leading-[0.9] uppercase">
              Todo el rango.<br />
              Una sola experiencia.
            </h2>
          </div>
          <p className="text-[#656963] leading-[1.65]">
            Busca por código, familia o tipo de producto. Los artículos
            mostrados están disponibles para consulta comercial en Chile.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_auto_230px] gap-[12px] p-[14px] bg-white border border-[#d6d7d2] my-12" id="catalogo">
          <label className="flex items-center gap-[10px] px-[15px] border border-[#d2d3ce]">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Buscar producto o código..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-[13px] py-[13px] border-0 outline-0 bg-transparent"
            />
          </label>
          <div className="flex gap-[4px]">
            <button
              className={`px-[15px] py-[12px] border border-[#ccc] text-[10px] font-black uppercase cursor-pointer transition-colors ${
                activeGroup === 'Todos'
                  ? 'text-[#070907] bg-[#c3c82e] border-[#c3c82e]'
                  : 'bg-[#f5f5f1]'
              }`}
              onClick={() => handleGroupClick('Todos')}
            >
              Todos
            </button>
            <button
              className={`px-[15px] py-[12px] border border-[#ccc] text-[10px] font-black uppercase cursor-pointer transition-colors ${
                activeGroup === 'Herramientas manuales'
                  ? 'text-[#070907] bg-[#c3c82e] border-[#c3c82e]'
                  : 'bg-[#f5f5f1]'
              }`}
              onClick={() => handleGroupClick('Herramientas manuales')}
            >
              Herramientas manuales
            </button>
            <button
              className={`px-[15px] py-[12px] border border-[#ccc] text-[10px] font-black uppercase cursor-pointer transition-colors ${
                activeGroup === 'Accesorios'
                  ? 'text-[#070907] bg-[#c3c82e] border-[#c3c82e]'
                  : 'bg-[#f5f5f1]'
              }`}
              onClick={() => handleGroupClick('Accesorios')}
            >
              Accesorios
            </button>
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-[15px] py-[12px] border border-[#ccc] bg-[#f5f5f1] text-[10px] font-black uppercase cursor-pointer"
          >
            <option value="Todas">Todas las categorías</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="my-[18px] text-[#676b65] text-[12px]">
          <strong className="mr-[5px] text-[#111] text-[15px]">{filtered.length}</strong>
          <span>productos encontrados</span>
        </div>

        <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-[14px]">
          {visibleProducts.map((product) => (
            <article
              key={product.code}
              className="p-[14px_14px_20px] bg-white border border-[#d3d4ce] transition-all duration-300 cursor-pointer hover:translate-y-[-7px] hover:border-[#a4a82b] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="h-[240px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fbfbf8] to-[#ecece7]">
                <img
                  loading="lazy"
                  src={product.image}
                  alt={`${product.title} ${product.code}`}
                  className="w-[90%] h-[90%] object-contain transition-transform duration-400 hover:scale-[1.07]"
                />
              </div>
              <div className="mt-[15px] flex justify-between gap-[7px] text-[#777b75] text-[9px] uppercase">
                <span>{product.group}</span>
                <span>{product.availability}</span>
              </div>
              <h3 className="m-[8px_0_5px] font-['Oswald'] text-[18px] uppercase">{product.title}</h3>
              <h4 className="m-0 text-[#a4a82b] text-[12px]">{product.code}</h4>
              <p className="text-[#676b65] text-[11px] leading-[1.55]">{product.description}</p>
              <button className="mt-[8px] p-0 border-0 text-[#111] bg-none text-[10px] font-black uppercase cursor-pointer hover:text-[#a4a82b] transition-colors">
                Ver producto →
              </button>
            </article>
          ))}
        </div>

        {hasMore && (
          <button
            className="block mx-auto mt-[35px] px-[30px] py-[15px] border border-[#111] bg-transparent text-[11px] font-black uppercase cursor-pointer hover:bg-[#111] hover:text-white transition-all"
            onClick={() => setVisibleCount((prev) => prev + 24)}
          >
            Mostrar más productos
          </button>
        )}
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
