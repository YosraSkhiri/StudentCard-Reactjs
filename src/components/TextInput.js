import React, {useState} from 'react';
import styles from '../styles/textInput.module.css';

function TextInput (props) {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    
    const handleClick = () => {
        if(isFocused === false) {
            setIsFocused(true);
        } 
    };

    return(
        <div className={styles.inputWrapper}>
            <label className={isFocused ? styles.inputLabelOnFocus : styles.inputLabel}>{props.label}</label>
            <input 
                type="text" 
                className={styles.input}
                onClick={handleClick}
                onChange={event => setInputValue(event.target.value)}
            />
        </div>
    );
}

export default TextInput;