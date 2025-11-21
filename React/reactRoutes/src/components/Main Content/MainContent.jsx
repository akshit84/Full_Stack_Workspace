
import { Navigate, NavLink, Route, Routes } from 'react-router'
import DisplayList from './DisplayList'
import { data } from '../../utils/DataSet'

const category = ["fashion", "homeAppliance", "electronics", "sports", "grocery", "toys"]
function MainContent() {
    return (
        <>
            <div className='absolute top-14 left-60'>
                <Routes>
                    {/* <Route to="/" element={<Navigate to="/fashion" replace />} > */}

                    {category.map((item) => (
                        <Route  key={item} path={`/${item}`} element={<DisplayList category={item} products={data[item]}/>} />
                    ))}

                    {/* </Route> */}
                </Routes>

            </div>

        </>

    )
}

export default MainContent
