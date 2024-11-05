import React from 'react';
import classes from "./Button.module.css";

const Button = (props) => {

    const {children, color, onClick} = props

    return (
        <button
            onClick={onClick}
            className={`${classes.btn} ${classes[color]}`}
        >
            {children}
        </button>
    );
};

export default Button;