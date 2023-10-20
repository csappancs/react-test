import React, { useState } from 'react'

export default function Jatszos() {

    const [count, setCount] = useState(4);

    function handleMinusClick() {
        setCount(prevCount => prevCount - 1);
    }

    function handlePlusClick() {
        setCount(prevCount => prevCount + 1);
    }  

  return (
    <div className='calculator'>
        <button onClick={handleMinusClick}>-</button>
        <h1>{ count }</h1>
        <button onClick={handlePlusClick}>+</button>
    </div>
  )
}
