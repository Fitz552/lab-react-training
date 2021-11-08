import {useState} from "react"

function Carousel(props) {

    const [position, setPosition] = useState(0)
    const leftClick = () => {
        if (position > 0) {
            setPosition(position-1)
        }
        else setPosition(props.imgs.length-1)
    }

    const rightClick = () => {
        if (position < props.imgs.length-1) {
            setPosition(position+1)
        }
        else setPosition(0)
    }

    return (
        <div>
            <button onClick={leftClick}>Left</button>
            <img src={props.imgs[position]}/>
            <button onClick={rightClick}>Right</button>
        </div>
    )


}

export default Carousel