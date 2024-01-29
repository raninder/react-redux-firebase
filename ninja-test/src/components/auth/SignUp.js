import React from 'react'
import {useState} from 'react'

function SignUp() {
  
  const [state, setState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
});
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("email pswd",state)
  }
  const handleChange = (e) =>{
  
    setState(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
  }))
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" onChange={handleChange}/>
        </div>

        <div className="input-field">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" onChange={handleChange}/>
        </div>

        <div className="input-field">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" onChange={handleChange}/>
        </div>

        <div className="input-field">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" onChange={handleChange}/>
        </div>

        <div className="input-field">
          <button className='btn pink lighten-1 z-depth-0'>Sign up</button>
         </div> 
      </form>

    </div>

  )
}

export default SignUp
