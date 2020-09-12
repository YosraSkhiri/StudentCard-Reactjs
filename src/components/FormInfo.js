import React from 'react';
import TextInput from './TextInput';
import styles from '../styles/formInfo.module.css'

function FormInfo() {

    return(
        <div className={styles.formWrapper}>
            <h1 className={styles.heading}>Student's Information</h1>
            <form>
                <TextInput label='University' />
                <TextInput label='First Name' />
                <TextInput label='Last Name' />
                <TextInput label='ID' />
                <div className={styles.col_2}>
                    <TextInput label='Cycle' />
                    <TextInput label='Grade' />
                </div>
            </form>
        </div>
    );
}

export default FormInfo;