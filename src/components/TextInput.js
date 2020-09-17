import React, {useState, useContext, useEffect} from 'react';
import styles from '../styles/formInput.module.css';
import { InputContext } from '../contexts/InputContext';

function TextInput (props) {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const { addUniName } = useContext(InputContext);
    const { addStudentFirstName } = useContext(InputContext);
    const { addStudentLastName } = useContext(InputContext);
    const { addStudentId } = useContext(InputContext);
    
    const handleClick = () => {
        if(isFocused === false) {
            setIsFocused(true);
        } 
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        
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

    }, [inputValue])

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