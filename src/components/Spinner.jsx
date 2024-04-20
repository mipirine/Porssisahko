import React from 'react'
import spinner from './layout/assets/spinner.gif'

function Spinner() {
    console.log('spinner')
  return (
    <div>
        <img
        src={spinner}
        width={180}
        alt="Loading..."
        />    
        
    </div>
  )
}

export default Spinner