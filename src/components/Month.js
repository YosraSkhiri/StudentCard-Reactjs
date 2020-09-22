import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
import { InputContext } from '../contexts/InputContext';
import styles from '../styles/formInput.module.css'

const Month = () => {

    const [isFocused, setIsFocused] = useState(false);
    const [hideOption, setHideOption] = useState(true);
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

    const { addBirthMonth } = useContext(InputContext);
    const { isDarkMode } = useContext(DarkModeContext);

    const handleClick = (e) => {
        if (isFocused === false) {
            setIsFocused(true);
        }

        if(hideOption) {
            setHideOption(false)
        }

        addBirthMonth(e.target.value);
    };

    const style = () => {
        if(hideOption) {
            if(isDarkMode) {
                return {
                    color: '#424242'
                }
            } else {
                return {
                    color: '#FFFFFF'
                }
            }
        } else {
            if(isDarkMode) {
                return {
                    color: 'black'
                }
            } else {
                return {
                    color: '#424242'
                }
            }
        }
    }

    return (
        <div className={styles.inputWrapper}>
            <select
                onClick={handleClick}
                className={styles.input}
                style={style()}
                defaultValue={ 'January' }
            >
                {
                    months.map((month, index) => (
                        <option 
                            key={ month } 
                            value={ month }
                            defaultValue
                        >{ month }</option>
                    ))
                }
            </select>
            <label 
                className={isFocused ? styles.inputLabelOnFocus : styles.inputLabel}
                style={ (isFocused && isDarkMode) ? {
                    backgroundColor: '#424242'
                } : {}}>Month</label>
        </div>
    );
}

export default Month;