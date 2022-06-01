import React from 'react'
import Styles from "./Button.module.css"

const Button = (props) => {
    const classes = `${props.className} ${Styles.button}`
    return (
        <button className={classes} onClick={props.onClick} type={props.type}>{props.children}</button>
    )
}

export default Button;