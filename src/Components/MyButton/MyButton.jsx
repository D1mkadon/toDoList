import React from 'react';
import classes from './MyButton.module.scss'
import { Icon } from '../Icon'
const MyButton = ({children, iconType, ...props}) => {

    return (
        <button {...props} >
         <span className={classes.span}> </span>
         <span className={classes.span}> </span>
         <span className={classes.span}> </span>
         <span className={classes.span}> </span>

         <h3 className={classes.p}> {children}  <p className={classes.icon}>{iconType && <Icon type={iconType}/>} </p></h3>

        </button>
    );
};

export default MyButton;