import { useState } from "react";
import "../CSS/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import {useSelector} from "redux"

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const isAdmin = useSelector(state=>state.userReducer.isAdmin)
  // const dispatch = useDispatch()

  const signupSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(username, email, password);
      const result = await axios.post("http://localhost:3001/auth/signup", { username, email, password });
      navigate("/login"); 
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(username, email, password);
      const result = await axios.post("http://localhost:3001/auth/login", {email,password})
      navigate("/")
      console.log(result);
    } catch (error) {
      console.log(error)
    }

    // dispatch{login{(email,password)}}

  }


  return (
    <div className="body">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="username"
              placeholder="User name"
              required=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signupSubmit}>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={loginSubmit}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;