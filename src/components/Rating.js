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
            {ratings.map((rating) => {
                if (rating === 0) {
                    return <i class="far fa-star"></i>
                }
                else return <i class="fas fa-star"></i>
            })}
            
        </div>
    )
}

export default Rating