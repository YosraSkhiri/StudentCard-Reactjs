import React, { useContext } from 'react';
import StudentCard from './StudentCard';
import styles from '../styles/global.module.css'
import { DarkModeContext } from '../contexts/DarkModeContext';
import { InputContext } from '../contexts/InputContext';

function StudentCardDone() {
    const { isDarkMode } = useContext(DarkModeContext);
    const { studentFirstName } = useContext(InputContext);

    const headingDarkModeStyles = {
        color: '#f1f1f1'
    }

    return (
        <div className={styles.center}>
            <h1 style={isDarkMode? headingDarkModeStyles: {}}>Your Student Card is done { studentFirstName }</h1>
            <StudentCard showColorOption=''/>   
        </div>
    );
}

export default StudentCardDone;
