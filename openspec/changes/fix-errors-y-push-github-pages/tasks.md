## 1. Corregir errores de sintaxis en templates HTML

- [ ] 1.1 Corregir `nav.component.html`: Reemplazar `.preventDefault()` por `$event.preventDefault()`
- [ ] 1.2 Corregir `nav.component.html`: Eliminar trailing comma y añadir `$event` en `handleNavClick(link, $event)`

## 2. Corregir encoding de caracteres españoles

- [ ] 2.1 Corregir `nav.component.ts`: Reemplazar `CVC�sarAlamedaBarquillo.pdf` por `CVCésarAlamedaBarquillo.pdf`
- [ ] 2.2 Corregir `aboutme.component.ts`: Limpiar URL de LinkedIn (revisar caracteres)
- [ ] 2.3 Corregir `footer.component.ts`: Reemplazar `c�sar` por `césar` en linkedinUrl y en nombre
- [ ] 2.4 Corregir `footer.component.html`: Reemplazar `C�sar` por `César` en nombre y tagline
- [ ] 2.5 Corregir `experience.component.ts`: Reemplazar caracteres `�` por sus acentos correctos en textos

## 3. Sincronizar providers SSR

- [ ] 3.1 Actualizar `main.server.ts`: Añadir `provideRouter(routes)` a los providers

## 4. Build de producción y push a GitHub

- [ ] 4.1 Ejecutar `ng build --configuration production` y verificar que no hay errores
- [ ] 4.2 Hacer commit de todos los cambios con mensaje descriptivo
- [ ] 4.3 Hacer push a `origin master`
- [ ] 4.4 Desplegar a GitHub Pages con `npx angular-cli-ghpages --dir=dist/portfoliocsaralameda --branch=gh-pages`
- [ ] 4.5 Verificar que el sitio está accesible en https://cesaralameda.github.io/portfoliocsaralameda/
