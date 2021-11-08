import { useState } from "react"

const bgc = ['purple','blue','green','yellow','orange','red']

function ChangedLikeButton() {
    const [likes, setLikes] = useState({likes:0, bgc:bgc[0]});


    const Like = () => {
        setLikes({likes:likes.likes += 1, bgc:likes.bgc})
        setLikes({likes: likes.likes, bgc:bgc[likes.likes%bgc.length]})
    }

    return(

        <button style={{backgroundColor: likes.bgc}} className="btn m-2 border border-dark" onClick={Like}>{likes.likes} Likes</button>

    )
}

export default ChangedLikeButton