import React from 'react';
import classes from './Post.module.scss'
import styles from './MyButton/MyButton.module.scss'
import MyButton from "./MyButton/MyButton";
import {iconTypes} from "./constants/icons";
import DoneButton from "./MyButton/DoneButton";
const PostItem = ({completeTodo,post,...props}) => {

    return (
        <div className={classes.post} id={props.number}>

            <DoneButton onClick={() => completeTodo(post.id)} className={post.isComplete ? `${styles.DoneButton} done` : `${styles.DoneButton} row`} iconType={iconTypes.checkmark}/>
            <div className={post.isComplete ? 'done' : 'row'} >
                <strong>{props.number}. {post.title}</strong>
                <div>
                    {post.id}
                    {post.description}
                </div>
            </div>
            <div className={classes.deleteBtn}>
                <MyButton onClick={()=> props.remove(post)} className={styles.myBtn} iconType={iconTypes.minus}>delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;