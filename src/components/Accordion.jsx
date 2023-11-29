import React, { useState } from "react";
import "../App.css";
export const Accordion = ({ dataList }) => {
  const [isActive, setIsActive] = useState(false);
  const [activeId, setActiveId] = useState(0);

  const handleClick = (id) => {
    setActiveId(id === activeId ? "" : id);
  };
  return dataList.map(({ id, title, description }) => (
    <div className="accordion-item" key={id}>
      <div className="accordion-title" onClick={() => handleClick(id)}>
        <div>{title}</div>
        <div>{activeId === id ? "▲" : "▼"}</div>
      </div>
      {activeId === id && (
        <div className="accordion-content">
          <p>{description}</p>
        </div>
      )}
    </div>
  ));
};
