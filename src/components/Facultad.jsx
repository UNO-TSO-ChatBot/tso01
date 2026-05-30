/**
 * Facultad.jsx — Sección institucional.
 *
 * Layout de dos columnas:
 *   - Izquierda: foto de la sede (public/images/sedecampus.png).
 *   - Derecha: título, descripción y lista de estadísticas con íconos.
 *
 * En mobile el layout pasa a una sola columna (foto arriba, texto abajo).
 */
export default function Facultad() {
  return (
    <section id="facultad">
      <div className="facultad-inner">
        <img
          src="/images/sedecampus.png"
          alt="Sede Informática UNO"
          className="facultad-img"
        />
        <div className="facultad-texto">
          <h2 className="facultad-titulo">Nuestra Facultad</h2>
          <p className="facultad-descripcion">
            Somos una universidad pública comprometida con la formación en tecnología.
            Brindamos educación de calidad, con docentes especializados y vínculos
            directos con la industria tecnológica.
          </p>
          <ul className="facultad-lista">
            <li><i className="bi bi-people-fill"></i> +2000 estudiantes activos</li>
            <li><i className="bi bi-mortarboard-fill"></i> 4 carreras disponibles</li>
            <li><i className="bi bi-briefcase-fill"></i> 98% de empleabilidad</li>
            <li><i className="bi bi-building-fill"></i> +50 empresas asociadas</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

