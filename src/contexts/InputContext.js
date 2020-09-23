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
    const [studentImg, setStudentImg] = useState('');
    const [studentCardBg, setStudentCardBg] = useState('linear-gradient(45deg, #00CEEF 0%, #1EF0FF 50%, #017CF3 100%)');

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

    const addStudentImg = (img) => {
        setStudentImg(img)
    }

    const addStudentCardBg = (bgColor) => {
        setStudentCardBg(bgColor);
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
                    birthYear, addBirthYear,
                    studentImg, addStudentImg,
                    studentCardBg, addStudentCardBg
                }
            }
        >
            {props.children}
        </InputContext.Provider>
    );
}
 
export default InputContextProvider;