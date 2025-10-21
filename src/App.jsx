import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"
import Description from '../Pages/Description'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/Description'element={<Description/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App