import React, {useState} from 'react';
import PostList from "./PostList";
import PostForm from "./PostForm";

const Preview = () => {
    const [posts,setPosts] = useState([])


    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
    }
    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const completeTodo = (id) => {
        const updatedTodos = posts.map(post =>{
            if (post.id === id){
                post.isComplete = !post.isComplete
            }
            return post
        })
        setPosts(updatedTodos)
    }

    return (
        <div className={"Preview"}>
            <PostForm create={createPost}/>
            {posts.length !== 0
                ? <PostList completeTodo={completeTodo} remove={removePost} posts={posts}/>
            : <div style={{
                textAlign: 'center',
                    margin: '10vh 0',
                    color: "white"
                }}> list is empty</div>
            }
        </div>
    );
};

export default Preview;