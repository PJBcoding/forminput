import React from 'react'
import Styles from './RecordItems.module.css'


const RecordItems = (props) => {


    const itemcardClickHandler = () => {
        console.log('Props .id is : ' + props.id);
        props.getdeleted_id(props.id);
    }
    return (
        <div className={Styles.itemcard} onClick={itemcardClickHandler}>
            <div className={Styles.itemcarditem}>
                <div> <label htmlFor="name" >Name : </label> <span>  {props.name}</span></div>
                <div> <label htmlFor="age">Age  : </label> <span>  {props.age}</span></div>
                <div> <label htmlFor="email">Email : </label> <span>  {props.email}</span></div>
                <div> <label htmlFor="mobile">Mobile :</label> <span>  {props.mobile}</span></div>

            </div>

        </div>
    )
}

export default RecordItems