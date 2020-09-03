import React, { useState } from 'react';
import styles from '../styles/darkModeCheckbox.module.css'

function DarkModeCheckbox() {

    const [isDarkModeOn, setIsDarkModeOn] = useState(false)
    const handleClick = () => setIsDarkModeOn(!isDarkModeOn)
    let trackClass = styles.track
    let switchClass = styles.switch

    if(isDarkModeOn) {
        trackClass +=  ' ' + styles.trackon
        switchClass += ' ' + styles.on
    } else {
        trackClass = styles.track
        switchClass = styles.switch
    }

    return(
        <div>
            <input 
                type="checkbox" 
                id="theme" 
                name="isDarkModeOn" 
                checked={isDarkModeOn}
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