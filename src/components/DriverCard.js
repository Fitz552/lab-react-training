function DriverCard(props) {
    let ratings = []
    for (let i= 0; i<=4; i++) {
        if (i+1<=Math.round(props.rating)){
            ratings.push(1)
        }
        else ratings.push(0)
    }

    return( 
        <div class="row rounded bg-primary m-2 p-2 justify-content-md-center" align="center">
            <div class="col" align="end">
                <img style = {{width: "150px", height: "150px"}} class="rounded-circle" src = {props.img} alt = "Driver profile"/>
            </div>
            <div id="lastTry" class="col" align="start" >    
                <p class="text-white m-0">{props.name}</p>
                <p class="text-white m-0">
                    {ratings.map((rating) => {
                        if (rating === 0) {
                            return <i class="far fa-star"></i>
                        }
                        else return <i class="fas fa-star"></i>
                    })}
                </p>
                <p class="text-white m-0">{props.car.model} - {props.car.licensePlate}</p>
                
            </div>
        </div>
    )

}

export default DriverCard