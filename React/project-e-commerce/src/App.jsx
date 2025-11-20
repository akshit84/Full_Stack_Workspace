import { useEffect, useState } from 'react';
import './App.css'
import Displayitems from './component/Displayitems';
import { products } from './utils/DataObjects'

function App() {

  const [selectCategory, setselectCategory] = useState("all")
  const [filteredArr, setfilteredArr] = useState([])

  useEffect(() => {
    if (selectCategory === "" || selectCategory === "all") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setfilteredArr(products)
    }
    else {
      const finalArr = products.filter((item) => item.category === selectCategory)
      setfilteredArr(finalArr)
    }
    console.log("End");

  }, [selectCategory])
  return (
    <div className='h-screen'>
      <nav className='navbar'>
        <div className='navbar-left'>
          <div>Shop</div>
          <div>FAQ</div>
          <div>Contact</div>
        </div>
        <div className='navbar-heading'>E Commerce</div>
        <div className='navbar-right'>
          <div>Search</div>
          <div>Profile</div>
          <div>Log In</div>
          <div>Shopping Bag</div>
        </div>
      </nav>
      <div className='dropdown'>
        <select value={selectCategory} onChange={(e) => setselectCategory(e.target.value)} style={{ padding: "8px 12px", borderRadius: "6px", fontSize: "16px", cursor: "pointer" }} className='dropdown-content' name="" id="">
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="vehicle">Vehicle</option>
        </select>
      </div>
      <div style={{ marginTop: '50px', height: 'screen', padding: '10px' }}>
        <div className='w-auto h-auto ' >
          <div className='flex items-center justify-center' style={{ marginBottom: '20px' }}>
            <h2 className="text-3xl font-semibold text-rose-500">Most Popular</h2>
          </div>
          <Displayitems products={filteredArr} />
        </div>
      </div>
    </div>
  )
}

export default App
