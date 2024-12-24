import React from "react";

const ResultDisplay = ({ results }) => {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "20px auto",
        background: "linear-gradient(135deg, #12192c, #1e2a4a)",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#00d4ff" }}>Результаты:</h2>
      {results.length === 0 ? (
        <p>Совпадений не найдено.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {results.map((result, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                margin: "10px 0",
                borderRadius: "5px",
                backgroundColor: "#1e2a4a",
                border: "1px solid #00d4ff",
              }}
            >
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResultDisplay;
