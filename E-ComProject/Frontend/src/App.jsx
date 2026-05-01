import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Routes>
      {/* Category page*/}
      <Route path="/" element={<Home/>}/>

      {/*Product by Category */}
      <Route path='/products/:id' element={<Products/>}/>

      {/*single Products */}
      <Route path='/product/:id' element={<SingleProduct/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
