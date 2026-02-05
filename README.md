# DataOrden — Sitio web (landing)

Este repositorio contiene una landing page estática (HTML + CSS + JS) para **DataOrden**.

## Estructura

- `index.html` — página principal
- `styles.css` — estilos
- `script.js` — navegación móvil + formulario (mailto) + links de contacto

## Personalización rápida

Abre `script.js` y actualiza:

```js
const SETTINGS = {
  whatsappNumber: "5210000000000",
  emailTo: "hola@dataorden.mx",
  emailSubject: "Diagnóstico DataOrden",
};
```

También puedes ajustar textos directamente en `index.html`.

## Ejecutar localmente

Opción 1 (más simple):
- Abre `index.html` en tu navegador.

Opción 2 (servidor local recomendado):
- Con Python:
  ```bash
  python -m http.server 8000
  ```
  Luego abre `http://localhost:8000`.

## Publicar en GitHub Pages

1. Sube estos archivos a tu repositorio (rama `main`).
2. En GitHub: **Settings → Pages**
3. En **Build and deployment**, selecciona:
   - Source: **Deploy from a branch**
   - Branch: `main` y folder `/ (root)`
4. Guarda y abre la URL que te da GitHub Pages.

## Notas

- El formulario no requiere backend: abre el cliente de correo del usuario con un `mailto:`.
- Si quieres capturar leads sin depender de correo, puedes integrar un servicio tipo Formspree/Formspark o un endpoint propio (y te ayudo a configurarlo).
