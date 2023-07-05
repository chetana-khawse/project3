import React, { useState } from 'react'

function Register() {
    
    const [selectedcity,setSelectedcity]=useState([]);
    const states=["maharastra","gujrat","kerala"]   ;
    const cities={ "maharastra":["pune","nagpur","mumbai"],
                   "gujrat":["ahmedabad","surat","valsad"],
                   "kerala":["cochin","tiruannatpuram"]}       
      

               const [data,setData] = useState({
                    username:"",
                    email:"",
                    password:"",
               });
               const {username,email,password} = data;
               const changeHandler = e => {

                setData({...data,[e.target.name]:e.target.value});
                e.preventDefault();
  
                }
                const submitHandler = e => {
                      e.preventDefault();
                    
                  console.log(data);
                    
                    } 




  return (
<div>
<form onSubmit={submitHandler}>
     <label >Name   : </label>
     <input onChange={changeHandler } name="username"
         value={username} type="text" />
<br/>
<br/>

     <label >Email : </label>
     <input onChange={changeHandler } name="email"
         value={email} type="email" />
<br/>
<br/>

     <label >Password : </label>
     <input onChange={changeHandler } name="password"
         value={password} type="password" />
<br/>



<select onChange={(e)=>setSelectedcity(e.target.value) } name="states">
  { 
     
   states.map((item)=>{
  return<option>{item}</option>

   }
   )
}  

  </select>
<select >
  { 
     cities[selectedcity].map(item=>{
   return <option>{item}</option>
      } ) 
  }
  </select> <br/><br/>

  <label>Courses :</label>  <br/><br/>
 <input type="checkbox" /> react js<br/> 
 <input type="checkbox" /> react native <br/>
 <input type="checkbox" /> angular <br/>
 <input type="checkbox" /> java

 

<br/>
     <button name="submit"
             type="submit">
         Submit
     </button>
 </form>
</div>






  
  )
}

export default Register