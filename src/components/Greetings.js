function chooseLanguage(lang) {
    switch(lang) {
        case("en"):
            return"Hello "
        case("es"): 
            return"Hola "
        case("fr"):
            return"Hola "
        case("de"):
            return"Hallo "
        default:
            return "Olá "
    }
}


function Greetings(props) {

    return (
        <div class = "m-2 border border-dark">
            <p class="h5">
                {chooseLanguage(props.lang)} {props.children}       
            </p>
        </div>
    )
}

export default Greetings