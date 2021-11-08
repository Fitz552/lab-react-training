function chooseLanguage(lang) {
    switch(lang) {
        case("en"):
            return"Hello "
        case("es"): 
            return"Hola "
        case("fr"):
            return"Bonjour "
        case("de"):
            return"Hallo "
        default:
            return "Olá "
    }
}


function Greetings(props) {

    return (
        <div className = "m-2 border border-dark">
            <p className="h5">
                {chooseLanguage(props.lang)} {props.children}       
            </p>
        </div>
    )
}

export default Greetings