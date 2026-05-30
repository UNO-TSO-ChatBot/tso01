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
            <i className="bi bi-geo-alt-fill"></i> Av. San Martín 1234, Merlo, Buenos Aires
          </li>
          <li>
            <i className="bi bi-telephone-fill"></i> (011) 4567-8900
          </li>
          <li>
            <i className="bi bi-envelope-fill"></i> informatica@uno.edu.ar
          </li>
          <li>
            <i className="bi bi-clock-fill"></i> Lunes a Viernes de 9:00 a 20:00 hs
          </li>
        </ul>
      </div>
    </section>
  );
}
