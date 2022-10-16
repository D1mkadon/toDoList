import React from 'react';
import Icon from "../Icon";

const DoneButton = ({children, iconType, ...props}) => {
    const render = (
        <span>
        {iconType && <Icon type={iconType}/>}
            {children || null}
        </span>
    )
    return (
        <button {...props}>
            {render}
        </button>
    );
};

export default DoneButton;