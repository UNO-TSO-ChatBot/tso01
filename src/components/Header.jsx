/**
 * Header.jsx — Barra de navegación fija.
 *
 * En desktop muestra todos los enlaces en línea.
 * En mobile (≤768px) los oculta y muestra un botón hamburguesa.
 * Al hacer click en un enlace del menú mobile, el menú se cierra automáticamente.
 *
 * Estado:
 *   - `open` (boolean): controla si el menú mobile está desplegado.
 *
 * Enlace externo: "Inscribite" → https://www.uno.edu.ar/ingreso.html
 */
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar text-white p-3">
      <a href="#inicio" className="navbar-logo" onClick={close}>
        <img src="/images/Logo.jpg" alt="UNO - Sede Informática" />
      </a>

      <button
        className={`navbar-hamburger${open ? " abierto" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={open ? "nav-abierto" : ""}>
        <a href="#inicio" onClick={close}>Inicio</a>
        <a href="#carreras" onClick={close}>Carreras</a>
        <a href="#facultad" onClick={close}>Nuestra Facultad</a>
        <a href="#experiencias" onClick={close}>Experiencias</a>
        <a href="#contacto" onClick={close}>Contacto</a>
        <a href="https://www.uno.edu.ar/ingreso.html" target="_blank" rel="noopener noreferrer" onClick={close}>Inscribite</a>
      </nav>
    </header>
  );
}

