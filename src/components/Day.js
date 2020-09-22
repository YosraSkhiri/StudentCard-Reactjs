import React, { useState, useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
import { InputContext } from '../contexts/InputContext';
import styles from '../styles/formInput.module.css';

const Day = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [hideOption, setHideOption] = useState(true);
    const { addBirthDay, birthMonth, birthYear } = useContext(InputContext);
    const { isDarkMode } = useContext(DarkModeContext);

    const handleClick = (e) => {
        if (isFocused === false) {
            setIsFocused(true);
        }

        if (hideOption) {
            setHideOption(false)
        }

        addBirthDay(e.target.value);
    };

    const nbMonthDay = () => {
        if (['January', 'March', 'May', 'July', 'August', 'October', 'December'].includes(birthMonth)) {
            return 31;
        } else if (birthMonth === 'February') {
            if (birthYear % 4 && (birthYear % 100 === !0 || birthYear % 400)) {
                return 29;
            } else {
                return 28;
            }
        } else {
            return 30;
        }
    }

    const generateSelectOptions = () => {
        let options = [];

        for (let i = 1; i <= nbMonthDay(); i++) {
            options.push(<option key={i} value={i}>{i}</option>)
        }
        return options;
    }

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
                style= {style()}
                defaultValue={ 11 }
            >
                {generateSelectOptions()}
            </select>
            <label 
                className={isFocused ? styles.inputLabelOnFocus : styles.inputLabel}
                style={ (isFocused && isDarkMode) ? {
                    backgroundColor: '#424242'
                } : {}}>Day</label>
        </div>
    );
}

export default Day;