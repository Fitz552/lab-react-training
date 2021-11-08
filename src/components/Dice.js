import {useState} from "react"
import diceEmpty from "../img/dice-empty.png"
import dice1 from "../img/dice1.png"
import dice2 from "../img/dice2.png"
import dice3 from "../img/dice3.png"
import dice4 from "../img/dice4.png"
import dice5 from "../img/dice5.png"
import dice6 from "../img/dice6.png"

const dices = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6]


function Dice() {
    const [number , setNumber] = useState(Math.floor(Math.random()*6+1))
    const diceClick = () => {
        setNumber(0);
        setTimeout(() => setNumber(Math.floor(Math.random()*6+1)),1000)
    }


    return (
        <div>
            <img style = {{width: "100px"}} src = {dices[number]} onClick = {diceClick}/>
        </div>
    )

}

export default Dice