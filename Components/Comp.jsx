import React from 'react'
import "./Comp.css"
import { useNavigate } from 'react-router-dom'

const Comp = ({value}) => {
    const navigate= useNavigate()
  return (
    <div>
        <div className='comp'>
            <div className='comp-img'>
                <img src={value.strMealThumb} alt="" />
            </div>
            <h1>{value.strMeal.length>20? value.strMeal.slice(0,21)+"..": value.strMeal}</h1>
            <h2>{value.strCategory}</h2>
            <button onClick={()=>{navigate("/Description",{state:value})}}>SEE MORE</button>
        </div>
    </div>
  )
}

export default Comp