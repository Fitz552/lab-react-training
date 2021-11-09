import { useState } from "react"

const bgc = ['purple','blue','green','yellow','orange','red']

function LikeButton() {
    const [likes, setLikes] = useState(0);


    const Like = () => {
        setLikes(likes+1) 
    }

    return(

        <button style={{backgroundColor: bgc[likes % bgc.length]}} className="btn m-2 border border-dark" onClick={Like}>{likes} Likes</button>

    )
}

export default LikeButton