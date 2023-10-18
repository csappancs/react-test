import React from 'react'

export default function Hero() {
  const welcome = "Welcome on my site"; 

  const onClickEvent = (name, e) => {
    console.log("Button clicked " + name, e.target);
  }


  return (
    <div className='herocont'>
        <div className='herotitle'>
            <h1>{ welcome }</h1>
        </div>
        <div className='herosubtitle'>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, odit?</h3>
        </div>
        <button className='hero-button' onClick={(e) => onClickEvent("Ádám", e)}>
            Nyomd meg most!!!
        </button>
    </div>
  )
}
