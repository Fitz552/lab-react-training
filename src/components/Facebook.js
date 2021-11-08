import profiles from "../data/berlin.json"
import {useState} from "react"

function FaceBook() {

    let countries = []
    profiles.map(profile => {
        if (countries.indexOf(profile.country) === -1 ) {
            countries.push(profile.country)}
        return profile
    })

    const [activeCountries, setActiveCountries] = useState([])

    const buttonClick = event => {
        let currentState = [...activeCountries]
        if (currentState.indexOf(event.target.innerHTML) === -1) {
            currentState.push(event.target.innerHTML)
            } 
        else {
            currentState = currentState.filter(country=>{
                return (country!== event.target.innerHTML)})
        }

        setActiveCountries(currentState)
    }

    return (
        <div>
            <div style = {{width: "80%"}}>
                {countries.map((country, index) => {
                    return (
                        <button onClick={buttonClick} className = {activeCountries.indexOf(country)===-1?"btn-white m-2":"btn-primary m-2"} key={index}>{country}</button>
                    )
                })}
            </div>
            <div>
                {profiles.map((profile,index) => {
                    return (
                        <div className = {activeCountries.indexOf(profile.country)===-1? "row m-2 border border-dark bg-light" : "row m-2 border border-dark bg-info"} style = {{width: "80%"}} key={index}>
                            <img src={profile.img} style = {{width: "150px"}} alt={profile.firstName}/>
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