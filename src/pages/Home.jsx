import React, {useState} from 'react'
import DropdownSelection from '../components/DropdownSelection';
import TableComponent from '../components/TableComponent';
import figure from '../components/layout/assets/sahko_pistoke.jpg';

function Home() {
    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '31', label: '31' }
      ];
      const [selectedValue, setSelectedValue] = useState('7');
      const handleSelection = (value) => {
        setSelectedValue(value)
      };
      
  return (
    <div>
        <img src={figure} alt="Image" className='w-1/12 h-auto' />
        
        <h1 className='text-6xl text-black-400 font-bold'>Pörssisähkön hinta</h1>
        <DropdownSelection options={options} onSelect={handleSelection} selectedValue={selectedValue}/>
        <TableComponent selectedValue={selectedValue} /> 
    </div>
  )
}

export default Home
