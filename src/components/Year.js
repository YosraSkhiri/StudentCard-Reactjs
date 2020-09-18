import React, { useState, useContext } from 'react';
import { InputContext } from '../contexts/InputContext';
import styles from '../styles/formInput.module.css';

const Year = () => {
    const [isFocused, setIsFocused] = useState(false);
    const { addBirthYear } = useContext(InputContext);
    const [isWhite, setIsWhite] = useState(true);

    const handleClick = (e) => {
        if (isFocused === false) {
            setIsFocused(true);
        }

        if(isWhite) {
            setIsWhite(false)
        }
        //test the year if it's feb
        addBirthYear(e.target.value);
    };

    const generateSelectOptions = () => {
        let options = [];

        for(let i = 1905; i <= new Date().getFullYear(); i++) {
            options.push(<option key={i} value={i}>{i}</option>)
        }

        return options;
    }

    return (
        <div className={styles.inputWrapper}>
            <label className={isFocused ? styles.inputLabelOnFocus : styles.inputLabel}>Year</label>
            <select
                onClick={handleClick}
                className={styles.input}
                style={isWhite? {color: 'white'}: {color: 'black'}}
            >
                {generateSelectOptions()}
            </select>
        </div>
    );
}
 
export default Year;