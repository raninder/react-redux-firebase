import React from 'react'
import { useParams } from "react-router";

const ProjectDetails = () => {
  const {id} = useParams(); 
  // console.log("id",id)
  return (
 <div className="container section project-details">
  <div className="card z-depth-0">
    <div className="card-content">
      <span className="card-title">Project Title- {id}</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod rerum unde ratione, dolorum eaque officia reprehenderit a? Aliquam, sint placeat. Ratione, vero eos. Quos illo veniam ab libero magnam?</p>     
    </div>
    <div className="card-action grey lighten-4 grey-text">
      <div> Posted by Net Ninja</div>
      <div> 2nd September, 2am</div>
    </div>
  </div>
 </div>
  )
}

export default ProjectDetails
