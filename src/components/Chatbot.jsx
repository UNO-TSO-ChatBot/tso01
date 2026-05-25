import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setMessages([
        ...newMessages,
        { from: "bot", text: data.slip.advice }
      ]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { from: "bot", text: "Error al consultar la API." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div id="chatbot-button" onClick={() => setOpen(!open)}>
        <img src="src/assets/Robot.png" alt="Chatbot" width="60" />
      </div>

      {open && (
        <div id="chatbot-window">
          <div className="chat-header">
            <span>Chatbot</span>
            <button onClick={() => setOpen(false)}>X</button>
          </div>
          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  textAlign: m.from === "user" ? "right" : "left",
                  margin: "5px 0"
                }}
              >
                <b>{m.from === "user" ? "Tú" : "Bot"}:</b> {m.text}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !loading) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Escribe tu mensaje..."
              disabled={loading}
            />
            <button onClick={handleSend} disabled={loading}>
              {loading ? (
                <div className="spinner-border spinner-border-sm text-light" role="status">
                  <span className="visually-hidden">Cargando...</span>
                </div>
              ) : (
                "Enviar"
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
