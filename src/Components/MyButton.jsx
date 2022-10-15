import React from 'react';
import classes from './MyButton.module.scss'
const MyButton = ({children, ...props}) => {
    return (
        <button {...props} >
         <span className={classes.span}> </span>
         <span className={classes.span}> </span>
         <span className={classes.span}> </span>
         <span className={classes.span}> </span>
         <p className={classes.p}> {children}</p>
        </button>
    );
};

export default MyButton;