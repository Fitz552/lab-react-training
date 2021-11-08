function calculateRandom (min, max) {
    return Math.floor(Math.random()*max+min)
}

function Random(props) {
    return (
        <div class="m-2 border border-dark">
            <p>
                Random value between {props.min} and {props.max} = {calculateRandom(props.min,props.max)}
            </p>
        </div>
    )
}

export default Random