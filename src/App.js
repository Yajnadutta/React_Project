import React from "react";
import axios from "axios";
export default class App extends React.Component{
  
  constructor(){
    super();
    this.state={
      arr:[]
    }
  }
  
  componentDidMount(){
 //npm install axios ==>View=>new terminal
 
 axios.get(`https://restcountries.com/v2/all`)
 .then(res => {
   
   this.setState({ arr:res.data },()=>{
    console.log(this.state.arr)
   });
 })
 

}
  render(){
    return(<>
    <br/><br/>
    <table border="1" style={{margin:"auto"}}>
      <tr>
        <th>Sl No</th>
        <th>Country Name</th>
        <th>Population</th>
        <th>Native Name</th>
        <th>Language</th>
        <th>Flag</th>
      </tr>
      
     {this.state.arr.map((e,index)=>(
      <tr>
      <td>{index+1}</td>
      <td>{e.name}</td>
      <td>{e.population}</td>
      <td>{e.nativeName}</td>
      <td>{e.languages[0].name}</td>
      <td><img src={e.flag} style={{height:"50px",width:"100px"}} /></td>
      </tr>
     ))}
    
    </table>
    
    </>)
  }
}