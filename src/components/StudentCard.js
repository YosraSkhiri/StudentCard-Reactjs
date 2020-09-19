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
        birthYear 
    } = useContext(InputContext); 


    const [bgColor, setBgColor] = useState({
        backgroundImage: 'linear-gradient(45deg, #00CEEF 0%, #1EF0FF 50%, #017CF3 100%)'
    })

    const changeBgCard = (NewBg) => {
        setBgColor(NewBg);
    }

    return(
        <div>
        <div className={styles.studentCard} style={{backgroundImage: bgColor}}>
            <div className={styles.studentCard__generalInfo}>
                <div className={styles.studentCard__uni}>{ uniName }</div>
                <div className={styles.studentCard__year}>
                    { new Date().getFullYear() } - { new Date().getFullYear() + 1 }
                </div>
            </div>
            <div className={styles.studentCard__content}>
                <div className={styles.studentCard__img}>
                    <img src={avatar} alt="avatar"/>
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