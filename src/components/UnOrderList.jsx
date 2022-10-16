import React from 'react'
import { useState } from 'react'
import './style/listStyling.css'
import { listOfSplineData } from '../util/splineData'
const UnOrderList = () => {
   const [name,setName]=useState('')

  return (
    <ul>
        {
         listOfSplineData.map(data=>
         <li>
           <a 
            name={data.title}
            key={data.title} 
            style={{color:`${name===data.title?"white":"#121212"}`}} 
            onClick={(e)=>setName(e.target.name)} 
            href={`#${data.title}`}>{data.title}</a>
         </li>)
        }
    </ul>
  )
}

export default UnOrderList