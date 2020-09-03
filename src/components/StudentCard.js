import React from 'react';
import styles from '../styles/studentCard.module.css';
import avatar from '../img/Avatar.jpg';

function StudentDard() {
    return(
        <div className={styles.studentCard}>
            <div className={styles.studentCard__generalInfo}>
                <div className={styles.studentCard__uni}>University Name</div>
                <div className={styles.studentCard__year}>2020 - 2021</div>
            </div>
            <div className={styles.studentCard__content}>
                <div className={styles.studentCard__img}>
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className={styles.studentCard__info}>
                    <div className={styles.studentCard__infoLine}>
                        <div className={styles.studentCard__title}>FIRST NAME</div>
                        <div className={styles.studentCard__txt}>John Doe</div>
                    </div>
                    <div className={styles.studentCard__infoLine}>
                        <div className={styles.studentCard__title}>DATE OF BIRTH</div>
                        <div className={styles.studentCard__txt}>11 Jan 1997</div>
                    </div>
                    <div className={styles.studentCard__infoLine}>
                        <div className={styles.studentCard__title}>ID</div>
                        <div className={styles.studentCard__txt}>0011223344</div>
                    </div>
                    <div className={styles.studentCard__subLine}>
                        <div className={styles.studentCard__infoLine}>
                            <div className={styles.studentCard__title}>CYCLE</div>
                            <div className={styles.studentCard__txt}>1</div>
                        </div>
                        <div className={styles.studentCard__infoLine}>
                            <div className={styles.studentCard__title}>GRADE</div>
                            <div className={styles.studentCard__txt}>1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDard;