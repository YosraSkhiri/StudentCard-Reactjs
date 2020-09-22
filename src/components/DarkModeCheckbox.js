import React, { useContext } from 'react';
import styles from '../styles/darkModeCheckbox.module.css';
import { DarkModeContext } from '../contexts/DarkModeContext';


function DarkModeCheckbox() {
    const { toggleDarkMode, isDarkMode } = useContext(DarkModeContext);

    let trackClass = styles.track
    let switchClass = styles.switch
    let isOn = false;

    if(isDarkMode) {
        trackClass +=  ' ' + styles.trackon
        switchClass += ' ' + styles.on
        isOn = true;
    } else {
        trackClass = styles.track
        switchClass = styles.switch
        isOn = false;
    }

    const handleClick = () => {
        toggleDarkMode(!isDarkMode);
    }

    return(
        <div className={styles.darkModeInputWrapper}>
            <label className={styles.checkboxLabel}>Dark Mode { isOn? 'On': 'Off' }</label>
            <input 
                type="checkbox" 
                id="theme" 
                name="isDarkModeOn" 
                checked={isDarkMode}
                onChange={e => {}}
                className= {styles.checkboxInputDef}
            />

            <div className={trackClass}>
                <div 
                    className={switchClass} 
                    onClick={handleClick} 
                ></div>
            </div>
        </div>
    );
}

export default DarkModeCheckbox;