import React, { useEffect, useState } from 'react'
import "../src/App.css"
import Comp from '../Components/Comp'


const Home = () => {
    const [meal,setMeal]=useState([])
    const [choice,setChoice]=useState("")
    console.log(choice)
    // const [point,setPoint]=useState()
    const Fetch= async()=>{
        const food = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${choice==""?"a":choice}`)
        const food2 = await food.json()
        setMeal(food2.meals)
        console.log(food2.meals)
        
    }
    // useEffect(()=>{
    // Fetch()
    // },{choice})
    useEffect(()=>{
        setTimeout
        Fetch()
    },[choice])
    
  return (
    <div>
        <div className='heading'>
            <input onChange={(e)=>setChoice(e.target.value)} type="text" />
            <button>SEARCH</button>
        </div>
        <h1 className='search-txt'>Search the first letter only</h1>
        <div className='home'>
            {
            meal.map((item,index)=>{
                return(
                    <Comp key={index} value={item}/>
                )
            })
            }
        </div>
        
            
        
        
    </div>
  )
}

export default Home