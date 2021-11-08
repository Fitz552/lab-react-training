import {useState} from 'react'
import clickedImg from "../img/persons/maxence-glasses.png"
import notClicked from "../img/persons/maxence.png"

function ClickablePicture() {

    const [clicked, setClicked] = useState(false);

    const clickPicture = () => {
        setClicked(!clicked)
    }

    return (
        <img style={{width:"150px"}} onClick = {clickPicture} src = {clicked ? clickedImg : notClicked }/>
        
    )


}

export default ClickablePicture