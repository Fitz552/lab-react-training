function Rating(props) {
    let ratings = []
    for (let i= 0; i<=4; i++) {
        if (i+1<=Math.round(props.children)){
            ratings.push(1)
        }
        else ratings.push(0)
    }

    return (
        <div>
            {ratings.map((rating, index) => {
                if (rating === 0) {
                    return <i className="far fa-star" key={index}></i>
                }
                else return <i className="fas fa-star" key={index}></i>
            })}
            
        </div>
    )
}

export default Rating