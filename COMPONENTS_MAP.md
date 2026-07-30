# Guía de componentes Next.js - Stevron Chile

## 📊 Mapa de componentes

```
<Home> (page.tsx)
├── <Header />           → Navegación principal
├── <Hero />             → Sección principal con CTA
├── <Statement />        → Sección "La potencia no necesita..."
├── <LaunchFocus />      → Tarjetas de categorías
├── <Catalogue />        → Catálogo completo con filtros
│   └── <ProductModal /> → Modal (renderizado dinámicamente)
├── <OneSection />       → Sistema 1ne
├── <Proof />            → Estadísticas
├── <Support />          → Soporte
├── <Distributor />      → Distribuidores
├── <Contact />          → Formulario
├── <Footer />           → Pie de página
└── <RevealObserver />   → Observador de intersección
```

## 🔄 Flujo de datos

### Catálogo
```
products.ts (datos)
    ↓
Catalogue.tsx (estado, filtrado)
    ├→ ProductCard (presentación)
    ↓
ProductModal.tsx (detalles)
```

### Navegación
```
Header.tsx (scroll listener)
    ↓
onClick → scrollToSection()
    ↓
Smooth scroll a #id
```

### Efectos visuales
```
RevealObserver.tsx (useEffect)
    ↓
IntersectionObserver
    ↓
Add .visible class → CSS animation
```

## 📄 Componentes explicados

### Header.tsx
- Estado: `scrolled`, `menuOpen`
- Listeners: scroll, click en nav
- Funciones: `scrollToSection()`

### Hero.tsx
- Botones con onClick
- Scroll suave a secciones
- Imagen optimizada

### Catalogue.tsx ⭐ (IMPORTANTE)
- Estado complejo:
  - `activeGroup` - Filtro por grupo
  - `searchTerm` - Búsqueda
  - `selectedCategory` - Filtro por categoría
  - `visibleCount` - Paginación
  - `selectedProduct` - Para abrir modal
- Efectos: Escucha custom event `setProductGroup`
- Render condicional de ProductModal

### ProductModal.tsx
- useEffect para body overflow
- useEffect para ESC key
- onClick para backdrop
- Mailto link con encodeURIComponent

### Contact.tsx
- FormEvent handler
- Validación HTML
- Alert en submit

### RevealObserver.tsx
- IntersectionObserver API
- Observa elementos con clase `.reveal`
- Añade clase `.visible`
- Cleanup en unmount

## 🎨 CSS

Toda la estilos están en `app/styles.css`:

- Variables CSS: `--black`, `--olive2`, etc.
- Media queries: responsive a 1100px, 800px, 520px
- Clases de utilidad: `.btn`, `.primary`, `.ghost`, etc.

## 🔄 Estado compartido

Comunicación entre componentes sin Context API:

1. **LaunchFocus → Catalogue**
   ```typescript
   // LaunchFocus
   window.dispatchEvent(new CustomEvent('setProductGroup', { detail: group }))
   
   // Catalogue
   window.addEventListener('setProductGroup', (e) => setActiveGroup(e.detail))
   ```

## 🔗 Routing

- `/` - Página principal (única)
- Sin sub-páginas (todo es una sola página con scroll)

## 📱 Responsive

```css
@media (max-width: 1100px) { /* Tablet grande */ }
@media (max-width: 800px)   { /* Tablet */        }
@media (max-width: 520px)   { /* Móvil */         }
```

## 🚀 Performance

✅ Lazy loading de imágenes (en ProductCard)
✅ IntersectionObserver para animations
✅ CSS-based animations (sin JS heavy)
✅ Componentes memoizados automáticamente

## 📝 Ejemplo: Añadir un nuevo producto

1. Edita `lib/products.ts`:
```typescript
export const STEVRON_PRODUCTS: Product[] = [
  // ... existentes
  {
    code: "NEW001",
    title: "Nuevo Producto",
    category: "Nueva Categoría",
    group: "Herramientas manuales",
    image: "/products/hand-tool-NEW001.png",
    description: "Descripción aquí",
    availability: "Disponible en Chile"
  }
];
```

2. Coloca la imagen en `public/products/hand-tool-NEW001.png`

3. ¡Listo! Se verá automáticamente en el catálogo

## 🐛 Debugging

- Usa React DevTools en browser
- Abre la consola del navegador (F12)
- Verifica los logs en terminal (npm run dev)

## 💾 Build

```bash
npm run build    # Genera .next optimizado
npm start        # Ejecuta en producción
npm run lint     # Valida TypeScript
```

## 🔐 TypeScript

Todos los archivos usan `.tsx` (React + TypeScript):
- Interfaces en `lib/products.ts`
- Props tipadas en componentes
- Type safety completo

---

¡Listo para personalizar! 🎉
