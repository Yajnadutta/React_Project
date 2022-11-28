import React, { useState } from "react";
export default function Session(){
   const [data,setdata]=useState([])
  function handleChange(e){
        setdata(e.target.value)
  }  
  function handleSubmit(){
    window.location.reload()
    window.sessionStorage.setItem("First_name",JSON.stringify(data))
  }
  function handleDelete(){
    window.sessionStorage.removeItem("First_name")
    window.location.reload()
  }
    return(
        <div>
            <br/>
<br/>

    <label for="fname">First Name</label>
    <input type="text" onChange={(e)=>handleChange(e)} id="fname" name="firstname" placeholder="Your name.." />

  
    <button onClick={()=>handleSubmit()}>Submit</button>
    <button onClick={()=>handleDelete()}>Delete</button>
    <h3 style={{color:"red",fontWeight:"bold",fontFamily:"sans-serif"}}>
        {JSON.parse(sessionStorage.getItem("First_name"))}</h3>
<br />
        </div>
    )
}