## Context

El portfolio está desarrollado con Angular 19 standalone y se despliega en GitHub Pages. Actualmente:

- Los templates HTML contienen errores de sintaxis (falta `$event` en event bindings y trailing comma en argumentos)
- Los caracteres acentuados (é, ó, í) en archivos TypeScript y HTML están mal codificados como `�`
- Las URLs de LinkedIn en aboutme y footer tienen caracteres corruptos
- Los providers entre `main.ts` y `main.server.ts` no están sincronizados, lo que puede causar errores de hidratación SSR
- La rama `gh-pages` no refleja los últimos cambios del diseño premium

## Goals / Non-Goals

**Goals:**
- Corregir todos los errores de sintaxis en templates HTML
- Normalizar encoding de caracteres españoles (acentos, ñ) en todo el código
- Sincronizar providers de Angular entre main.ts y main.server.ts
- Hacer build de producción exitoso y desplegar a GitHub Pages

**Non-Goals:**
- No se añadirán nuevas funcionalidades ni se modificará el diseño visual
- No se migrará a otro framework o versión de Angular
- No se modificarán los estilos CSS ni el sistema de diseño

## Decisions

| Decisión | Opción elegida | Alternativas | Razón |
|----------|---------------|--------------|-------|
| Corrección de templates | Edición directa de archivos | Regenerar componentes | Solo hay errores puntuales, no estructurales |
| Encoding de caracteres | Reemplazo directo de caracteres `�` por sus versiones correctas | Cambiar encoding global del proyecto | Los archivos ya están en UTF-8, solo hay caracteres individuales corruptos |
| Providers SSR | Sincronizar main.ts y main.server.ts manualmente | Eliminar SSR | SSR está configurado y funciona, solo necesita consistencia |
| Despliegue | `ng deploy --base-href` con angular-cli-ghpages | Push manual a gh-pages | Ya está configurado en angular.json el builder `angular-cli-ghpages:deploy` |

## Risks / Trade-offs

- [Encoding] Al reemplazar caracteres, verificar que no se rompan strings que contengan caracteres especiales en archivos SVG/data → Mitigación: Revisar cada archivo después del cambio
- [Deploy] El build de producción puede fallar si hay errores ocultos no detectados en dev → Mitigación: Hacer `ng build --configuration production` antes del deploy
- [SSR] Cambiar providers puede afectar la hidratación del lado del servidor → Mitigación: Mantener los mismos providers en ambos archivos
