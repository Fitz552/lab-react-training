function toHex(component) {
    let hex = component.toString(16);
    if (hex.length === 2) {
        return hex
     }
     else return ("0"+hex)
}

function BoxColor(props) {
    const boxStyle =  {backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}
    //const hexString = `#${toHex({props.r})}${toHex({props.g})}${toHex({props.b})}`

    return (
        <div className= "m-2 text-center border border-dark" style = {boxStyle}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>#{toHex(props.r)}{toHex(props.g)}{toHex(props.b)}</p>
        </div>
    )

}

export default BoxColor