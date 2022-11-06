function Comments({comments}) {
    return (
        <div>
            <h4>{comments.user}</h4>
            <p>{comments.comment}</p>
        </div>
    )
}

export default Comments