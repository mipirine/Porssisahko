import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

 function App() {
  const [data, setData] = useState([]);

    useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  }, []); 
  
 console.log('data: ', data);

 const options = {
  title: "Pörssisähkön hinta, 7vrk [c/kWh]",
  width: 1600,
  height: 800,
  bar: { groupWidth: "95%" },
  legend: { position: "none" },
}; 

  return ( 
    (data === undefined? 
    <div>Loading...</div> :
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  ))
} 

export default App;