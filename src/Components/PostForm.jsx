import React, {useState} from 'react';
import MyInput from "./MyInput/MyInput";
import MyButton from "./MyButton/MyButton";
import classes from "./MyButton/MyButton.module.scss";
import {iconTypes} from "./constants/icons";


const PostForm = ({create}) => {
    const [post, setPost] = useState( {
        title: '',
        description: ''})
    const addNewPost = (e) =>{
        e.preventDefault()
        const newPost ={
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', description: ''})}

    return (
            <form >
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type='text'
                    placeholder='what to do'/>
                <MyInput
                    value={post.description}
                    onChange={e => setPost({...post, description: e.target.value})}
                    type='text'
                    placeholder='description'/>
                <MyButton type='submit' onClick={addNewPost} className={classes.myBtn} iconType={iconTypes.plus}>Create</MyButton>
            </form>

    );
};

export default PostForm;