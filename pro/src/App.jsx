import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Registration from './Components/Registration'

import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Registration />

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/" element={<Registration/>}></Route>
      </Routes>
    </>
  )
}

export default App