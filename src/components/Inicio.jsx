/**
 * Inicio.jsx — Sección hero (primera sección visible).
 *
 * Muestra:
 *   - Título principal y subtítulo institucional.
 *   - Botón CTA que lleva al sitio oficial de la UNO.
 *   - 4 cards clickeables, una por carrera.
 *
 * Props:
 *   - setModal (function): callback de App.jsx para abrir el modal de una carrera.
 *     Al hacer click en una card, setModal(index) navega a #carreras
 *     y abre el modal correspondiente.
 *
 * Para agregar una carrera, agregar un objeto al array `carreras`
 * con las propiedades: { label, icon }.
 */
// components/Inicio.jsx
const carreras = [
  {
    label: "Licenciatura en Informática",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    label: "Analista en Informática",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    label: "Tecnicatura en Redes",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.1-1.533.284-2.253" />
      </svg>
    ),
  },
  {
    label: "Tecnicatura en Desarrollo Web",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5 3 12l3.75 4.5M17.25 7.5 21 12l-3.75 4.5M13.5 4.5l-3 15" />
      </svg>
    ),
  },
];

export default function Inicio({ setModal }) {
  const handleClick = (index) => {
    setModal(index);
    const section = document.getElementById("carreras");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="inicio-section">
      <h2>Formá tu futuro en Tecnología</h2>
      <p className="inicio-subtitulo">
        Descubrí nuestras carreras en informática y convertite en el profesional
        que el mundo digital necesita. Educación pública de calidad en la Sede
        de Informática.
      </p>

      <a
        href="https://www.uno.edu.ar/"
        target="_blank"
        rel="noopener noreferrer"
        className="inicio-cta-primary"
      >
        Conocé la universidad
      </a>

      <div className="inicio-buttons">
        {carreras.map((c, i) => (
          <button key={i} className="inicio-card" onClick={() => handleClick(i)}>
            <span className="inicio-card-icon">{c.icon}</span>
            <span className="inicio-card-label">{c.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
