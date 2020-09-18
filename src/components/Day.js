import React, { useState, useContext } from 'react';
import { InputContext } from '../contexts/InputContext';
import styles from '../styles/formInput.module.css';

const Day = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [isWhite, setIsWhite] = useState(true);
    const { addBirthDay, birthMonth, birthYear } = useContext(InputContext);

    const handleClick = (e) => {
        if (isFocused === false) {
            setIsFocused(true);
        }

        if(isWhite) {
            setIsWhite(false)
        }

        addBirthDay(e.target.value);
    };

    const nbMonthDay = () => {
        if (['January', 'March', 'May', 'July', 'August', 'October', 'December'].includes(birthMonth)) {
            return 31;
        }else if(birthMonth === 'February' ) {
            if(birthYear % 4 && (birthYear % 100 ===! 0 || birthYear % 400)) {
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

        for(let i = 1; i <= nbMonthDay(); i++) {
            options.push(<option key={i} value={i}>{i}</option>)
        }
        return options;
    }

    return (
        <div className={styles.inputWrapper}>
            <label className={isFocused ? styles.inputLabelOnFocus : styles.inputLabel}>Day</label>
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
 
export default Day;