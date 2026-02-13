# DataOrden — Landing (versión completa + fix de franja)

Esta versión recupera **todas las secciones** (Problemas / Entregables / Proceso / Beneficios / Contacto)
y mantiene el fix para evitar “cortes” bruscos del fondo.

## Si no ves cambios
Es caché. Haz hard refresh:
- Windows: Ctrl + Shift + R
- Mac: Cmd + Shift + R

## Ajustar el azul
En `styles.css`:
- `--glow1`
- `--glow2`

Ejemplo (más negro):
```css
--glow1: rgba(56,189,248,.06);
--glow2: rgba(167,139,250,.05);
```

## Configurar WhatsApp y correo
En `script.js` cambia:
```js
whatsappNumber, emailTo, emailSubject
```
