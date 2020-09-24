import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TextInput from './TextInput';
import styles from '../styles/formInfo.module.css'
import SelectInput from './SelectInput';
import Day from './Day';
import Month from './Month';
import Year from './Year';
import { DarkModeContext } from '../contexts/DarkModeContext';

function FormInfo() {
    const { isDarkMode } = useContext(DarkModeContext);

    const formWrapperDarkModeStyles = {
        backgroundColor: ' #424242',
        boxShadow: `0 1px 2px rgba(0,0,0,0.3), 
                    0 2px 4px rgba(0,0,0,0.3), 
                    0 4px 8px rgba(0,0,0,0.3), 
                    0 8px 16px rgba(0,0,0,0.3),
                    0 16px 32px rgba(0,0,0,0.3)`
    }

    const headingDarkModeStyles = {
        color: '#f1f1f1'
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.formWrapper} style={ isDarkMode? formWrapperDarkModeStyles : {}}>
            <h1 style={isDarkMode? headingDarkModeStyles: {}}>Student's Information</h1>
            <form onSubmit={handleSubmit}>
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
                <Link
                    to={process.env.PUBLIC_URL +'/your-student-card'}
                    className={styles.btnPrimary}>
                    Done!</Link>
            </form>
        </div>
    );
}

export default FormInfo;