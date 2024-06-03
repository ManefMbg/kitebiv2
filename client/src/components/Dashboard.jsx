import "../CSS/Container.css";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../JS/Actions/user";

axios.defaults.baseURL = "http://localhost:3001/";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listUsers = useSelector((state) => state.user.listUsers);
  console.log(listUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);



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
            {listUsers?.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.username}</td>
                  <td>{el.email}</td>
                  <td>
              
                    <button className="btn btn-delete" onClick={() => dispatch(deleteUser(el._id))}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;