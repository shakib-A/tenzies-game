import React from 'react'

const Rolls = (props) => {

  return (
      <button onClick={() => props.clickHandler(props.id)} className={`${props.isHeld ? "bg-green-500" : "bg-gray-300"} shadow-sm w-8 h-8 rounded-md font-bold sm:w-12 sm:h-12 sm:text-xl`}>{props.value}</button>
  )
}

export default Rolls