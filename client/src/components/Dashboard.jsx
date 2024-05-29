import "../CSS/Container.css";
import axios from "axios";
import {useSelector} from "react-redux"


axios.defaults.baseURL = "http://localhost:3001/"

const Dashboard = () => {
    const listUsers = useSelector((state) => state.userReducer.listUsers)
    

  return (
    <div className="container">
        
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
                        listUsers.map((el)=>{
                            return(
                                <tr key={el.id}>
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