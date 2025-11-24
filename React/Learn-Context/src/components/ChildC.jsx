import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
    // const user = useContext(UserContext);

    const { theme, setTheme } = useContext(ThemeContext)

    function handleTheme() {
        if(theme === 'light'){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }


    return (
        <>
            <button className={` px-2 rounded-lg font-semibold text-lg ${theme === 'light'? 'bg-slate-950 text-amber-50 ':'bg-amber-50 text-slate-950'}`} onClick={handleTheme}>Change Theme</button>

        </>
    )
}

export default ChildC