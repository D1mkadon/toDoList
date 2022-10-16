import React from 'react';
import PostItem from "./PostItem";
import classes from './Post.module.scss'
const PostList = ({posts, title, remove, completeTodo}) => {
    return (
        <div className={classes.PostList}>
            <h1>{title}</h1>
            {posts.map((post, index) =>
                <PostItem completeTodo={completeTodo} remove={remove} number={index + 1} post={post} key={index} />
            )}
        </div>
    );
};

export default PostList;