import React, { useEffect, useState } from "react";

function App() {
  const [statusBackend, setStatusBackend] = useState(
    "Conectando com o Backend...",
  );

  useEffect(() => {
    // Consome a rota do Node através do Proxy do Nginx (/api)
    fetch("/api/status")
      .then((res) => res.json())
      .then((data) => setStatusBackend(data.mensagem))
      .catch(() =>
        setStatusBackend(
          "Erro crítico: Não foi possível alcançar a API via Nginx.",
        ),
      );
  }, []);

  return (
    <div
      style={{ padding: "40px", fontFamily: "sans-serif", textAlign: "center" }}
    >
      <h1>🚀 Bem-vindo ao JobBR</h1>
      <p>A estrutura inicial do Frontend em React está 100% ativa!</p>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          background: "#f0f0f0",
          borderRadius: "8px",
          display: "inline-block",
        }}
      >
        <strong>Status da Integração via Proxy Reverso (Nginx):</strong>
        <p
          style={{
            color: statusBackend.includes("Erro") ? "red" : "green",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          {statusBackend}
        </p>
      </div>
    </div>
  );
}

export default App;
