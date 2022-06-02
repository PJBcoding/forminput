import React, { useState } from 'react'
import Styles from "./Form.module.css";
import Styles1 from "../UI/Button.module.css"
import Button from "../UI/Button"


const Form = (props) => {
    const [show_Users, setshowUsers] = useState(false);
    const [enteredname, setenteredname] = useState("");
    const [enteredage, setenteredage] = useState("");
    const [enteredemail, setenteredemail] = useState("");
    const [enteredmobile, setenteredmobile] = useState("")
    const [buttonname, setbuttonname] = useState("Show Users")

    const nameInputHandler = (event) => {
        setenteredname(event.target.value);
    }
    const ageInputHandler = (event) => {
        setenteredage(event.target.value);

    }
    const emailInputHandler = (event) => {
        setenteredemail(event.target.value);

    }
    const mobileInputHandler = (event) => {
        setenteredmobile(event.target.value);

    }

    const submitHandler = (e) => {
        e.preventDefault();
        /*  console.log(name, age, email, mobile); */
        const inputData = {
            id: Math.random().toString(),
            name: enteredname,
            age: enteredage,
            email: enteredemail,
            mobile: enteredmobile
        }
        props.onSubmitSaveData(inputData);

        setenteredname("");
        setenteredage("");
        setenteredemail("");
        setenteredmobile("");


    }

    const resetHandler = () => {

        setenteredname("");
        setenteredage("");
        setenteredemail("");
        setenteredmobile("");

    }

    const showUsers = () => {
        if (show_Users === false) {
            setshowUsers(true);
            setbuttonname("Hide Users")
        }
        else {
            setshowUsers(false);
            setbuttonname("Show Users")
        }
        props.showusersstatus(show_Users)
    }
    /////////////////////////////////////////////////////////////////////////////


    return (

        <form onSubmit={submitHandler} onReset={resetHandler}>
            <div className={`${Styles.container}`}>
                <div className={` ${Styles['heading-primary']}`}> Enter Your Details</div>
            </div>

            <div className={`${Styles.grid} ${Styles['grid--2-cols']} ${Styles.mainform}`}>

                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder='Name' value={enteredname} required onChange={nameInputHandler} />

                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" min="18" max="120" placeholder='Age' value={enteredage} required onChange={ageInputHandler} />

                <label htmlFor="Email">Email</label>
                <input type="email" name="email" id="email" placeholder='email@email.com' value={enteredemail} required onChange={emailInputHandler} />

                <label htmlFor="mobile">Mobile</label>
                <input type="mobile" name="mobile" id="mobile" placeholder='eg:9xxx7xx6xx' value={enteredmobile} required onChange={mobileInputHandler} />

            </div>

            <div className={`${Styles.container}`}>
                <Button className={Styles1.fromtop} type={'submit'}> Submit</Button>
                <Button className={Styles1.fromtop} type={'reset'} > Reset</Button>
                <Button className={Styles1.fromtop} type={'button'} onClick={showUsers}  > {buttonname}</Button>
            </div>
        </form >



    )
};

export default Form;
