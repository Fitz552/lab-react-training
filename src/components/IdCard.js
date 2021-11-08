function IdCard(props) {
    return (
        <div class="row m-2 justify-content-start border border-dark">
            <img class = "col-2" scr = {props.picture} alt={props.name}/>
            <div class = "col-9">
                <p><b>First Name:</b> {props.firstName}</p>
                <p><b>Last Name:</b> {props.lastName}</p>
                <p><b>Gender:</b> {props.gender}</p>
                <p><b>Height:</b> {props.height}</p>
                <p><b>Height:</b> {props.birth}</p>
            </div>
        </div>
    )
}

export  default IdCard