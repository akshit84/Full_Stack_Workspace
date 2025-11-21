
import { Link, Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header/Header'
import SideBar from './components/Side Bar/SideBar'
import MainContent from './components/Main Content/MainContent'

function App() {


  return (
    <>
      <div className='relative'>
        
        <Header />
        <SideBar />
        <MainContent />
      </div>

    </>
  )
}

export default App
