import visa from "../img/visa.png"
import mastercard from "../img/master-card.svg"

function CreditCard(props) {
    const nonRedacted = props.number.slice(props.number.length-4)
    const style = {backgroundColor: props.bgColor , color: props.color, width: "30%"}

    return (
    <div style={style} class="p-2 m-2">
        <div class="logoHolder">
            <img class="img-thumbnail float-right logo" src = {props.type === "Visa" ? visa : mastercard} alt="Credit card company logo"/>
        </div>
        <div class = "text">
            <p class="h4">xxxx xxxx xxxx {nonRedacted}</p>
        </div>
        <div class = "row">
            <p class="col">Expires {props.expirationMonth > 9 ? props.expirationMonth: "0"+props.expirationMonth}/{props.expirationYear.toString().slice(2)}</p>
            <p class="col">{props.bank}</p>
        </div>
        <div>
            <p>{props.owner}</p>
        </div>
    </div>
    )

}

export default CreditCard