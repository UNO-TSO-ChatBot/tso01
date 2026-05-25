// components/Inicio.jsx
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
        <a
        href="https://www.uno.edu.ar/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary m-2"
        >
        Conocé la universidad
        </a>
      <h2>Formá tu futuro en Tecnología</h2>
      <p>
        Descubrí nuestras carreras en informática y convertite en el profesional
        que el mundo digital necesita. Educación pública de calidad en la Sede
        de Informática.
      </p>

      <div className="inicio-buttons">
        <button className="btn btn-secondary m-2" onClick={() => handleClick(0)}>
          Licenciatura en Informática
        </button>
        <button className="btn btn-secondary m-2" onClick={() => handleClick(1)}>
          Analista en Informática
        </button>
        <button className="btn btn-secondary m-2" onClick={() => handleClick(2)}>
          Tecnicatura en Redes
        </button>
        <button className="btn btn-secondary m-2" onClick={() => handleClick(3)}>
          Tecnicatura en Desarrollo Web
        </button>
      </div>
    </section>
  );
}
