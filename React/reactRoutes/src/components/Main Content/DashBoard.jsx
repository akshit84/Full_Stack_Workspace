import Header from '../Header/Header'
import SideBar from '../Side Bar/SideBar'
import MainContent from './MainContent'
import { Outlet } from 'react-router'

function DashBoard() {
    return (
        <div>
            <Header />
            <SideBar />
            <MainContent>
                <Outlet />
            </MainContent>
        </div>
    )
}

export default DashBoard
