import React from "react";
import "./App.css"
export default class Data extends React.Component{
   
    constructor(){
    var f_name=JSON.parse(window.localStorage.getItem("First name"))
//console.log(f_name)
        super();
        this.state={
            data:"",
            firstname:f_name
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
    }
    handleDelete(){
        window.localStorage.removeItem("First name")
        window.location.reload();
    }
    handleChange(e){
        //console.log(e.target.value)
        this.setState({data:e.target.value})
    }
    handleSubmit(){
        window.location.reload();
        window.localStorage.setItem("First name",JSON.stringify(this.state.data))
    }
    render(){
        return(
            <div>
<br/>
<br/>

    <label for="fname">First Name</label>
    <input type="text" onChange={(e)=>this.handleChange(e)} id="fname" name="firstname" placeholder="Your name.." />

  
    <button onClick={this.handleSubmit}>Submit</button>
    <button onClick={this.handleDelete}>Delete</button>
<br />
<h3 style={{color:"red",fontWeight:"bold",fontFamily:"sans-serif"}}>{this.state.firstname}</h3>
            </div>
        )
    }
}