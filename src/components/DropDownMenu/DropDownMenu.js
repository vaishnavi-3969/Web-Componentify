import React, { useState } from 'react';
import './DropdownMenu.css';

const DropdownMenu = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    closeDropdown();
  };
 
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="selected-option" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : 'Select an option'}
      </div>
      {isDropdownOpen && (
        <ul className="options-list">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;