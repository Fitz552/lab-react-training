function DriverCard(props) {
    let ratings = []
    for (let i= 0; i<=4; i++) {
        if (i+1<=Math.round(props.rating)){
            ratings.push(1)
        }
        else ratings.push(0)
    }

    return( 
        <div className="row rounded bg-primary m-2 p-2 justify-content-md-center" align="center">
            <div className="col" align="end">
                <img style = {{width: "150px", height: "150px"}} className="rounded-circle" src = {props.img} alt = "Driver profile"/>
            </div>
            <div id="lastTry" className="col" align="start" >    
                <p className="text-white m-0">{props.name}</p>
                <p className="text-white m-0">
                    {ratings.map((rating, index) => {
                        if (rating === 0) {
                            return <i className="far fa-star" key={index}></i>
                        }
                        else return <i className="fas fa-star" key={index}></i>
                    })}
                </p>
                <p className="text-white m-0">{props.car.model} - {props.car.licensePlate}</p>
                
            </div>
        </div>
    )

}

export default DriverCard