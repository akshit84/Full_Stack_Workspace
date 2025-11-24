import { Link, Route, Routes } from 'react-router'
import './App.css'
import SignUpAndLogin from './components/SignUpAndLogin/SignUpAndLogin'
import DashBoard from './components/Main Content/DashBoard'

function App() {

  return (
    <>
      
        <div className='relative'>

          <Routes>
            <Route path='/' element={<SignUpAndLogin />} />
            <Route path='dashboard/*' element={<DashBoard />} />
          </Routes>
          {/* <SignUpAndLogin /> */}
          {/* <Header />
        <SideBar />
        <MainContent /> */}
        </div>
    </>
  )
}

export default App

