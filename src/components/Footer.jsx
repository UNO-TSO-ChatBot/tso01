/**
 * Footer.jsx — Pie de página fijo.
 *
 * Posicionado con `position: fixed; bottom: 0` en el CSS.
 * El `body` tiene `padding-bottom: 60px` para que el contenido
 * no quede tapado por el footer.
 */
export default function Footer() {
  return (
    <footer className="text-white p-4">
      <p>© 2026 Universidad Nacional del Oeste. Todos los derechos reservados.</p>
      <div className="row">
        <div className="col">Licenciatura en Informática</div>
        <div className="col">Inscripciones | Calendario | Campus virtual</div>
        <div className="col">Seguinos en redes</div>
      </div>
    </footer>
  );
}
