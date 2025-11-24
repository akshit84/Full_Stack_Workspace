
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'



// const UserContext = createContext();

const ThemeContext = createContext();


function App() {

  // const [user, setUser] = useState({name: "Love"});
  const [theme, setTheme] = useState('light');
  return (
    <>
      <div className='flex justify-center items-center min-h-screen'>
        <ThemeContext.Provider value={{ theme, setTheme }} >
          <div className={`w-sm h-96 flex justify-center items-center rounded-sm ${theme === 'light' ? 'bg-amber-50' : 'bg-slate-950'}`}>
            <ChildA />
          </div>

        </ThemeContext.Provider>
      </div>

    </>
  )
}

export default App
// export {UserContext}
export { ThemeContext }
