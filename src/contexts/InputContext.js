import React, { createContext, useState } from 'react';

export const InputContext = createContext();

const InputContextProvider = (props) => {

    const [uniName, setUniName] = useState('');
    const [studentFirstName, setStudentFirstName] = useState('');
    const [studentLastName, setStudentLastName] = useState('');
    const [studentId, setStudentId] = useState('');

    const addUniName = (uniName) => {
        setUniName(uniName);
    }

    const addStudentFirstName = (firstName) => {
        setStudentFirstName(firstName);
    }

    const addStudentLastName = (lastName) => {
        setStudentLastName(lastName);
    }

    const addStudentId = (id) => {
        setStudentId(id);
    }

    return (
        <InputContext.Provider 
            value={
                {
                    uniName, addUniName,
                    studentFirstName, addStudentFirstName,
                    studentLastName, addStudentLastName,
                    studentId, addStudentId
                }
            }
        >
            {props.children}
        </InputContext.Provider>
    );
}
 
export default InputContextProvider;