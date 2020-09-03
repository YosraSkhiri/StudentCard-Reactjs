import React from 'react';
import DarkMode from './DarkMode';
import styles from '../styles/nav.module.css';

function Nav() {
    return(
        <nav className={styles.nav}>
            <div className={styles.logo}>Student Card</div>
            <DarkMode />
        </nav>
    );
}

export default Nav;