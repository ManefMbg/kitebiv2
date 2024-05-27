// import { useState } from "react";
import  {UserRouter } from "../../../server/routes/userRouter.js";
import "../CSS/Container.css";
// import { IoIosCloseCircleOutline } from "react-icons/io";
import axios from "axios" 

axios.defaults.baseURL = "http://localhost:3001/"

const Dashboard = () => {

// const [addSection, setAddSection] = useState(false)



  return (
    <div className="container">
        {/* <button className="button button-add" onClick={() =>setAddSection(true)}>Add</button>

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
} */}
        
        <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        UserRouter.map((el)=>{
                            return(
                                <tr key={el}>
                                    <td>{el.username}</td>
                                    <td>{el.email}</td>
                                    <td>
                                        <button className="btn btn-edit">Edit</button>
                                        <button className="btn btn-delete">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>


    </div>


  )
}

export default Dashboard