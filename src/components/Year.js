import React, { useState, useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
import { InputContext } from '../contexts/InputContext';
import styles from '../styles/formInput.module.css';

const Year = () => {
    const [isFocused, setIsFocused] = useState(false);
    const { addBirthYear, birthMonth, birthDay } = useContext(InputContext);
    const { isDarkMode } = useContext(DarkModeContext);
    const [hideOption, setHideOption] = useState(true);

    const handleClick = (e) => {
        if (isFocused === false) {
            setIsFocused(true);
        }

        if(hideOption) {
            setHideOption(false)
        }
        
        addBirthYear(e.target.value);
    };

    const generateSelectOptions = () => {
        let options = [];
        if(birthMonth === 'February' && birthDay === '29') {
            
            for(let i = 1905; i <= new Date().getFullYear(); i++) {
                if(i % 4 && (i % 100 !== 0 || i % 400)) {
                    options.push(<option key={i} value={i}>{i}</option>)
                }
            }
        } else {
            for(let i = 1905; i <= new Date().getFullYear(); i++) {
                options.push(<option key={i} value={i}>{i}</option>)
            }
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
                style={style()}
                defaultValue={ '1997' }
            >
                {generateSelectOptions()}
            </select>
            <label 
                className={isFocused ? styles.inputLabelOnFocus : styles.inputLabel}
                style={ (isFocused && isDarkMode) ? {
                    backgroundColor: '#424242'
                } : {}}>Year</label>

            <div 
                className={
                    (birthMonth === 'February' && birthDay === '29')? 
                    styles.tooltip+' '+styles.show: 
                    styles.tooltip+' '+styles.hide
                }>Only leap years will be shown</div>
        </div>
    );
}
 
export default Year;