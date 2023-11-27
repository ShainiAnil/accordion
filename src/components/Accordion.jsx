import React, { useState } from 'react';

 export const Accordion = ({ title, description }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '▲' : '▼'}</div>
      </div>
      {isActive && <div className="accordion-content"><p>{description}</p></div>}
    </div>
  );
};

