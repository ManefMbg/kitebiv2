import { useState } from "react";
import "../CSS/Container.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import axios from "axios" 

axios.defaults.baseURL = "http://localhost:3001/"

const Dashboard = () => {

const [addSection, setAddSection] = useState(false)





  return (
    <div className="container">
        <button className="button button-add" onClick={() =>setAddSection(true)}>Add</button>

{
  addSection && (

    <div className="addContainer">
        <form>
          <div className="close-btn" onClick={() =>setAddSection(false)}><IoIosCloseCircleOutline/></div>
            <label htmlFor="username">UserName : </label>
            <input type="text" id="username" name="username" />

            <label htmlFor="email">Email : </label>
            <input type="email" id="email" name="email" />

            <label htmlFor="password">Password : </label>
            <input type="text" name="password" id="password" />

            <button className="btn2">Submit</button>
          </form>
        </div>
  )
}
      
    <div className="tableContainer"></div>
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
        </table>

    </div>
  )
}

export default Dashboard