import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";
import "./styles.css";
import { mockAccordionItems } from "./mockData";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div style={{ padding: "40px" }}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="theme-toggle-btn"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <Accordion items={mockAccordionItems} />
    </div>
  );
};

export default App;
