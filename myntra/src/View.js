import React from 'react'
import { useParams } from 'react-router-dom'

export const View = () => {
 const {id,text}=useParams();
 

 
 return (
    <div> {id}   ----  {text}</div>
  )
}
