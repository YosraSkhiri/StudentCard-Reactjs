import React, { createContext, useState } from 'react';

export const InputContext = createContext();

const InputContextProvider = (props) => {

    const [uniName, setUniName] = useState('University Name');
    const [studentFirstName, setStudentFirstName] = useState('John');
    const [studentLastName, setStudentLastName] = useState('Doe');
    const [studentId, setStudentId] = useState('0011223344');

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