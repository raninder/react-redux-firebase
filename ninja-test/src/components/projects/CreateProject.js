import React from 'react'
import {useState} from 'react'

function CreateProject() {
  
  const [state, setState] = useState({
    title: "",
    content: ""
});
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("state",state)
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
        <h5 className="grey-text text-darken-3">Create New Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" onChange={handleChange}/>
        </div>

        <div className="input-field">
          <label htmlFor="content">Project Content:</label>
          <textarea id="content" className="materialize-textarea" onChange={handleChange}/>
        </div>

        <div className="input-field">
          <button className='btn pink lighten-1 z-depth-0'>Create</button>
         </div> 
      </form>

    </div>

  )
}

export default CreateProject
