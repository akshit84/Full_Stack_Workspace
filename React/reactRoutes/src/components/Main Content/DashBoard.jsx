import { createContext, useState } from 'react';
import Header from '../Header/Header'
import SideBar from '../Side Bar/SideBar'
import MainContent from './MainContent'
import { Outlet } from 'react-router'

const AddToCartContext = createContext();

function DashBoard() {

    const [cartCount, setcartCount] = useState(0)
    
    return (
        <div>
            <AddToCartContext.Provider value={{ cartCount, setcartCount }}>
                <Header />
                <SideBar />
                <MainContent>
                    <Outlet />
                </MainContent>
            </AddToCartContext.Provider>

        </div>
    )
}

export default DashBoard
export { AddToCartContext }
