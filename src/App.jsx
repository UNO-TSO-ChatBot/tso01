/**
 * App.jsx — Componente raíz de la aplicación.
 *
 * Orquesta todas las secciones de la landing page en orden:
 *   Header → Inicio → Carreras → Facultad → Experiencias → Contacto → Footer
 *
 * Estado compartido:
 *   - `modal` (number | null): índice de la carrera cuyo modal está abierto.
 *     Se inicializa en null (ningún modal abierto).
 *     Lo lee <Carreras> para saber qué modal mostrar.
 *     Lo escribe <Inicio> cuando el usuario hace click en una card de carrera
 *     (navega a #carreras y abre el modal correspondiente).
 */
import { useState } from "react";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Carreras from "./components/Carreras";
import Facultad from "./components/Facultad";
import Experiencias from "./components/Experiencias";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

function App() {
  const [modal, setModal] = useState(null);

  return (
    <>
      {/* Navbar fija — siempre visible en la parte superior */}
      <Header />

      <main>
        {/* Hero con título, subtexto y accesos rápidos a las carreras */}
        <Inicio setModal={setModal} />

        {/* Grid 2×2 de carreras con modal de detalle y plan de estudios */}
        <Carreras modal={modal} setModal={setModal} />

        {/* Foto de la sede + información institucional */}
        <Facultad />

        {/* Carrusel de testimonios de alumnos */}
        <Experiencias />

        {/* Datos de contacto institucionales */}
        <Contacto />
      </main>

      {/* Pie de página fijo */}
      <Footer />

      {/* Widget de chatbot flotante (botón en la esquina inferior derecha) */}
      <Chatbot />
    </>
  );
}

export default App;

