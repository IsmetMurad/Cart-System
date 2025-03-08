import './App.css'
import { Route, Routes, Link } from 'react-router'
import Home from './Home'
import Cart from './Cart'
import { create } from 'zustand'



function App() {


  return (
    <>
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>



    </div>
    
      
    </>
  )
}

export default App
