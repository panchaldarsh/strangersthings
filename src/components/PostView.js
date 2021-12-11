import React from "react"
import { PostSingle } from "."
import { useNavigate } from "react-router"
const PostView = ({posts, token}) => {
    const navigate = useNavigate()
    console.log("is there a token ", token.length > 0)
    return <>
        <h2>Posts</h2>
        {/* add link to Add Post Form */}
        <div>
            {
                posts.map(post => <PostSingle key={post._id} post={post}>
                    {
                        token.length > 0 ?
                             post.isAuthor ? <button> {/* add OnClick that should go to view post with edit and delete buttons*/}View </button> :
                            <button onClick={ () => {navigate('/posts/message/' + post._id )}}> Send Message </button>
                        : 'No Button'
                    }
                    </PostSingle>)
            }
        </div>
    </>
}

export default PostView