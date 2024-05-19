import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Books from './components/Books'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import AddBook from './components/AddBook'




function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/books' element={<Books/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/dashboard' element={<AddBook/>}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
