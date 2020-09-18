import React from 'react';
import TextInput from './TextInput';
import styles from '../styles/formInfo.module.css'
import SelectInput from './SelectInput';
import Day from './Day';
import Month from './Month';
import Year from './Year';

function FormInfo() {

    return (
        <div className={styles.formWrapper}>
            <h1 className={styles.heading}>Student's Information</h1>
            <form>
                <TextInput label='University' />
                <TextInput label='First Name' />
                <TextInput label='Last Name' />
                <div className={styles.col_3}>
                    <Month />
                    <Day />
                    <Year />
                </div>
                <TextInput label='ID' />
                <div className={styles.col_2}>
                    <SelectInput label='Cycle' />
                    <SelectInput label='Grade' />
                </div>
            </form>
        </div>
    );
}

export default FormInfo;