import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Books from './components/Books'
import Profile from './components/Profile'





function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/profile/:id' element={<Profile/>}></Route>
      <Route path='/books' element={<Books/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
