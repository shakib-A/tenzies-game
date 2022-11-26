import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.clickHandler} className={`px-8 py-4 bg-purple-600 text-white font-bold tracking-wider rounded-md`}>{props.isWin ? 'New Game' : 'Roll'}</button>
  )
}

export default Button