import React from 'react';
import RecordItems from './RecordItems';
import Styles from './UserRecords.module.css'

const UserRecords = (props) => {



    //eslint-disable-next-line
    {
        if (props.userdata.length === 0) {
            return (
                <div className={` ${Styles.recordcard}  ${Styles.norecordlayout}`}>
                    <h3> No Data to Display</h3>
                </div>
            )
        }

        else {
            return (
                <div className={`${Styles.recordcard} ${Styles.isrecordlayout}`}>

                    {props.userdata.map((items) => {
                        return (
                            <RecordItems key={items.id} name={items.name} age={items.age} email={items.email} mobile={items.mobile} />)
                    })
                    }

                </div>
            )
        }

    }
}

export default UserRecords