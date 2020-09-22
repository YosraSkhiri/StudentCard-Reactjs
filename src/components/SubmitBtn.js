import React from 'react';
import styles from '../styles/btn.module.css';

const SubmitBtn = () => {
    return (
        <button 
            type='submit' 
            className={styles.btnPrimary}
        >
            Done!
        </button>
    );
}
 
export default SubmitBtn;