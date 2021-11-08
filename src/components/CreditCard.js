import visa from "../img/visa.png"
import mastercard from "../img/master-card.svg"

function CreditCard(props) {
    const nonRedacted = props.number.slice(props.number.length-4)
    const style = {backgroundColor: props.bgColor , color: props.color, width: "30%"}

    return (
    <div style={style} className="p-2 m-2">
        <div className="logoHolder">
            <img className="img-thumbnail float-right logo" src = {props.type === "Visa" ? visa : mastercard} alt="Credit card company logo"/>
        </div>
        <div className = "text">
            <p className="h4">xxxx xxxx xxxx {nonRedacted}</p>
        </div>
        <div className = "row">
            <p className="col">Expires {props.expirationMonth > 9 ? props.expirationMonth: "0"+props.expirationMonth}/{props.expirationYear.toString().slice(2)}</p>
            <p className="col">{props.bank}</p>
        </div>
        <div>
            <p>{props.owner}</p>
        </div>
    </div>
    )

}

export default CreditCard