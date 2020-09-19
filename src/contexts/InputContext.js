import React, { createContext, useState } from 'react';

export const InputContext = createContext();

const InputContextProvider = (props) => {

    const [uniName, setUniName] = useState('University Name');
    const [studentFirstName, setStudentFirstName] = useState('John');
    const [studentLastName, setStudentLastName] = useState('Doe');
    const [studentId, setStudentId] = useState('0011223344');
    const [studentCycle, setStudentCycle] = useState('1');
    const [studentGrade, setStudentGrade] = useState('1');
    const [birthMonth, setBirthMonth] = useState('January');
    const [birthDay, setBirthDay] = useState('11');
    const [birthYear, setBirthYear] = useState('1997');

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
        setStudentGrade(grade);
    }

    const addBirthMonth = (month) => {
        setBirthMonth(month);
    }

    const addBirthDay = (day) => {
        setBirthDay(day);
    }

    const addBirthYear = (year) => {
        setBirthYear(year);
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
                    studentGrade, addStudentGrade,
                    birthMonth, addBirthMonth,
                    birthDay, addBirthDay,
                    birthYear, addBirthYear
                }
            }
        >
            {props.children}
        </InputContext.Provider>
    );
}
 
export default InputContextProvider;