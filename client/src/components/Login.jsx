import { useState } from 'react'
import '../CSS/Login.css'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginSubmit = (e) => {
	console.log(e.target.elements)
	axios.post("http://localhost:3001/auth/login", {email: e.target.elements.email.value, password: e.target.elements.password.value})
	e.preventDefault()
  }
  

  const signupSubmit = () => {
    console.log(username, email, password)
  }
  return (

    <div className="body">
    <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="signup">
				<form>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="username" placeholder="User name" required="" onChange={(e) => setUsername(e.target.value)} />
					<input type="email" name="email" placeholder="Email" required="" onChange={(e) => setEmail(e.target.value)}/>
					<input type="password" name="password" placeholder="Password" required="" onChange={(e) => setPassword(e.target.value)}/>
					<button onClick={signupSubmit}>Sign up</button>
				</form>
    
			</div>

			<div className="login">
				<form onSubmit={loginSubmit}>
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="password" placeholder="Password" required="" />
					<button>Login</button>
				</form>
			</div>
	</div>
  </div>
  )
} 

export default Login