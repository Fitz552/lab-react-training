import {useState} from "react"
import SingleColorPicker from "./SingleColorPicker";

function RGBColorPicker() {
    const [color, setColor] = useState({rValue:0, gValue:0, bValue:0});

    const updateColor = (event) => {
        switch(event.target.name) {
            case("r"):
                setColor({...color, rValue: event.target.value})
                break;
            case("g"):
                setColor({...color, gValue: event.target.value})
                break;
            case("b"):
                setColor({...color, bValue: event.target.value})
                break;
            default: break;
        }
    }

    return (
        <div>
            <SingleColorPicker color="r" value={color.rValue} onChange={updateColor}/>
            <SingleColorPicker color="g" value={color.gValue} onChange={updateColor}/>
            <SingleColorPicker color="b" value={color.bValue} onChange={updateColor}/>
            <div className="row m-2">
                <div className="col-1 m-2" style={{backgroundColor:`rgb(${color.rValue},${color.gValue},${color.bValue})`, width:"20px"}}></div>
                <p class = "col"> {`rgb(${color.rValue},${color.gValue},${color.bValue})`} </p>
            </div>
        </div>
    )
}

export default RGBColorPicker