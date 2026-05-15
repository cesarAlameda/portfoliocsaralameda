## Context

El portfolio actual es una aplicación Angular 19 standalone con componentes simples (aboutme, skills, projects, contact, nav, footer). Usa una paleta oscura genérica (#1a2b3c, #2C3E50, #1abc9c) con estética de template. La navegación es sticky con scroll a secciones. Los proyectos se muestran en un carrusel básico. No hay sección de experiencia laboral ni de IA/automatización. Los skills son solo 4 logos en grid.

El rediseño debe transformar completamente la experiencia visual manteniendo la misma tecnología base (Angular 19 standalone, sin router pesado - todo en una página con scroll), pero con una arquitectura de componentes más modular y un sistema de diseño premium.

**Stack actual:** Angular 19, TypeScript, CSS puro, animaciones nativas de Angular, EmailJS para contacto.

**Stack objetivo:** Angular 19, TypeScript, CSS moderno con custom properties, animaciones con Angular Animations, EmailJS (se mantiene).

## Goals / Non-Goals

**Goals:**
- Migrar a un sistema de diseño premium con paleta oscura tipo Vercel/Linear (negros, grises, blancos, acento sutil)
- Reestructurar la aplicación en componentes más granulares y semánticos
- Implementar hero section profesional con declaración de especialización clara
- Rediseñar about section con narrativa profesional real (1 año experiencia, APIs, integraciones, IA)
- Reemplazar skills grid con tech stack minimalista y enfocado (backend, APIs, databases, AI tooling)
- Rediseñar projects section con tarjetas tipo producto (stack, arquitectura, APIs, resultados)
- Agregar experience section detallada (problema, solución, stack, impacto)
- Agregar AI & Automation section para proyectos de IA aplicada
- Modernizar contacto y footer manteniendo EmailJS funcional
- Mejorar navegación sticky con indicadores de sección activa
- Implementar animaciones sutiles (fade-in, slide-up en scroll)
- Mejorar SEO con meta tags, Open Graph, JSON-LD
- Garantizar responsive design hasta 320px
- Mantener rendimiento alto (Lighthouse >90)

**Non-Goals:**
- No se migra a SSR (Angular Universal/SSR se mantiene igual)
- No se cambia el sistema de EmailJS (solo se moderniza UI)
- No se añaden dependencias externas nuevas (no Tailwind, no Framer Motion, no shadcn — se usa CSS puro con custom properties)
- No se añade sistema de rutas complejo (sigue siendo single-page con scroll)
- No se implementa modo claro (solo modo oscuro premium)
- No se traduce a múltiples idiomas (solo español)

## Decisions

### Decision 1: CSS puro con custom properties en lugar de Tailwind
- **Opción elegida:** CSS puro con sistema de custom properties
- **Razón:** El proyecto ya usa CSS puro, no hay dependencia de Tailwind, y el control fino de diseño premium se logra mejor con CSS nativo. Las custom properties permiten un design system coherente sin overhead de build.
- **Alternativa considerada:** Tailwind — descartado porque añade complejidad de configuración y el tamaño del bundle CSS sería mayor para un portfolio. Framer Motion — descartado porque Angular Animations ya cubre lo necesario.

### Decision 2: Componentes standalone con estrategia OnPush
- **Opción elegida:** Todos los componentes standalone con ChangeDetectionStrategy.OnPush
- **Razón:** Rendimiento óptimo, alineado con Angular 19 best practices. Los componentes no necesitan detección de cambios constante.
- **Alternativa considerada:** Default strategy — más fácil pero menos performante.

### Decision 3: Estructura de datos en TypeScript (no JSON externo)
- **Opción elegida:** Migrar datos de proyectos, experiencia y tecnologías a archivos TypeScript con interfaces tipadas
- **Razón:** Type safety, mejor DX, imports directos sin HTTP calls. Se elimina la dependencia de HttpClient para datos estáticos.
- **Alternativa considerada:** Mantener projects.json + HttpClient — innecesario para datos estáticos que nunca cambian en runtime.

### Decision 4: Animaciones con Intersection Observer + Angular Animations
- **Opción elegida:** Usar IntersectionObserver para triggers de entrada y Angular Animations para las transiciones
- **Razón:** Sin dependencias externas, máximo control, rendimiento nativo. Las animaciones se disparan cuando el elemento entra en viewport.
- **Alternativa considerada:** Scroll-driven animations — menor soporte, no viable cross-browser aún.

### Decision 5: Paleta de colores oscura premium (Vercel-inspired)
- **Opción elegida:** Fondo #0a0a0b (negro casi puro), superficies #18181b (gris oscuro), texto #e4e4e7 (gris claro), texto secundario #a1a1aa, acento #6366f1 (indigo sutil)
- **Razón:** Transmite seriedad, modernidad, enfoque técnico. Inspirado en Vercel, Linear, Supabase.
- **Alternativa considerada:** Mantener la paleta #1a2b3c + #1abc9c — se ve genérica y "template-like".

### Decision 6: Secciones con scroll-snap y sticky headers
- **Opción elegida:** Scroll-snap type en las secciones principales para una navegación fluida
- **Razón:** Mejora la experiencia de navegación en desktop, sensación premium.
- **Alternativa considerada:** Scroll normal — funcional pero menos pulido.

## Risks / Trade-offs

| Riesgo | Mitigación |
|--------|-----------|
| **Breaking change total**: Todos los componentes se reescriben, posible pérdida de funcionalidad existente | Mantener la estructura base de app.component.html, probar cada sección individualmente, mantener funcionalidad EmailJS intacta |
| **Animaciones en móvil**: Demasiadas animaciones pueden afectar rendimiento en dispositivos low-end | Usar `prefers-reduced-motion`, animaciones ligeras (opacity/transform), limitar a 3-4 animaciones por vista |
| **SEO**: La migración a SPA pura sin SSR puede afectar indexing | Implementar meta tags, Open Graph, JSON-LD estructurado, sitemap básico |
| **Regresión en contacto**: EmailJS depende de IDs de template que no deben cambiar | No modificar la lógica de envío, solo la UI del formulario |
| **Pérdida de assets**: Las imágenes actuales pueden no encajar con el nuevo diseño | Revisar y reemplazar assets que no correspondan; mantener profile.png si es relevante |

## Migration Plan

1. **Fase 1: Design System** → Crear variables CSS globales, tipografía, paleta, espaciado
2. **Fase 2: Layout Base** → Reestructurar app.component.html, crear contenedores de sección
3. **Fase 3: Componente Hero** → Nuevo, reemplaza parte del navbar/about actual
4. **Fase 4: Componente About** → Reescribir contenido y estilo
5. **Fase 5: Componente Tech Stack** → Nuevo, reemplaza Skills
6. **Fase 6: Componente Experience** → Nuevo
7. **Fase 7: Componente Projects** → Rediseño completo
8. **Fase 8: Componente AI Automation** → Nuevo
9. **Fase 9: Componente Contact** → Modernizar UI
10. **Fase 10: Componente Nav + Footer** → Rediseñar
11. **Fase 11: Animaciones globales** → Implementar fade-in, slide-up
12. **Fase 12: SEO + Accesibilidad** → Meta tags, ARIA, semantic HTML
13. **Fase 13: Responsive QA** → Probar en todos los breakpoints

Rollback: `git checkout .` y `git checkout master` para revertir a versión anterior.

## Open Questions

- ¿Se debe mantener la imagen de perfil actual (profile.png) o reemplazar por una más profesional?
- ¿Los datos de experiencia laboral deben ser proporcionados por el usuario o se pueden inferir del contexto actual?
- ¿Se desea mantener la funcionalidad de filtrado de proyectos por tecnología o eliminarla en el rediseño?
