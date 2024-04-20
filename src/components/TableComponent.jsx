import React, {useState, useEffect} from 'react'
import { Chart } from "react-google-charts";
import Spinner from './Spinner'

function TableComponent({selectedValue}) {
  
  const [data, setData] = useState([{}]);
    useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`../../api/message?inputValue=${selectedValue}`)).json();
      setData(text);
    })();
  }, [selectedValue]); 
  
console.log('data: ', data);

 const options = {
  title: "Pörssisähkön hinta, 7vrk [c/kWh]",
  width: 1600,
  height: 800,
  bar: { groupWidth: "95%" },
  legend: { position: "right" },
};   
    return (
    <div>
        
      {(data === undefined) ? 
    <Spinner /> :
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={data}
     // options={options}
    />}
    </div>
  )
}

export default TableComponent
