/**
 * Contacto.jsx — Sección de información de contacto.
 *
 * Muestra los datos institucionales de la sede:
 *   dirección, teléfono, email y horario de atención.
 *
 * Para actualizar los datos de contacto, editar directamente el JSX.
 */
// components/Contacto.jsx
export default function Contacto() {
  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-info">
        <h2>¿Tenés dudas? Contactanos</h2>
        <ul>
          <li>
            <i className="bi bi-geo-alt-fill"></i> Sede Córdoba - Córdoba 1055, Merlo, Buenos Aires.
          </li>
          <li>
            <i className="bi bi-telephone-fill"></i> (0220) 4834150
          </li>
          <li>
            <i className="bi bi-envelope-fill"></i> alumnosct@uno.edu.ar /  escueladecienciastecnologicas@uno.edu.ar
          </li>
          <li>
            <i className="bi bi-clock-fill"></i> Lunes a viernes de 10:00 a 17:00 hs.
          </li>
        </ul>
      </div>
    </section>
  );
}
