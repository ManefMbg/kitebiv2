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


<table className="table p-4 bg-white rounded-lg shadow">
    <thead>
        <tr>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                UserName
            </th>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Email
            </th>
        </tr>
    </thead>
    <tbody>
        <tr className="text-gray-700">
            <td className="border-b-2 p-4 dark:border-dark-5">
                Jean Marc
            </td>
            <td className="border-b-2 p-4 dark:border-dark-5">
                Louis
            </td>
            <td className="border-b-2 p-4 dark:border-dark-5">
                Jl987
            </td>
        </tr>
        <tr className="text-gray-700">
            
            <td className="border-b-2 p-4 dark:border-dark-5">
                Eric
            </td>
            <td className="border-b-2 p-4 dark:border-dark-5">
                Prouve
            </td>
            <td className="border-b-2 p-4 dark:border-dark-5">
                prouveE
            </td>
        </tr>
        <tr className="text-gray-700">
            
            <td className="border-b-2 p-4 dark:border-dark-5">
                Julien
            </td>
            <td className="border-b-2 p-4 dark:border-dark-5">
                Clai
            </td>
            <td className="border-b-2 p-4 dark:border-dark-5">
                CJUL87
            </td>
        </tr>
        <tr className="text-gray-700">
            
            <td className="border-b-2 p-4 dark:border-dark-5">
                Igor
            </td>
            <td className="border-b-2 p-4 dark:border-dark-5">
                Louth
            </td>
            <td className="border-b-2 p-4 dark:border-dark-5">
                IGL89_9
            </td>
        </tr>
    </tbody>
</table>

    </div>


  )
}

export default Dashboard