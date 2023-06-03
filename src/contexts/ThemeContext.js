import React, { createContext, useState } from 'react'

import { themeData } from '../data/themeData'

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(isDark ? themeData.themeArray[0] : themeData.themeArray[1]);
    const [drawerOpen, setDrawerOpen] = useState(false)

    const handleThemeToggle =(value) => {

        setTheme(value ? themeData.themeArray[1] : themeData.themeArray[0]);
    }
    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }
    const value = { theme, drawerOpen, setHandleDrawer, handleThemeToggle }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider