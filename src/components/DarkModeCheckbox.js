import React, { useState } from 'react';
import styles from '../styles/darkModeCheckbox.module.css'

function DarkModeCheckbox() {

    const [isDarkModeOn, setIsDarkModeOn] = useState(false)
    const handleClick = () => setIsDarkModeOn(!isDarkModeOn)
    let trackClass = styles.track
    let switchClass = styles.switch
    let isOn = false;

    if(isDarkModeOn) {
        trackClass +=  ' ' + styles.trackon
        switchClass += ' ' + styles.on
        isOn = true;
    } else {
        trackClass = styles.track
        switchClass = styles.switch
        isOn = false;
    }

    return(
        <div className={styles.darkModeInputWrapper}>
            <label className={styles.checkboxLabel}>Dark Mode { isOn? 'On': 'Off' }</label>
            <input 
                type="checkbox" 
                id="theme" 
                name="isDarkModeOn" 
                checked={isDarkModeOn}
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