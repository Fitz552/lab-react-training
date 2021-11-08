function NumbersTable(props) {
    let numbers = []
    for (let i=0; i<props.limit; i++) {
        numbers.push(i+1)
    }

    return (
        <div className="row m-2" style={{width:"50%"}}>
            {numbers.map((number, index)=>{
                let bgc = ""
                if (number%2===0) {
                    bgc = "white"
                }
                else {
                    bgc = "red"
                }
                return <div style={{backgroundColor:bgc, height: "50px"}} className="col-2 border border-dark textBox" key={index}>{number}</div>
            }
            )}
        </div>
    )
}

export default NumbersTable