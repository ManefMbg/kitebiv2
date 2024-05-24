import { useState } from "react";
import "../CSS/Login.css";
import { login, register } from "../JS/Actions/user"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  
  const signupSubmit = async (e) => {
    e.preventDefault();
    dispatch(register({ username, email, password }))
    localStorage.getItem('token')?
    navigate('/'): navigate('/login')

  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login({ email, password }))
    localStorage.getItem('token')?
    navigate('/'): navigate('/login')

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