import React, { useContext } from 'react';
import styles from '../styles/studentCard.module.css';
import avatar from '../img/Avatar.jpg';
import { InputContext } from '../contexts/InputContext';
import BgCardColor from './BgCardColor';

function StudentDard({ showColorOption }) {
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
        studentImg,
        studentCardBg,
        studentCardBgShadow
    } = useContext(InputContext); 

    const handleChange = (e) => {
        if(e.target.files[0]) {
            addStudentImg(URL.createObjectURL(e.target.files[0])); 
        }
    }

    return(
        <div>
        <div className={styles.studentCard} style={{
            backgroundImage: studentCardBg,
            boxShadow: studentCardBgShadow
        }}>
            <div className={styles.studentCard__generalInfo}>
                <div className={styles.studentCard__uni}>{ uniName }</div>
                <div className={styles.studentCard__year}>
                    { new Date().getFullYear() } - { new Date().getFullYear() + 1 }
                </div>
            </div>
            <div className={styles.studentCard__content}>
                <div className={styles.studentCard__img}>
                    <img src={studentImg ? studentImg : avatar} alt="avatar"/>
                    { showColorOption ? 
                        <label className={styles.addImg}>
                            <input type='file' accept="image/*" onChange={handleChange}/>
                        </label> : null}   
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
        { showColorOption ? <BgCardColor /> : null}
        </div>
    );
}

export default StudentDard;