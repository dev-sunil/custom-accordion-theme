import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      <h2 style={{ color: "var(--accordion-text)" }}>React FAQ Accordion</h2>
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            className={`accordion-item ${isActive ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <h3 className="accordion-title">
              {item.title}
              <span className={`arrow ${isActive ? "open" : ""}`}>▼</span>
            </h3>
            <div className={`accordion-content ${isActive ? "" : "collapsed"}`}>
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
