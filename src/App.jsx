import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Carreras from "./components/Carreras";
import Facultad from "./components/Facultad";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

function App() {
  const [modal, setModal] = useState(null);

  return (
    <>
      <Header />
      <main>
        <Inicio setModal={setModal} />
        <Carreras modal={modal} setModal={setModal} />
        <Facultad />
        <Contacto />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
