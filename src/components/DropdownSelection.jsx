import React, { useState } from 'react';

function DropdownSelection({ options, onSelect }) {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSelectionChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedOption(selectedValue);
      onSelect(selectedValue);
    };
  
    return (
      <select value={selectedOption} onChange={handleSelectionChange}>
        <option value="">Valtse monenko vrk jaksoa haluat tarkastella</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    );
  }
  export default DropdownSelection;