import React from "react";
import Confetti from 'react-confetti'

import Heading from './components/Heading'
import Rolls from './components/Rolls'
import Button from './components/Button'

export default function App() {

    const [dices, setDices] = React.useState(allNewDice())
    const[isWin, setIsWin] = React.useState(false)

    React.useEffect(() => {
        const FirstValue = dices[0].value
        const allHeld = dices.every(dice => dice.isHeld)
        const allSame = dices.every(dice => dice.value === FirstValue)
        if(allHeld && allSame) {
            setIsWin(true)
        } else {
            setIsWin(false)
        }
    },[dices])

     function allNewDice() {
        const newDices = []
        for(let i = 0; i < 10; i++) {
            const randomDice = Math.ceil(Math.random() * 6)
            const newDiceObject = {value: randomDice, isHeld: false, id: i}
            newDices.push(newDiceObject)
        }
        return newDices
    }

    function rollButton() {
        if(!isWin) {
                setDices(oldDices => oldDices.map(dice => {
                    return dice.isHeld ?
                        dice :
                        {...dice, value: Math.ceil(Math.random() * 6)}
                }))
        } else {
            setDices(allNewDice())
            setIsWin(false)
        }
    }

    function holdDice(id) {
       setDices(oldDices => oldDices.map(dice => {
        return  dice.id === id ?
                {...dice, isHeld: !dice.isHeld} :
                dice
       }))
    }

    const rolls = dices.map((dice, index) => {
        return <Rolls key={index} id={dice.id} isHeld={dice.isHeld} value={dice.value} clickHandler={holdDice} />
    })

    return (
        <main className={`flex justify-evenly items-center flex-col w-2/3 max-w-2xl h-2/3 rounded-lg bg-white text-black p-4`}>
            <Heading />
            {isWin && <Confetti numberOfPieces={400}/>}
            <div className={`grid grid-cols-5 grid-rows-2 gap-4`}>
                {rolls}
            </div>
            <Button clickHandler={rollButton} isWin={isWin} />
        </main>
    )
}