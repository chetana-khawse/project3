import React, { useState } from 'react'

function Register() {
    // const [countries,setCountries]=useState([]);
    // const [state,setState]=useState([]);
    // const [cities,setCities]=useState([]);
    // const country=[{
    //                name:"india",
    //                states:[{
    //                 name:"up",
    //                 city:["a","b"]
    //                  }]
    //               },
    //               {
    //                 name:"pakistan",
    //                 states:[{
    //                  name:"kabul",
    //                  city:["c","d"]
    //                   }]
    //                }]

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



<select>
    <option></option>
    <option></option>
    <option></option>
    <option></option>

  </select>



  <select>
    <option></option>
    <option></option>
    <option></option>
    <option></option>

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