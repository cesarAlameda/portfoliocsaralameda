## Why

El portfolio personal tiene varios errores en el código (sintaxis en templates, encoding en nombres de archivo, referencias incorrectas) que impiden un desarrollo estable y pueden causar problemas en producción. Además, los cambios actuales no se han subido a GitHub Pages para que estén visibles en https://cesaralameda.github.io/portfoliocsaralameda.

## What Changes

1. **Corregir errores de sintaxis en templates HTML**:
   - `nav.component.html`: Arreglar `$event.preventDefault()` (falta `$event`) y eliminar trailing comma en llamada a `handleNavClick`
2. **Corregir encoding en nombres de archivo y URLs**:
   - `nav.component.ts`: Reemplazar caracteres `�` por `é` en la ruta del CV
   - `aboutme.component.ts`: Limpiar URL de LinkedIn
   - `footer.component.ts` y `footer.component.html`: Reemplazar `�` por `é` en nombre y URL de LinkedIn
3. **Sincronizar providers entre main.ts y main.server.ts** para evitar discrepancias SSR
4. **Build de producción y push a GitHub Pages** para desplegar la última versión

## Capabilities

### New Capabilities
- `fix-html-templates`: Corrección de errores de sintaxis en templates Angular
- `fix-encoding-issues`: Corrección de caracteres mal codificados en nombres de archivo y URLs
- `fix-ssr-providers`: Sincronización de providers SSR entre main.ts y main.server.ts
- `deploy-github-pages`: Build de producción y despliegue a GitHub Pages

### Modified Capabilities
<!-- No hay cambios en requirements de specs existentes -->

## Impact

- **Código**: Componentes nav, aboutme, footer; archivos main.ts y main.server.ts
- **Despliegue**: Se añadirá script de deploy y se ejecutará push a gh-pages
- **Dependencias**: Se usará `angular-cli-ghpages` (ya incluido en devDependencies)
