import React, { createContext, useState } from 'react';

export const InputContext = createContext();

const InputContextProvider = (props) => {

    const [uniName, setUniName] = useState('');
    const [studentFirstName, setStudentFirstName] = useState('');
    const [studentLastName, setStudentLastName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [studentCycle, setStudentCycle] = useState('1');
    const [studentGrade, setStudentGrade] = useState('1');

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

    const addStudentCycle = (cycle) => {
        setStudentCycle(cycle);
    }

    const addStudentGrade = (grade) => {
        setStudentGrade(grade)
    }

    return (
        <InputContext.Provider 
            value={
                {
                    uniName, addUniName,
                    studentFirstName, addStudentFirstName,
                    studentLastName, addStudentLastName,
                    studentId, addStudentId,
                    studentCycle, addStudentCycle,
                    studentGrade, addStudentGrade
                }
            }
        >
            {props.children}
        </InputContext.Provider>
    );
}
 
export default InputContextProvider;