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
    const [
        studentCardBgShadow, 
        setStudentCardBgShadow
    ] = useState(
                `0 1px 2px rgba(1, 124, 243, 0.2),
                0 2px 4px rgba(1, 124, 243, 0.2),
                0 4px 8px rgba(1, 124, 243, 0.2), 
                0 8px 16px rgba(1, 124, 243, 0.2),
                0 16px 32px rgba(1, 124, 243, 0.2)`);

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

    const hexToRGBa_CardShadow = (hex) => {
        let r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);
        
        let cardShadow = '0 1px 2px rgba(' + r + ', ' + g + ', ' + b + ', 0.2),' +
                         '0 2px 4px rgba(' + r + ', ' + g + ', ' + b + ', 0.2),'+
                         '0 4px 8px rgba(' + r + ', ' + g + ', ' + b + ', 0.2),'+
                         '0 8px 16px rgba(' + r + ', ' + g + ', ' + b + ', 0.2),'+
                         '0 16px 32px rgba(' + r + ', ' + g + ', ' + b + ', 0.2)';

        return cardShadow;
    }

    const addStudentCardBg = (bgColor) => {
        let hexColor = bgColor.substr(-13, 7);
        let cardShadow = hexToRGBa_CardShadow(hexColor);
        
        setStudentCardBg(bgColor);
        setStudentCardBgShadow(cardShadow);
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
                    studentCardBg, addStudentCardBg,
                    studentCardBgShadow
                }
            }
        >
            {props.children}
        </InputContext.Provider>
    );
}
 
export default InputContextProvider;