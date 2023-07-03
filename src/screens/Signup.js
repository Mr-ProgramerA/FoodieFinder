import React from "react";
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";

const handleSubmit = async(e) => {
  e.preventDefault()
  const response = fetch('http://localhost:5000/api/createuser',{
    
  })
}

function Signup() {
  return (
    <>
    <div> <Navbar/> </div>
      <div className="container">
        <form onSubmit={handleSubmit}s>
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          
          <button type="submit" className="btn m-3 btn-success">
            Submit
          </button>
          <Link className="btn m-3 btn-warning" to = "/login">Already a user !</Link>
        </form>
      </div>
    </>
  );
}

export default Signup;
