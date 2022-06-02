import React, { useState, useEffect } from 'react';
import RecordItems from './RecordItems';
import Styles from './UserRecords.module.css'

const UserRecords = (props) => {

    const [user_data_render, setuser_data_render] = useState(props.userdata);

    useEffect(() => {
        setuser_data_render(props.userdata);
    }, [props.userdata])


    const delete_by_id = (val) => {
        setuser_data_render(user_data_render.filter((items) => { return (items.id !== val) }));
        props.after_deletion_user_record(user_data_render.filter((items) => { return (items.id !== val) }));

    }
    //eslint-disable-next-line
    {
        if (props.userdata.length === 0 || user_data_render.length === 0) {
            return (
                <div className={` ${Styles.recordcard}  ${Styles.norecordlayout}`}>
                    <h3> No Data to Display</h3>
                </div>
            )
        }

        else {
            return (
                <div className={`${Styles.recordcard} ${Styles.isrecordlayout}`}>

                    {user_data_render.map((items) => {
                        return (
                            <RecordItems key={items.id} id={items.id} name={items.name} age={items.age} email={items.email} mobile={items.mobile} getdeleted_id={delete_by_id} />)
                    })
                    }

                </div>
            )
        }

    }
}

export default UserRecords