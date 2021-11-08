import { useState } from "react"

const bgc = ['purple','blue','green','yellow','orange','red']

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [background, setBackground] = useState(bgc[0])


    const Like = () => {
        setLikes(likes+1) 
        setBackground(bgc[likes%bgc.length])
    }

    return(

        <button style={{backgroundColor: background}} className="btn m-2 border border-dark" onClick={Like}>{likes} Likes</button>

    )
}

export default LikeButton