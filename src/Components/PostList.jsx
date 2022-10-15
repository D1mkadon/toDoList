import React from 'react';
import PostItem from "./PostItem";
import classes from './Post.module.scss'
const PostList = ({posts, title }) => {
    return (
        <div className={classes.PostList}>
            <h1>{title}</h1>
            {posts.map((post, index) =>
                <PostItem number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;