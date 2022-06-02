import './App.css';
import React, { useState } from 'react';
import Form from "../src/Components/Form";
import Styles from "../src/Components/Form.module.css";
import Card from "./UI/Card";
import UserRecords from './Components/UserRecords';

function App() {

  const user_record_initial = [];
  const [user_record, setUser_Record] = useState(user_record_initial);

  const [userShow, setuserShow] = useState(true);


  const getshowuserstatus = (val) => {
    setuserShow(val);
    console.log("................" + val)
  }


  const after_deletion_user_record = (val) => {
    setUser_Record(val);
  }


  const submit_save = (new_records) => {


    setUser_Record((prevRecords) => {
      return ([new_records, ...prevRecords]);

      /* 
           prevRecords.push(new_records);
           return [...prevRecords];  
       
       // Need to return the array like this  [...prevRecords] because react will not rerender the UserRecord component if we only return prevRecords although this also is an array.
       
       */
    })
  }
  return (
    <Card className={Styles.inputform}>
      <Form onSubmitSaveData={submit_save} showusersstatus={getshowuserstatus} />
      {userShow && <></>}
      {!userShow && <UserRecords userdata={user_record} after_deletion_user_record={after_deletion_user_record} />}

    </Card >

  );
}

export default App;
