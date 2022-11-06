import React, {useState} from "react"
import Comments from "./Comments"

function VideoDetails({video}) {

    const [likeButton, setLikeButton] = useState(video.upvotes)
    const [DislikeButton, setDislikeButton] = useState(video.downvotes)
    const [displayComments, setDisplayComments] = useState(true)

    const handleCommentsDisplay = () => {
        return setDisplayComments(!displayComments)
    }

    const handleLikesClick = () => {
        setLikeButton(likeButton + 1)
        console.log(likeButton)
    }

    const handleDislikeClick = () => {
        setDislikeButton(DislikeButton + 1)
        console.log(DislikeButton)
    }


    const renderComments = video.comments.map((commentObj) => {
        return (
            <Comments comments={commentObj}/>
        )
    })

    return (
        <>
            <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />
            <h2>{video.title}</h2>
            <p>{video.views} views | Uploaded {video.createdAt}</p>
            <button onClick={handleLikesClick}>{likeButton} 👍</button>
            <button onClick={handleDislikeClick} >{DislikeButton} 👎</button>
            <br/>
            <br/>
            <button onClick={handleCommentsDisplay}>Hide Comments</button>
            <hr/>
            <h3>2 Comments</h3>
            {displayComments ? renderComments : <></>}
        </>

    )
}

export default VideoDetails