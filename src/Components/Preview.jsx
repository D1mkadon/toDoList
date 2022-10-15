import React, {useState} from 'react';
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import PostList from "./PostList";
import classes from "./MyButton.module.scss";

const Preview = () => {
    const [posts,setPosts] = useState(
      [

        ])
    const [title, setTitle] = useState( '')
    const [description, setDescription] = useState( '')
    const addNewPost = (e) =>{
        e.preventDefault()
        console.log(title)
        const newPost ={
            id: Date.now(),
            title, description
        }
        setPosts([...posts, newPost])
        setTitle("")
        setDescription("")
        console.log(newPost)
    }
    return (
        <div className={"Preview"}>
            <form >
            <MyInput
                value={title}
                onChange={e => setTitle(e.target.value)}
                type='text'
                placeholder='what to do'/>
            <MyInput
                value={description}
                onChange={e => setDescription(e.target.value)}
                type='text'
                placeholder='description'/>
            <MyButton type='submit' onClick={addNewPost} className={classes.myBtn}>Create</MyButton>
            </form>
            <PostList posts={posts}/>
        </div>
    );
};

export default Preview;