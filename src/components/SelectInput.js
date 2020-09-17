import React, { useState } from 'react';
import styles from '../styles/formInput.module.css';

const SelectInput = (props) => {

    const [isFocused, setIsFocused] = useState(false);

    const handleClick = () => {
        if (isFocused === false) {
            setIsFocused(true);
        }
    };

    const selectType = () => {
        if (props.selectType === 'Cycle') {
            return (
                <select
                    onClick={handleClick}
                    className={styles.input}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            );
        } else if (props.selectType === 'Grade') {
            return (
                <select
                    onClick={handleClick}
                    className={styles.input}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            );
        }
    }

    return (
        <div className={styles.inputWrapper}>
            <label className={isFocused ? styles.inputLabelOnFocus : styles.inputLabel}>{props.label}</label>
            <select
                onClick={handleClick}
                className={styles.input}
            >
                <option disabled selected></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>
    );
}

export default SelectInput;