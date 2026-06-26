import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import {
  iaScenarios,
  findIaScenario,
  questionFlow,
  getNextKey,
  getFormValue,
  accueilLines,
} from "../data/chatbotData";

// ---- Styles (module-level — ne se recrée pas à chaque render) ----

const styles = {
  chatButton: {
    position: "fixed",
    bottom: 50,
    right: 5,
    zIndex: 1100,
    backgroundColor: "var(--brand-orange)",
    border: "none",
    borderRadius: "50%",
    width: 56,
    height: 56,
    color: "white",
    fontSize: 28,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(var(--brand-blue-rgb), 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease",
    animation: "pulse 2s infinite ease-in-out",
  },
  container: {
    position: "fixed",
    bottom: 90,
    right: 20,
    width: "90%",
    maxWidth: 380,
    maxHeight: "80vh",
    minHeight: 350,
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(var(--brand-blue-rgb), 0.14)",
    backgroundColor: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    flexDirection: "column",
    zIndex: 1050,
    border: "1px solid rgba(var(--brand-orange-rgb), 0.12)",
  },
  header: {
    margin: 0,
    padding: "16px 20px",
    background: "linear-gradient(135deg, var(--brand-orange) 0%, #FB8C00 100%)",
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "600",
    textAlign: "center",
  },
  chatBox: {
    flex: 1,
    padding: "16px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    backgroundColor: "#f9fafb",
    minHeight: 120,
    maxHeight: "none",
  },
  message: {
    padding: "12px 16px",
    maxWidth: "85%",
    wordBreak: "break-word",
    fontSize: "0.95rem",
    lineHeight: 1.5,
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
    animation: "slideIn 0.3s ease-out",
    borderRadius: 12,
    whiteSpace: "pre-line",
  },
  form: {
    display: "flex",
    padding: "16px",
    gap: "12px",
    borderTop: "1px solid #e5e7eb",
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    padding: "12px 16px",
    borderRadius: 12,
    border: "2px solid #e5e7eb",
    fontSize: "1rem",
    outline: "none",
  },
  select: {
    flex: 1,
    padding: "12px 16px",
    borderRadius: 12,
    border: "2px solid #e5e7eb",
    fontSize: "1rem",
    backgroundColor: "white",
    outline: "none",
    appearance: "none",
    cursor: "pointer",
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "var(--brand-orange)",
    color: "white",
    border: "none",
    borderRadius: 12,
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "0.95rem",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 4px rgba(var(--brand-orange-rgb), 0.28)",
  },
  formLink: {
    display: "inline-block",
    backgroundColor: "var(--brand-orange)",
    color: "white",
    padding: "12px 20px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "0.95rem",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 8px rgba(var(--brand-orange-rgb), 0.28)",
  },
  tabBar: {
    display: "flex",
    borderTop: "1px solid rgba(var(--brand-orange-rgb), 0.12)",
    background: "rgba(var(--brand-orange-rgb), 0.04)",
    justifyContent: "space-around",
    alignItems: "center",
    height: 56,
  },
  tabButton: {
    flex: 1,
    background: "none",
    border: "none",
    padding: "12px 0",
    fontSize: "1rem",
    fontWeight: 600,
    color: "var(--brand-orange)",
    cursor: "pointer",
    transition: "background 0.2s",
  },
  tabButtonActive: {
    background: "var(--brand-blue)",
    color: "#fff",
    borderRadius: 0,
  },
  accueilBox: {
    padding: "24px 16px",
    color: "var(--brand-blue)",
    fontSize: "1.05rem",
    lineHeight: 1.7,
  },
  rdvBox: {
    padding: 0,
    color: "var(--brand-blue)",
    fontSize: "1.05rem",
    lineHeight: 1.7,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: 200,
    background: "none",
  },
  stressShortcut: {
    display: "inline-block",
    margin: "18px 0 0 0",
    padding: "10px 18px",
    background: "var(--brand-blue)",
    color: "#fff",
    borderRadius: 8,
    fontWeight: 600,
    fontSize: "1rem",
    textDecoration: "none",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 2px 8px rgba(var(--brand-orange-rgb), 0.18)",
    transition: "background 0.2s",
  },
};

// ---- Injection CSS des animations (une seule fois au chargement du module) ----

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
  }

  .dot:nth-child(1) { animation-delay: -0.32s; }
  .dot:nth-child(2) { animation-delay: -0.16s; }
  .dot:nth-child(3) { animation-delay: 0s; }

  .chatbox-background::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url('/images/logost1.png');
    background-repeat: repeat;
    background-position: top left;
    background-size: 120px auto;
    opacity: 0.05;
    pointer-events: none;
    z-index: 0;
  }
`;
document.head.appendChild(styleSheet);

// ---- Composant ----

const Chatbot = ({ autoOpen = true }) => {
  const [open, setOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [tab, setTab] = useState("accueil");

  // Onglet RDV
  const [rdvMessages, setRdvMessages] = useState([
    { sender: "bot", text: "👋 Pour prendre rendez-vous, répondez aux questions suivantes." },
  ]);
  const [form, setForm] = useState({});
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentKey, setCurrentKey] = useState("company_type");

  // Onglet IA
  const [iaScenario, setIaScenario] = useState("menu");
  const [iaMessages, setIaMessages] = useState([
    { sender: "bot", text: iaScenarios.menu.text },
  ]);
  const [iaInput, setIaInput] = useState("");
  const [iaLoading, setIaLoading] = useState(false);

  // Onglet Accueil
  const [accueilDisplayedLines, setAccueilDisplayedLines] = useState([]);

  // Refs de scroll et focus
  const chatRef = useRef();
  const inputRef = useRef();
  const iaChatRef = useRef();
  const iaInputRef = useRef();
  const accueilScrollRef = useRef();

  // Auto-ouverture unique
  useEffect(() => {
    if (autoOpen && !hasAutoOpened) {
      setOpen(true);
      setHasAutoOpened(true);
    }
  }, [autoOpen, hasAutoOpened]);

  // Réinitialisation de l'onglet IA à chaque ouverture
  useEffect(() => {
    if (tab === "ia") {
      setIaScenario("menu");
      setIaMessages([{ sender: "bot", text: iaScenarios.menu.text }]);
      setIaInput("");
    }
  }, [tab]);

  // Scroll et focus pour l'onglet IA
  useEffect(() => {
    if (tab === "ia" && iaChatRef.current) {
      iaChatRef.current.scrollTop = iaChatRef.current.scrollHeight;
    }
    if (tab === "ia" && iaInputRef.current) {
      iaInputRef.current.focus();
    }
  }, [iaMessages, iaLoading, tab]);

  // Scroll pour l'onglet RDV
  useEffect(() => {
    if (tab === "rdv" && chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [rdvMessages, loading, tab]);

  // Animation de saisie pour l'accueil
  useEffect(() => {
    if (tab === "accueil") {
      setAccueilDisplayedLines([]);
      let i = 0;
      const interval = setInterval(() => {
        setAccueilDisplayedLines((prev) => [...prev, accueilLines[i]]);
        i++;
        if (i >= accueilLines.length) clearInterval(interval);
      }, 350);
      return () => clearInterval(interval);
    }
  }, [tab]);

  // Scroll automatique pendant l'animation accueil
  useEffect(() => {
    if (tab === "accueil" && accueilScrollRef.current) {
      accueilScrollRef.current.scrollTop = accueilScrollRef.current.scrollHeight;
    }
  }, [accueilDisplayedLines, tab]);

  // URL Google Form (recalculée uniquement quand le formulaire change)
  const googleFormURL = useMemo(
    () =>
      "https://docs.google.com/forms/d/e/1FAIpQLSd9zN7FIho6zAO1M4xItpdIsWfZAk1xVEFC-GdltGkzUC1rUw/viewform?usp=pp_url" +
      `&entry.181157747=${encodeURIComponent(form.company_type || "")}` +
      `&entry.641769345=${encodeURIComponent(
        getFormValue(
          ["company_name", "company_name_employee", "independant_name", "student_name", "collectivity_name", "jobseeker_name"],
          form
        )
      )}`,
    [form]
  );

  // Handlers
  const handleToggle = useCallback(() => setOpen((prev) => !prev), []);

  const handleRdvSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const q = questionFlow[currentKey];
      setRdvMessages((prev) => [...prev, { sender: "user", text: input }]);
      setForm((prev) => ({ ...prev, [q.key]: input }));
      setInput("");
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        const nextKey = getNextKey(currentKey, { ...form, [q.key]: input });
        if (nextKey) {
          setRdvMessages((prev) => [
            ...prev,
            { sender: "bot", text: questionFlow[nextKey].text },
          ]);
          setCurrentKey(nextKey);
        } else {
          setRdvMessages((prev) => [
            ...prev,
            { sender: "bot", text: "Merci pour vos réponses ! 🎉" },
            {
              sender: "bot",
              text: (
                <a href={googleFormURL} target="_blank" rel="noopener noreferrer" style={styles.formLink}>
                  📋 Confirmer mes informations
                </a>
              ),
            },
          ]);
        }
      }, 800);
    },
    [currentKey, form, input, googleFormURL]
  );

  const handleIaSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const userMsg = iaInput;
      setIaMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
      setIaInput("");
      setIaLoading(true);
      setTimeout(() => {
        const nextScenario = findIaScenario(userMsg, iaScenario);
        setIaScenario(nextScenario);
        setIaLoading(false);
        setIaMessages((prev) => [
          ...prev,
          { sender: "bot", text: iaScenarios[nextScenario].text },
        ]);
      }, 700);
    },
    [iaInput, iaScenario]
  );

  const openITAssessment = useCallback(() => {
    alert("Fonctionnalité d'évaluation des besoins IT à venir !");
  }, []);

  // ---- Contenu des onglets ----

  const accueilContent = (
    <div style={{ ...styles.accueilBox, height: "100%", overflowY: "auto" }}>
      {accueilDisplayedLines.map((line, idx) =>
        line === "" ? <br key={idx} /> : <div key={idx}>{line}</div>
      )}
      {accueilDisplayedLines.length === accueilLines.length && (
        <button style={styles.stressShortcut} onClick={openITAssessment} type="button">
          💻 Évaluer mes besoins
        </button>
      )}
    </div>
  );

  const rdvContent = (
    <div style={styles.rdvBox}>
      <div style={{ ...styles.chatBox, marginBottom: 0 }}>
        {rdvMessages.map((m, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              backgroundColor: m.sender === "bot" ? "#ecfdf5" : "#d1fae5",
              alignSelf: m.sender === "bot" ? "flex-start" : "flex-end",
            }}
          >
            {m.text}
          </div>
        ))}
        {loading && <div style={styles.message}>✍️...</div>}
      </div>
      {!loading && currentKey && (
        <form onSubmit={handleRdvSubmit} style={styles.form}>
          {questionFlow[currentKey].type === "select" ? (
            <select
              style={styles.select}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
              ref={inputRef}
            >
              <option value="">-- Choisissez --</option>
              {questionFlow[currentKey].options.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <input
              style={styles.input}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Votre réponse..."
              required
              ref={inputRef}
            />
          )}
          <button style={styles.button} type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );

  const iaContent = (
    <div style={styles.chatBox} ref={iaChatRef}>
      {iaMessages.map((m, i) => (
        <div
          key={i}
          style={{
            ...styles.message,
            backgroundColor: m.sender === "bot" ? "#ecfdf5" : "#d1fae5",
            alignSelf: m.sender === "bot" ? "flex-start" : "flex-end",
          }}
        >
          {m.text}
        </div>
      ))}
      {iaLoading && <div style={styles.message}>✍️...</div>}
      {!iaLoading && (
        <form onSubmit={handleIaSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            value={iaInput}
            onChange={(e) => setIaInput(e.target.value)}
            placeholder="Tapez un numéro, un mot-clé ou votre question..."
            required
            ref={iaInputRef}
          />
          <button style={styles.button} type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );

  return (
    <>
      <button onClick={handleToggle} style={styles.chatButton}>
        {open ? "×" : "💬"}
      </button>
      {open && (
        <div style={styles.container}>
          <div style={styles.header}>ASSISTANCE VIRTUELLE</div>
          <div style={{ flex: 1, minHeight: 200, background: "#f9fafb", display: "flex", flexDirection: "column" }}>
            <div
              style={{ flex: 1, overflow: "auto" }}
              ref={tab === "accueil" ? accueilScrollRef : tab === "rdv" ? chatRef : null}
            >
              {tab === "accueil" && accueilContent}
              {tab === "ia" && iaContent}
              {tab === "rdv" && rdvContent}
            </div>
            <div style={styles.tabBar}>
              <button
                style={{ ...styles.tabButton, ...(tab === "accueil" ? styles.tabButtonActive : {}) }}
                onClick={() => setTab("accueil")}
              >
                Accueil
              </button>
              <button
                style={{ ...styles.tabButton, ...(tab === "ia" ? styles.tabButtonActive : {}) }}
                onClick={() => setTab("ia")}
              >
                Conversation IA
              </button>
              <button
                style={{ ...styles.tabButton, ...(tab === "rdv" ? styles.tabButtonActive : {}) }}
                onClick={() => setTab("rdv")}
              >
                Prendre RDV
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
