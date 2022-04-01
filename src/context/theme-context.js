import { createContext, useContext, useState } from "react";

const themeContext = createContext();

const ThemeProvider = ({children}) => {
    const [isDark, setisDark] = useState(true);
    return <themeContext.Provider value={{isDark, setisDark}}>
        {children}
    </themeContext.Provider>
}

const useTheme = () => useContext(themeContext);

export {ThemeProvider, useTheme};