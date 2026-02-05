// ================================
// DataOrden - sitio estático
// Cambia estos valores a tus datos
// ================================
const SETTINGS = {
  whatsappNumber: "5210000000000", // Formato: 52 + lada + número. Ej: 5215512345678
  emailTo: "hola@dataorden.mx",
  emailSubject: "Diagnóstico DataOrden",
};

function qs(sel, parent=document){ return parent.querySelector(sel); }

function initYear(){
  const el = qs("#year");
  if(el) el.textContent = new Date().getFullYear();
}

function initMobileNav(){
  const btn = qs(".nav-toggle");
  const menu = qs("#nav-menu");
  if(!btn || !menu) return;

  const close = () => {
    menu.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
  };

  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  // Cerrar al navegar
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => close());
  });

  // Cerrar si haces click fuera
  document.addEventListener("click", (e) => {
    const target = e.target;
    if(!menu.classList.contains("is-open")) return;
    if(target === btn || btn.contains(target) || menu.contains(target)) return;
    close();
  });

  // Cerrar con Escape
  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") close();
  });
}

function initContactLinks(){
  const wa = qs("#wa-link");
  const mail = qs("#mail-link");

  const waMsg = encodeURIComponent("Hola, me interesa DataOrden. ¿Podemos agendar un diagnóstico?");
  const waHref = `https://wa.me/${SETTINGS.whatsappNumber}?text=${waMsg}`;

  const mailHref = `mailto:${SETTINGS.emailTo}?subject=${encodeURIComponent(SETTINGS.emailSubject)}`;

  if(wa) wa.href = waHref;
  if(mail) mail.href = mailHref;
}

function initForm(){
  const form = qs("#lead-form");
  if(!form) return;

  const status = qs(".form-status", form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = qs("#nombre", form).value.trim();
    const empresa = qs("#empresa", form).value.trim();
    const email = qs("#email", form).value.trim();
    const mensaje = qs("#mensaje", form).value.trim();

    const body = [
      `Nombre: ${nombre}`,
      `Empresa: ${empresa || "-"}`,
      `Email: ${email}`,
      "",
      "Mensaje:",
      mensaje
    ].join("\n");

    const href =
      `mailto:${encodeURIComponent(SETTINGS.emailTo)}` +
      `?subject=${encodeURIComponent(SETTINGS.emailSubject)}` +
      `&body=${encodeURIComponent(body)}`;

    // UX
    if(status){
      status.textContent = "Listo: se abrirá tu correo para enviar el mensaje.";
    }

    window.location.href = href;
  });
}

initYear();
initMobileNav();
initContactLinks();
initForm();
