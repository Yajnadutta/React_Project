import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
export default class Signup extends React.Component {
    constructor(){
        super();
        this.state={
            fullname:"",
            emailid:"",
            mobileno:"",
            gender:"",

        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    handleSubmit(){
      const data={
        fullname:this.state.fullname,
        emailid:this.state.emailid,
        mobileno:this.state.mobileno,
        gender:this.state.gender
      }
      fetch("https://react-firebase-auth-8003e.firebaseio.com/users.json", {
        method: "POST",

        body: JSON.stringify(data), // data can be `string` or {object}!

        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())

        .catch((error) => console.error("Error:", error))

        .then((response) => {
            console.log("Success")
            console.log(response)
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Data Successfully Inserted ',
              
            })
         
          
        });
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
    });
    }
  render() {
    return (
      <>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header text-center">
                  <h2>Signup</h2>
                </div>
                <div className="card-body">
                  <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Your Name"
                      name="fullname"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email ID</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter Your Email Id"
                      name="emailid"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Mobile Number</label>
                    <input
                      type="text"
                      class="form-control"
                      name="mobileno"
                      placeholder="Enter Your Mobile Number"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Gender</label>
                    <br/>
                    <input
                      type="radio"
                      onChange={this.handleChange}
                      name="gender"
                      value="Male"
                    /> Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <input
                      type="radio"
                      onChange={this.handleChange}
                      name="gender"
                      value="Female"
                    /> Female
                  </div>
                  <div class="d-grid gap-2">
                <button class="btn btn-success"
                onClick={this.handleSubmit}
                type="button">Submit</button>
  
                </div>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </>
    );
  }
}
