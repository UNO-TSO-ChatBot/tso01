// components/Contacto.jsx
export default function Contacto() {
  return (
    <section id="contacto" className="contacto-section">
      <div className="row">
        {/* Columna izquierda: información */}
        <div className="col-md-6 contacto-info">
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

        {/* Columna derecha: formulario */}
        <div className="col-md-6 contacto-form">
          <h3>Envianos tu consulta</h3>
          <form>
            <input type="text" placeholder="Tu nombre" />
            <input type="email" placeholder="tu@email.com" />
            <select>
              <option>Seleccionar carrera</option>
              <option>Licenciatura</option>
              <option>Analista</option>
              <option>Redes</option>
              <option>Desarrollo Web</option>
            </select>
            <textarea placeholder="Escribí tu consulta..." />
            <button type="submit">Enviar consulta</button>
          </form>
        </div>
      </div>
    </section>
  );
}
