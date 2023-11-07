// Import necessary React components and styling
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Accordion.css';
import Expand from './expand_more.png';

// Individual Accordion Item component
const AccordionItem = ({ item, index, isActive, onClick }) => {
  // Destructure title and content from item
  const { title, content } = item;

  return (
    // Use Framer Motion for layout animation
    <motion.div className='accordion-item' layout>
      {/* Title section with onClick handler */}
      <motion.div
        className={`accordion-title ${isActive ? 'active' : ''}`}
        onClick={() => onClick(index)}
      >
        {title}
        {/* Expand icon with rotation animation */}
        <motion.img
          className={`expand ${isActive ? 'rotate' : ''}`}
          src={Expand}
          alt='expand'
          initial={false}
        />
      </motion.div>
      {/* AnimatePresence for handling enter/exit animations */}
      <AnimatePresence>
        {/* Container for content with background color animation */}
        <motion.div
          key={index}
          initial={false}
          animate={{ backgroundColor: isActive ? '#f1f1f1' : '#fff' }}
        >
          <AnimatePresence>
            {/* Content animation when item is active */}
            {isActive && (
              <motion.div
                key='content'
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {/* Actual content of the accordion item */}
                <div className='accordion-content'>{content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

// Main Accordion component that maps over items
const Accordion = ({ items }) => {
  // State to track the active index
  const [activeIndex, setActiveIndex] = useState(null);

  // Handle click to toggle active index
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    // Container for the entire accordion
    <div className='accordion'>
      {/* Map over items and render AccordionItem for each */}
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          index={index}
          isActive={activeIndex === index}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

// Export the Accordion component as the default export
export default Accordion;
