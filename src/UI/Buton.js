import React from 'react'
import Styles from "./Button.module.css"

const Buton = (props) => {
    const classes = `${props.className} ${Styles.button}`
    return (
        <div className={classes} onClick={props.onClick} type={props.type}>{props.children}</div>
    )
}

export default Buton;