function SingleColorPicker(props) {

    let bgcString = (color) =>{
        switch(color) {
            case('r'):
                return "rgb(255,0,0)"
            case('g'):
                return "rgb(0,255,0)"
            case("b"):
                return "rgb(0,0,255)"
            default: break;
    }}

    return (
        
        <div className="row m-2">
            <div className="col-1 m-2" style={{backgroundColor:bgcString(props.color), width:"20px"}}></div>
            <label className="col-1 m-2" style={{width:"10px"}} htmlFor = "colorInput">{props.color.toUpperCase()}</label>
            <input className="col-1 m-2" id="colorInput" type="number" value={props.value} name={props.color} onChange={props.onChange}/> 
        </div>
    )
}

export default SingleColorPicker;