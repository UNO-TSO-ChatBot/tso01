/**
 * Chatbot.jsx — Widget de chat flotante.
 *
 * Muestra un botón circular con el robot en la esquina inferior derecha.
 * Al hacer click abre una ventana de chat.
 *
 * Estado:
 *   - `open`     : boolean — si la ventana de chat está visible.
 *   - `messages` : array   — historial de mensajes { from: "user"|"bot", text }.
 *   - `input`    : string  — texto que el usuario está escribiendo.
 *   - `loading`  : boolean — true mientras se espera la respuesta de la API.
 *
 * API:
 *   POST https://ragchat-carreras.onrender.com/generate-api
 *   Body: { query: string, top_k: number }
 *   Response: { query: string, output: string }
 *
 * Accesibilidad:
 *   - El input soporta Enter para enviar.
 *   - El botón de envío se deshabilita mientras carga.
 */
import { useState, useRef, useEffect } from "react";
import { procesarInput } from "../utils/chatValidation";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState("");

  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!inputError) return;
    const timer = setTimeout(() => setInputError(""), 3000);
    return () => clearTimeout(timer);
  }, [inputError]);

  const handleSend = async () => {
    const { valor, error } = procesarInput(input);
    if (error) {
      setInputError(error);
      return;
    }
    setInputError("");

    const newMessages = [...messages, { from: "user", text: valor }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
      try {
      const res = await fetch("https://ragchat-carreras.onrender.com/generate-api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: valor, top_k: 10 }),
      });
      const data = await res.json();
      const output = data.output.replace(/^Respuesta generada:\s*/i, "").trim();
      setMessages([...newMessages, { from: "bot", text: output }]);
    } catch (error) {
      console.error("Error al consultar el chatbot:", error);
      setMessages([
        ...newMessages,
        { from: "bot", text: "Error al consultar la API." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <div
        id="chatbot-button"
        onClick={() => setOpen(!open)}
        aria-label="Abrir chatbot"
      >
        <img src="images/Robot.png" alt="Chatbot" />
      </div>

      {open && (
        <div id="chatbot-window">
          {/* Encabezado */}
          <div className="chat-header">
            <div className="chat-header-info">
              <i className="bi bi-robot"></i>
              <span>Asistente UNO</span>
            </div>
            <button
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          {/* Mensajes */}
          <div className="chat-body" ref={chatBodyRef}>
            {messages.length === 0 && (
              <p className="chat-empty">¡Hola! ¿En qué puedo ayudarte?</p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`chat-burbuja ${m.from === "user" ? "chat-burbuja--usuario" : "chat-burbuja--bot"}`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="chat-burbuja chat-burbuja--bot chat-burbuja--cargando">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="chat-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setInputError("");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !loading) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Escribí tu mensaje..."
              disabled={loading}
              maxLength={500}
            />
            <button onClick={handleSend} disabled={loading} aria-label="Enviar">
              <i className="bi bi-send-fill"></i>
            </button>
          </div>
        </div>
      )}
      {inputError && (
        <div className="chat-toast" role="alert">
          <i className="bi bi-exclamation-circle-fill"></i>
          {inputError}
        </div>
      )}
    </>
  );
}
