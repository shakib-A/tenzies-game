import React from 'react'

const Heading = () => {
  return (
    <div className={`text-center`}>
        <h1 className={`text-2xl font-bold`}>Tenzies</h1>
        <h4 className={`text-md`}>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h4>
    </div>
  )
}

export default Heading