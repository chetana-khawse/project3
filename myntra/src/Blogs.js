import React from 'react'
import {  Link } from "react-router-dom";

function Blogs() {
    
    const blogs=[{id:1,text:"This is 1st blog"},{id:2,text:"This is 2nd blog"},{id:3,text:"This is 3rd blog"},{id:4,text:"This is 4th blog"},
]

  return (
    <div>
  {
 blogs.map(({id,text})=>{

    return(<div key={id}> <h3>  <Link to={`/blogs/${id}/${text}`}>   Blog {id}</Link>
    </h3>

    
    </div>
    )


 })} 



    </div>
  )
}

export default Blogs