import profiles from "../data/berlin.json"

function FaceBook() {

    let countries = []
    profiles.map(profile => {
        if (countries.indexOf(profile.country) === -1 ) {
            countries.push(profile.country)}
    })



    return (
        <div>
            <div style = {{width: "80%"}}>
                {countries.map((country, index) => {
                    return (
                        <button className = "btn-white m-2" key={index}>{country}</button>
                    )
                })}
            </div>
            <div>
                {profiles.map((profile,index) => {
                    return (
                        <div className = "row m-2 border border-dark" style = {{width: "80%"}} key={index}>
                            <img src={profile.img} style = {{width: "150px"}}/>
                            <div className = "col">
                                <p><b>First Name: </b> {profile.firstName}</p>
                                <p><b>Last Name: </b> {profile.lastName}</p>
                                <p><b>Country: </b> {profile.country}</p>
                                <p><b>Type: </b> {profile.isStudent?"Student":"Teacher"}</p>
                            </div>
    
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default FaceBook