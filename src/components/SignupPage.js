import {useState} from "react"


function SignupPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nationality, setNationality] = useState("de")
    const [display, setDisplay] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplay(true)
        
    }

    const handleChange = (event) => {
        console.log(event)
        switch(event.target.name) {
            case("email"):
                setEmail(event.target.value);
                break;
            case("password"):
                setPassword(event.target.value);
                break;
            case("nationality"):
                setNationality(event.target.value);
                break;
            default: break;
        }
    }

    const greetingSwitch = (nationality) => {
        switch(nationality) {
            case("de"): 
                return "Hallo";
            case("en"): 
                return "Hello";
            case("fr"): 
                return "Bonjour";
            default: break;
        } 

    }

    return (
        <div>
            <form className="form-group col-6 m-2" onSubmit={handleSubmit}>
                <label htmlFor="emailInput">Email</label>
                <input value= {email} type="email" name = "email" className="form-control m-2" id = "emailInput" placeholder="johndoe@ironhack.com" onChange={handleChange} required></input>
                <label htmlFor="passwordInput">Password</label>
                <input value = {password} type="password" name = "password" className="form-control m-2" id = "passwordInput" placeholder="Enter your Password" onChange={handleChange} required></input>
                <label htmlFor="nationalityInput">Nationality</label>
                <select value = {nationality} name = "nationality" className="form-control m-2" id = "nationalityInput" onChange={handleChange}> 
                    <option value="de">German</option>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                </select>
                <button type="submit" className="btn btn-primary m-2" >Submit</button>
            </form>
            <hr/>
            <div>
                    {display &&(
                        <div>
                            <p>
                                {greetingSwitch(nationality)}
                                
                            </p>

                            <p> Your email address is: {email}</p>
                            <p> Your email address is correct</p>
                        </div>   )
                    }
                
            </div>

        </div>
    )
}

export default SignupPage