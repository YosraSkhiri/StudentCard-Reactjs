import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext();

const DarkModeProvider = (props) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = (isDarkMode) => {
        setIsDarkMode(isDarkMode);
    }

    return (
        <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    );
}
 
export default DarkModeProvider;