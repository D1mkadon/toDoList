import React from 'react';
import classes from './Post.module.scss'
import styles from './MyButton.module.scss'
import MyButton from "./MyButton";
const PostItem = (props) => {
    return (
        <div className={classes.post}>
            <input type="checkbox" className={classes.checkbox}/>
            <div>
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.description}
                </div>
            </div>
            <div className={classes.deleteBtn}>
                <MyButton  className={styles.myBtn}>delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;