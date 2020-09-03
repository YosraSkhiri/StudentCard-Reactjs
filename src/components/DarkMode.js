import React from 'react';
import DarkModeCheckbox from './DarkModeCheckbox';
import styles from '../styles/darkMode.module.css'

function DarkMode() {
    return(
        <div className={styles.darkModeInputWrapper}>
            <div className={styles.checkboxLabel}>Dark Mode Off</div>
            <DarkModeCheckbox />
        </div>
    );
}

export default DarkMode;