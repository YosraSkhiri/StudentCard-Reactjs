import React, { useContext, useState } from 'react';
import { InputContext } from '../contexts/InputContext';
import styles from '../styles/formInput.module.css'

const Month = () => {

    const [isFocused, setIsFocused] = useState(false);
    const [isWhite, setIsWhite] = useState(true);
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

    const { addBirthMonth } = useContext(InputContext);

    const handleClick = (e) => {
        if (isFocused === false) {
            setIsFocused(true);
        }

        if(isWhite) {
            setIsWhite(false)
        }

        addBirthMonth(e.target.value);
    };

    return (
        <div className={styles.inputWrapper}>
            <select
                onClick={handleClick}
                className={styles.input}
                style={isWhite? {color: 'white'}: {color: 'black'}}
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
            <label className={isFocused ? styles.inputLabelOnFocus : styles.inputLabel}>Month</label>
        </div>
    );
}

export default Month;