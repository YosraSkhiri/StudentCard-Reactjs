import React, {useState, useContext, useEffect} from 'react';
import styles from '../styles/formInput.module.css';
import { InputContext } from '../contexts/InputContext';

function TextInput (props) {
    const [isFocused, setIsFocused] = useState(false);
    const [error, setError] = useState({
        errorType: '',
        errorMsg: ''
    });
    
    const { 
        addUniName, 
        addStudentFirstName, 
        addStudentLastName, 
        addStudentId 
    } = useContext(InputContext);

    const setDefaultState = () => {
        switch(props.label) {
            case 'University':
                return('University Name');
    
            case 'First Name':
                return('John');
            
    
            case 'Last Name':
                return('Doe');
            
            default:
                return('0011223344');
        }
    }

    const [inputValue, setInputValue] = useState(setDefaultState());
    
    const handleClick = () => {
        if(isFocused === false) {
            setIsFocused(true);
        } 
    };

    const handleChange = (e) => {
        let letters = /^[A-Za-z ]+$/;

        if(props.label === 'University' || props.label === 'First Name' || props.label === 'Last Name') {
            if(e.target.value.match(letters)) {
                setInputValue(e.target.value);
                setError({
                    errorType: props.label,
                    errorMsg: ''
                });
                
            } else {
                setError({
                    errorType: props.label,
                    errorMsg: `${props.label} input field can only contain characters`
                });
            }
        } else {
            if(e.target.value.match(letters)) {
                setError({
                    errorType: props.label,
                    errorMsg: `${props.label} input field can only contain numbers`
                });
            } else if(e.target.value.length > 10) {
                setError({
                    errorType: props.label,
                    errorMsg: `${props.label} input field should not exceed 10 numbers`
                });
            } else {
                setInputValue(e.target.value);
                setError({
                    errorType: props.label,
                    errorMsg: ''
                });
            }
        } 
        

        if(e.target.value === '') {
            switch(props.label) {
                case 'University':
                    setInputValue('University Name');
                break;
    
                case 'First Name':
                    setInputValue('John');
                break;
    
                case 'Last Name':
                    setInputValue('Doe');
                break;
    
                default:
                    setInputValue('0011223344');
                    
            }
            setError({
                errorType: props.label,
                errorMsg: ''
            });
        }
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

    })

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
            <div className={styles.inputError}>{error.errorMsg}</div>
        </div>
    );
}

export default TextInput;