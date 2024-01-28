import ProjectList from "../projects/ProjectList"
import Notifications from "./Notifications"
const Dashboard = () =>{

  return(
  
    <div className="dashboard container">
      {/* two sides of container for projects list and notifications */}
      <div className="row">
        {/* first half os screen  12 cols on small screen and 6 cols on medium screen */}
        <div className="col s12 m6">
          <ProjectList />
       </div>
          {/* sec ha;f with 12 cols and 5 medium cols with 1 col gap */}
        <div className="col s12 m5 offset-m1">
          <Notifications/>
        </div>
      </div>
    </div>
  
  )
}

export default Dashboard