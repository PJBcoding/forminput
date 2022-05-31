import React from 'react'
import Card from "../UI/Card";
import Styles from "./Form.module.css";
import Styles1 from "../UI/Button.module.css"
import Button from "../UI/Buton"
const Form = () => {
    return (
        <Card className={Styles.inputform}>

            <div className={`${Styles.container}`}>
                <div className={` ${Styles['heading-primary']}`}> Enter Your Details</div>
            </div>

            <div className={`${Styles.grid} ${Styles['grid--2-cols']} ${Styles.mainform}`}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder='Name' required />
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" min="18" max="120" placeholder='Age' required />
                <label htmlFor="Email">Email</label>
                <input type="email" name="email" id="email" placeholder='email@email.com' required />
                <label htmlFor="mobile">Mobile</label>
                <input type="mobile" name="mobile" id="mobile" placeholder='eg:9xxx7xx6xx' required />
            </div>

            <div className={`${Styles.container}`}>
                <Button className={Styles1.fromtop} type={'submit'}> Submit</Button>
            </div>

        </Card >
    )
};

export default Form;
