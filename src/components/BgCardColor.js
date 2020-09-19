import React from 'react';
import styles from '../styles/bgCardColor.module.css'

const BgCardColor = ({ parentCallback }) => {

    const bg_1 = {
        backgroundImage: 'linear-gradient(45deg, #00CEEF 0%, #1EF0FF 50%, #017CF3 100%)'
    }

    const bg_2 = {
        backgroundImage: 'linear-gradient(45deg, #F682FF 0%, #E983E2 50%, #B747D7 100%)'
    }

    const bg_3 = {
        backgroundImage: 'linear-gradient(45deg, #D1F97C 0%, #5DEB60 50%, #34D50D 100%)'
    }

    const bg_4 = {
        backgroundImage: 'linear-gradient(45deg, #FFCE5B 0%, #FF8A6B 50%, #FF5D6E 100%)'
    }

    const handleChange = (e) => {
        parentCallback(e.target.value)
    }

    return (
        <div className={styles.bgBtnsWrapper}>
            <div className={styles.bgBtnsLabel}>Card Background</div>
            <div className={styles.bgBtnsFlex}>
                <label className={styles.bgBtn} style={bg_1}>
                    <input type='radio' value={bg_1.backgroundImage} name='bg_color' onChange={handleChange}/>
                </label>
                <label className={styles.bgBtn} style={bg_2}>
                    <input type='radio' value={bg_2.backgroundImage} name='bg_color' onChange={handleChange}/>
                </label>
                <label className={styles.bgBtn} style={bg_3}>
                    <input type='radio' value={bg_3.backgroundImage} name='bg_color' onChange={handleChange}/>
                </label>
                <label className={styles.bgBtn} style={bg_4}>
                    <input type='radio' value={bg_4.backgroundImage} name='bg_color' onChange={handleChange}/>
                </label>
            </div>
        </div>
    );
}
 
export default BgCardColor;