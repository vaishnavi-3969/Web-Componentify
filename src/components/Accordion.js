import React, { useState } from 'react';
import "./Accordion.css";
import Expand from '../assets/expand_more.png'
export default function Accordion({items}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="accordion">
    {items.map((item, index) => (
      <div key={index} className="accordion-item">
        <div
          className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          {item.title}
          <img
            className={`expand ${activeIndex === index ? 'rotate' : ''}`}
            src={Expand}
            alt="expand"
          />
        </div>
        {activeIndex === index && (
          <div className="accordion-content">{item.content}</div>
        )}
      </div>
    ))}
  </div>
  );
}
