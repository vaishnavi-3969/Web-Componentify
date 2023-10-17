import React from "react"
import DropdownMenu from "../components/DropDownMenu/DropDownMenu";

export const DropDownMenuPage = () => {
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];
      const handleSelect = (selectedOption) => {
        console.log('Selected option:', selectedOption);
      };
    
    return (
      
        <>
         <div>
      <h1>Dropdown Menu</h1>
      <DropdownMenu options={options} onSelect={handleSelect} />
    </div>
        </>
    )
}