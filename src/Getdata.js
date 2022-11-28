import React from "react";
export default class Getdata extends React.Component{
    constructor(){
        super();
        this.state={
            arr:[]
        }
    }
   componentDidMount(){
    fetch("https://react-firebase-auth-8003e.firebaseio.com/users.json", {
        method: "GET",


        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())

        .catch((error) => console.error("Error:", error))

        .then((response) => {
            

            Object.keys(response).forEach(function(key){
                if(key.startsWith('-'))
                   // console.log(key, response[key]);
               var newkey=  delete Object.assign(response, {newKey: response[key]})[key.startsWith('-')]
                   
                   console.log(newkey)           
            })
            console.log(response)
           var x=[]
           x.push(response)
           this.setState({arr:x},()=>{
            console.log(this.state.arr[0])
        })
         
          
        });
   }
   
    render(){
        return(
            <>
            <h1>Hello</h1>
            <table border="1">
                <tr>
                    <th>Sl No</th>
                    <th>Email Id</th>
                    <th>Name</th>
                </tr>
                {this.state.arr.map((e,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{e.emailid}</td>
                        <td>{e.fullname}</td>
                    </tr>
                ))}
            </table>
            </>
        )
    }
}