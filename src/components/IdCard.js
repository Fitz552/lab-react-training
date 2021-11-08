function IdCard(props) {
    return (
        <div className="row m-2 justify-content-start border border-dark">
            <img className = "col-2" src = {props.picture} alt={props.name}/>
            <div className = "col-9">
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