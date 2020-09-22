import React, { useContext } from 'react';
import DarkModeCheckbox from './DarkModeCheckbox';
import styles from '../styles/nav.module.css';
import { DarkModeContext } from '../contexts/DarkModeContext';

function Nav() {
    const { isDarkMode } = useContext(DarkModeContext);
    document.body.style = isDarkMode ? 'background: #272727;': '';

    return(
        <nav className={styles.nav}>
            <div className={styles.logo}>Student Card</div>
            <DarkModeCheckbox />
        </nav>
    );
}

export default Nav;