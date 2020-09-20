import React, { useState, useContext } from 'react';
import { InputContext } from '../contexts/InputContext';
import styles from '../styles/formInput.module.css';

const Year = () => {
    const [isFocused, setIsFocused] = useState(false);
    const { addBirthYear, birthMonth, birthDay } = useContext(InputContext);
    const [isWhite, setIsWhite] = useState(true);

    const handleClick = (e) => {
        if (isFocused === false) {
            setIsFocused(true);
        }

        if(isWhite) {
            setIsWhite(false)
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

    return (
        <div className={styles.inputWrapper}>
            <label className={isFocused ? styles.inputLabelOnFocus : styles.inputLabel}>Year</label>
            <select
                onClick={handleClick}
                className={styles.input}
                style={isWhite? {color: 'white'}: {color: 'black'}}
                defaultValue={ '1997' }
            >
                {generateSelectOptions()}
            </select>

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