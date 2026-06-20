/**
 * Experiencias.jsx — Carrusel de testimonios de alumnos.
 *
 * Muestra un testimonio a la vez con navegación por botones y puntos (dots).
 *
 * Estado:
 *   - `actual` (number): índice del testimonio actualmente visible (0-based).
 *
 * Para agregar o editar testimonios, modificar el array `testimonios`
 * con objetos: { nombre, carrera, texto, avatar }.
 * `avatar` es un string de 2 letras que se muestra como iniciales.
 */
import { useState } from "react";

const testimonios = [
  {
    nombre: "Valentina L.",
    carrera: "Licenciatura en Informática · 3° año",
    texto:
      "«Lo que más me sorprendió fue la cercanía de los profesores. Siempre están disponibles para resolver dudas y te acompañan de verdad en el proceso. Siento que aprendo algo nuevo y útil cada semana.»",
    avatar: "VL",
  },
  {
    nombre: "Mateo G.",
    carrera: "Tecnicatura en Desarrollo Web · 3° año",
    texto:
      "«Gracias a la Tecnicatura conseguí mi primer trabajo como frontend developer antes de recibirme. Los proyectos del último año son muy prácticos y te preparan directamente para la industria.»",
    avatar: "MG",
  },
  {
    nombre: "Camila R.",
    carrera: "Analista en Informática · 2° año",
    texto:
      "«El ambiente de la sede es increíble. Hay compañerismo y siempre hay alguien dispuesto a ayudarte. Además, el hecho de que sea educación pública y de tan alta calidad es algo que valoro mucho.»",
    avatar: "CR",
  },
  {
    nombre: "Lucía F.",
    carrera: "Tecnicatura en Redes Informáticas · 3° año",
    texto:
      "«Cursar Redes me abrió puertas que no imaginaba. Hoy trabajo administrando la infraestructura de una empresa importante y todo lo que aplico lo aprendí en la UNO. No cambiaría la experiencia por nada.»",
    avatar: "LF",
  },
];

export default function Experiencias() {
  const [actual, setActual] = useState(0);

  const anterior = () =>
    setActual((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1));
  const siguiente = () =>
    setActual((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1));

  const t = testimonios[actual];

  return (
    <section id="experiencias" className="experiencias-section">
      <h2 className="experiencias-titulo">Lo que dicen nuestros alumnos</h2>

      <div className="carrusel">
        <button className="carrusel-btn" onClick={anterior} aria-label="Anterior">
          <i className="bi bi-chevron-left"></i>
        </button>

        <div className="carrusel-card">
          <div className="carrusel-avatar">{t.avatar}</div>
          <p className="carrusel-texto">{t.texto}</p>
          <p className="carrusel-nombre">{t.nombre}</p>
          <p className="carrusel-carrera">{t.carrera}</p>
        </div>

        <button className="carrusel-btn" onClick={siguiente} aria-label="Siguiente">
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>

      <div className="carrusel-dots">
        {testimonios.map((_, i) => (
          <button
            key={i}
            className={`carrusel-dot${i === actual ? " activo" : ""}`}
            onClick={() => setActual(i)}
            aria-label={`Ir al testimonio ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
