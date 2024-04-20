import React from 'react'

function About() {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Pörssisähkö -sovellus</h1>
      <p className='mb-4 text-2xl font-light'>Tällä sovelluksella voit tarkastella sähkön pörssihintoja 1 - 7 tai 31 vrk jaksoissa.</p>
      <p>Valitun jakson ajalta näytetään kallein ja halvin tunti.</p>

      <p>Hinnat on koottu sahkotin.fi:n tarjoamasta API:sta.</p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-black'>1.0.0</span>
      </p>
    </div>
  )
}

export default About
