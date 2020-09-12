import React, {useState} from 'react';
import styles from '../styles/textInput.module.css';

function TextInput (props) {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    let FocusLabelClass;
    
    const handleClick = () => {
        setIsFocused(!isFocused);
    };

    if(isFocused) {
        FocusLabelClass = styles.inputLabelOnFocus;
    } else {
        FocusLabelClass = styles.inputLabel;
    }

    return(
        <div className={styles.inputWrapper}>
            <label className={FocusLabelClass}>{props.label}</label>
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