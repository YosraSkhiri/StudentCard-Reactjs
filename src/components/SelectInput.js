import React, { useContext, useState } from 'react';
import { InputContext } from '../contexts/InputContext';
import styles from '../styles/formInput.module.css';

const SelectInput = (props) => {

    const [isFocused, setIsFocused] = useState(false);
    const { addStudentCycle, addStudentGrade } = useContext(InputContext);

    const handleClick = () => {
        if (isFocused === false) {
            setIsFocused(true);
        }
    };

    const handleChange = (e) => {
        if(props.label === 'Cycle') {
            addStudentCycle(e.target.value);
        } else {
            addStudentGrade(e.target.value);
        }  
    }


    return (
        <div className={styles.inputWrapper}>
            <label className={isFocused ? styles.inputLabelOnFocus : styles.inputLabel}>{props.label}</label>
            <select
                onClick={handleClick}
                className={styles.input}
                onChange={handleChange}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
    );
}

export default SelectInput;