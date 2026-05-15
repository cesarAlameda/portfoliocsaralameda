## Why

El portfolio actual tiene un diseño funcional pero visualmente desactualizado, con estética de "template genérico" que no refleja el nivel profesional real del desarrollador. El objetivo es reposicionar al autor como un profesional backend especializado en APIs, integraciones empresariales y automatización con IA, transmitiendo seniority visual, claridad técnica y experiencia profesional real.

## What Changes

- **Hero section completamente nueva**: pasa de un navbar con nombre a un hero statement potente que comunique especialización (APIs, integraciones, automatización)
- **About section reescrito**: eliminar texto genérico de "estudiante"/"titulado", reemplazar con narrativa profesional con foco en experiencia real de 1 año como desarrollador backend/integrations
- **Skills section eliminada (formato actual)**: reemplazar con un "Tech Stack" más profesional y minimalista, sin barras de porcentajes ni iconos genéricos
- **Projects section rediseñada**: pasar de carrusel simple a tarjetas de proyecto tipo producto, con información de stack, arquitectura, APIs, integraciones y resultados
- **Nueva sección "Experience"**: mostrar experiencia profesional real con detalle de problemas, soluciones, stack, impacto
- **Nueva sección "AI & Automation"**: dedicada a proyectos y exploración de IA aplicada
- **Contact section modernizado**: diseño más limpio y profesional
- **Footer rediseñado**: más minimalista, con enlaces profesionales
- **Paleta de colores y tipografía**: migrar a estética premium oscura tipo Vercel/Linear (grises, blancos, acentos sutiles)
- **Navegación sticky mejorada**: más sutil, minimalista
- **Animaciones sutiles**: transiciones suaves sin efectos exagerados
- **SEO y accesibilidad**: mejoras en meta tags, ARIA labels, semantic HTML

## Capabilities

### New Capabilities
- `hero-section`: Hero statement profesional que comunica especialización en APIs, integraciones y automatización
- `experience-section`: Sección de experiencia laboral detallada con problema, solución, stack, impacto
- `ai-automation-section`: Sección dedicada a proyectos de IA aplicada y automatización inteligente
- `tech-stack`: Sección de tecnologías reales y relevantes (backen-focused), sin grids gigantes ni barras de skills
- `layout-redesign`: Sistema de diseño completo con nueva paleta, tipografía, espaciado y componentes

### Modified Capabilities
- `projects-section`: Rediseño completo a tarjetas tipo producto con contexto de negocio, stack, arquitectura, APIs, integraciones y resultados
- `about-section`: Reescritura completa del contenido con foco en perfil profesional real, no académico
- `contact-section`: Modernización del diseño manteniendo funcionalidad EmailJS existente
- `navigation`: Navbar más minimalista y sutil, con smooth scroll mejorado

## Impact

- **Código**: Todos los componentes .html, .css y .ts serán reescritos. Posible creación de nuevos componentes (hero, experience, ai-automation, tech-stack)
- **Estilos**: `src/styles.css` será reemplazado con nuevo sistema de diseño. CSS de componentes individuales será reescrito completamente
- **Assets**: Se requieren nuevos assets (logos tech, iconos minimalistas). Los actuales (profile.png, project1-4.png) se mantienen pero pueden requerir actualización
- **Datos**: `src/assets/projects.json` será reestructurado con nuevos campos (stack, arquitectura, APIs, resultados)
- **SEO**: Nuevos meta tags en `src/index.html`, estructura semántica mejorada
- **Dependencias**: No se requieren nuevas dependencias externas. Se mantiene Angular 19 con animaciones standalone
