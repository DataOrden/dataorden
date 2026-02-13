# DataOrden — Sitio web (landing)

Landing estática (HTML + CSS + JS) para **DataOrden**.

## Archivos
- `index.html`
- `styles.css`
- `script.js`

## Personalización
En `script.js` cambia:

```js
const SETTINGS = {
  whatsappNumber: "5210000000000",
  emailTo: "hola@dataorden.mx",
  emailSubject: "Diagnóstico DataOrden",
};
```

## Correr local
Abrir `index.html` o usar:

```bash
python -m http.server 8000
```

## GitHub Pages
Settings → Pages → Deploy from a branch → `main` → `/(root)`
