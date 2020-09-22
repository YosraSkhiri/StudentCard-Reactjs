import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
import { InputContext } from '../contexts/InputContext';
import styles from '../styles/formInput.module.css';

const SelectInput = (props) => {

    const [isFocused, setIsFocused] = useState(false);
    const [hideOption, setHideOption] = useState(true);
    const { addStudentCycle, addStudentGrade } = useContext(InputContext);
    const { isDarkMode } = useContext(DarkModeContext);

    const handleClick = () => {
        if (isFocused === false) {
            setIsFocused(true);
        }

        if(hideOption) {
            setHideOption(false)
        }
    };

    const handleChange = (e) => {
        if(props.label === 'Cycle') {
            addStudentCycle(e.target.value);
        } else {
            addStudentGrade(e.target.value);
        }  
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
                onChange={handleChange}
                style={style()}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <label 
                className={isFocused ? styles.inputLabelOnFocus : styles.inputLabel}
                style={ (isFocused && isDarkMode) ? {
                    backgroundColor: '#424242'
                } : {}}
            >{props.label}</label>
        </div>
    );
}

export default SelectInput;