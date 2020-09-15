import React, {useState, useContext} from 'react';
import styles from '../styles/textInput.module.css';
import { UniInputContext } from '../contexts/UniInputContext';

function TextInput (props) {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const { addUniName } = useContext(UniInputContext);
    const { addStudentFirstName } = useContext(UniInputContext);
    const { addStudentLastName } = useContext(UniInputContext);
    const { addStudentId } = useContext(UniInputContext);
    
    const handleClick = () => {
        if(isFocused === false) {
            setIsFocused(true);
        } 
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);

        switch(props.label) {
            case 'University':
                addUniName(inputValue);
            break;

            case 'First Name':
                addStudentFirstName(inputValue);
            break;

            case 'Last Name':
                addStudentLastName(inputValue);
            break;

            default:
                addStudentId(inputValue);
        }
    }

    return(
        <div className={styles.inputWrapper}>
            <label className={isFocused ? styles.inputLabelOnFocus : styles.inputLabel}>{props.label}</label>
            <input 
                type="text" 
                className={styles.input}
                onClick={handleClick}
                onChange={ (e) => {
                    handleChange(e)
                }}
            />
        </div>
    );
}

export default TextInput;