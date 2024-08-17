import React from 'react';


const getPost = async(id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}
const PostDetails = async({params}) => {
    // console.log(params);
    const post = await getPost(params.id)
    return (
        <div>
            post details of {post.title}
        </div>
    );
};

export default PostDetails;