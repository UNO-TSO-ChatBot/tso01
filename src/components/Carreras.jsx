import { useState } from "react";

const carreras = [
  {
    nombre: "Licenciatura en Informática",
    descripcionCorta:
      "Formación integral en desarrollo de software, gestión de proyectos y tecnologías emergentes.",
    descripcionLarga:
      "Se propone formar egresados con significativos fundamentos teóricos de informática y conocimiento actualizado de las tecnologías, lo que le permitirá seguir capacitándose permanentemente al ritmo de la evolución tecnológica. Podrá planificar, dirigir, realizar y/o evaluar proyectos de diseño, verificación, puesta a punto, mantenimiento y actualización para redes de comunicaciones que vinculen sistemas de procesamiento de datos. Podrá realizar la especificación del co-diseño hardware-software y prueba funcional (real o simulada) de la arquitectura.\n\nEl egresado de esta carrera estará capacitado para controlar las normas de calidad en el software o software integrado a otros componentes y efectuar las tareas de auditoría de los sistemas informáticos, realizar arbitrajes, peritajes, y tasaciones relacionadas con los sistemas informáticos.\n\nTambién podrá realizar tareas como docente universitario en informática en todos los niveles, de acuerdo a la jerarquía de título de grado máximo.",
    linkPlan:
      "https://www.uno.edu.ar/images/documentos/escuelas/Plan-de-Estudios-Lic-en-Informatica-2022.pdf",
  },
  {
    nombre: "Analista en Informática",
    descripcionCorta:
      "Perfil orientado al análisis de sistemas, soporte técnico y soluciones informáticas para organizaciones.",
    descripcionLarga:
      "Se propone formar egresados con significativos fundamentos teóricos de informática y conocimiento actualizado de las tecnologías, lo que le permitirá seguir capacitándose permanentemente al ritmo de la evolución tecnológica. Podrá planificar, dirigir, realizar y/o evaluar proyectos de diseño, verificación, puesta a punto, mantenimiento y actualización para redes de comunicaciones que vinculen sistemas de procesamiento de datos. Podrá realizar la especificación del co-diseño hardware-software y prueba funcional (real o simulada) de la arquitectura.\n\nEl egresado de esta carrera estará capacitado para controlar las normas de calidad en el software o software integrado a otros componentes y efectuar las tareas de auditoría de los sistemas informáticos, realizar arbitrajes, peritajes, y tasaciones relacionadas con los sistemas informáticos.\n\nTambién podrá realizar tareas como docente universitario en informática en todos los niveles, de acuerdo a la jerarquía de título de grado máximo.",
    linkPlan:
      "https://www.uno.edu.ar/images/documentos/escuelas/Plan-de-Estudios-Lic-en-Informatica-2022.pdf",
  },
  {
    nombre: "Tecnicatura Universitaria en Redes Informáticas",
    descripcionCorta:
      "Especialización en instalación, configuración y administración de redes de comunicación.",
    descripcionLarga:
      "Se propone formar técnicos universitarios con dominio de conocimientos que persiguen los siguientes objetivos: Adquirir un alto nivel de dominio técnico de la disciplina y los conocimientos teóricos actualizados y las capacidades necesarias para abordar de manera creativa los problemas que surjan en su ámbito laboral, arribando a soluciones efectivas en el orden de la resolución de problemas; así como participar en proyectos que involucren la implementación, mantenimiento, administración y actualización en redes de información.\n\nEl egresado de esta carrera estará capacitado para desempeñarse en grupos de trabajo y realizar tareas en forma independiente, brindando seguridad y eficacia en su desempeño. También estará capacitado para la instalación, administración, mantenimiento y ampliación de redes de datos informáticos. Y contará con conocimientos básicos de programación y ciencias de la computación en general.\n\nLos alcances del título le permitirán al egresado colaborar en tareas de supervisión, mantenimiento, planificación, desarrollo o servicios especializados en sistemas de informática. Así como diagnosticar y evaluar fallas de sistemas.",
    linkPlan:
      "https://www.uno.edu.ar/images/documentos/escuelas/Tecnicatura%20Univ%20en%20Redes%20Informaticas_actualizado.pdf",
  },
  {
    nombre: "Tecnicatura Universitaria en Tecnologías Web",
    descripcionCorta:
      "Diseño y desarrollo de aplicaciones web modernas, con foco en frontend y backend.",
    descripcionLarga:
      "Se apunta a la formación de técnicos universitarios conscientes del rol de la informática dentro de la sociedad actual asumiendo de manera permanente una conducta ética y profesional. El plan de formación pretende crear graduados con un dominio de conocimientos que persigue los siguientes objetivos: adquirir un alto nivel de dominio técnico de la disciplina y los conocimientos teóricos actualizados y las capacidades necesarias para abordar de manera creativa los problemas que surjan en su ámbito laboral arribando a soluciones efectivas en beneficio de la sociedad en su conjunto. Así como participar en proyectos que involucren la implementación, mantenimiento, ampliación y actualización de sistemas y aplicaciones web.\n\nSe encontrará capacitado especialmente para el análisis y desarrollo de sistemas informáticos con principal énfasis en el análisis y desarrollo de sistemas web y móviles, ya que cuenta con una capacitación en el desarrollo web y diseño gráfico. Además contará con una amplia formación de trabajo en equipo y suficiencia para entender y reconocer las necesidades que las distintas instituciones puedan tener con relación a los sistemas informáticos.\n\nLos alcances del título le permitirán al egresado colaborar en tareas de supervisión, mantenimiento, planificación, desarrollo o servicios especializados en sistemas de diseño gráfico y aplicaciones web.",
    linkPlan:
      "https://www.uno.edu.ar/images/documentos/escuelas/plan%20de%20estudios%20tecnologias%20web.pdf",
  },
];

export default function Carreras({ modal, setModal }) {
  return (
    <section id="carreras" className="row p-4">
      {carreras.map((c, i) => (
        <div key={i} className="card col-md-5 m-3 p-3">
          <h2>{c.nombre}</h2>
          <p>{c.descripcionCorta}</p>
          <button className="btn btn-primary" onClick={() => setModal(i)}>
            Más información
          </button>
          <a className="btn btn-secondary" href={c.linkPlan} target="_blank">
            Plan de estudios
          </a>

          {modal === i && (
            <div className="modal">
              <div className="modal-content p-3">
                <h5>{c.nombre}</h5>
                <p>{c.descripcionLarga}</p>
                <a href={c.linkPlan} target="_blank" className="btn btn-secondary">
                  Ver plan de estudios
                </a>
                <button className="btn btn-dark" onClick={() => setModal(null)}>
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
