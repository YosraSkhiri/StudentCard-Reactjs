import React, { useContext, useState } from 'react';
import styles from '../styles/studentCard.module.css';
import avatar from '../img/Avatar.jpg';
import { InputContext } from '../contexts/InputContext';
import BgCardColor from './BgCardColor';

function StudentDard() {
    const { 
        uniName, 
        studentFirstName, 
        studentLastName, 
        studentId, 
        studentCycle, 
        studentGrade,
        birthMonth,
        birthDay,
        birthYear,
        addStudentImg,
        studentImg
    } = useContext(InputContext); 


    const [cardStyle, setCardStyle] = useState({
        backgroundImage: 'linear-gradient(45deg, #00CEEF 0%, #1EF0FF 50%, #017CF3 100%)',
        boxShadow: `0 1px 2px rgba(1, 124, 243, 0.2),
                    0 2px 4px rgba(1, 124, 243, 0.2),
                    0 4px 8px rgba(1, 124, 243, 0.2), 
                    0 8px 16px rgba(1, 124, 243, 0.2),
                    0 16px 32px rgba(1, 124, 243, 0.2)`
    })

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

    const changeBgCard = (NewBg) => {
        let hexColor = NewBg.substr(-13, 7);
        let cardShadow = hexToRGBa_CardShadow(hexColor);
        setCardStyle({
            backgroundImage: NewBg,
            boxShadow: cardShadow
        });
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        addStudentImg(e.target.value);
    }

    return(
        <div>
        <div className={styles.studentCard} style={cardStyle}>
            <div className={styles.studentCard__generalInfo}>
                <div className={styles.studentCard__uni}>{ uniName }</div>
                <div className={styles.studentCard__year}>
                    { new Date().getFullYear() } - { new Date().getFullYear() + 1 }
                </div>
            </div>
            <div className={styles.studentCard__content}>
                <div className={styles.studentCard__img}>
                    <img src={avatar} alt="avatar"/>
                    <label className={styles.addImg}>
                        <input type='file' accept="image/*" onChange={handleChange}/>
                    </label>   
                </div>
                <div className={styles.studentCard__info}>
                    <div className={styles.studentCard__infoLine}>
                        <div className={styles.studentCard__title}>STUDENT NAME</div>
                        <div className={styles.studentCard__txt}>
                            {`${ studentFirstName } ${ studentLastName }`}
                        </div>
                    </div>
                    <div className={styles.studentCard__infoLine}>
                        <div className={styles.studentCard__title}>DATE OF BIRTH</div>
                        <div className={styles.studentCard__txt}>{`${ birthDay } ${ birthMonth.substring(0, 3) } ${ birthYear }`}</div>
                    </div>
                    <div className={styles.studentCard__infoLine}>
                        <div className={styles.studentCard__title}>ID</div>
                        <div className={styles.studentCard__txt}>{ studentId }</div>
                    </div>
                    <div className={styles.studentCard__subLine}>
                        <div className={styles.studentCard__infoLine}>
                            <div className={styles.studentCard__title}>CYCLE</div>
                            <div className={styles.studentCard__txt}>{ studentCycle }</div>
                        </div>
                        <div className={styles.studentCard__infoLine}>
                            <div className={styles.studentCard__title}>GRADE</div>
                            <div className={styles.studentCard__txt}>{ studentGrade }</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BgCardColor parentCallback={changeBgCard}/>
        </div>
    );
}

export default StudentDard;