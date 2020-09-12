import React from 'react';
import DarkModeCheckbox from './DarkModeCheckbox';
import styles from '../styles/nav.module.css';

function Nav() {
    return(
        <nav className={styles.nav}>
            <div className={styles.logo}>Student Card</div>
            <DarkModeCheckbox />
        </nav>
    );
}

export default Nav;