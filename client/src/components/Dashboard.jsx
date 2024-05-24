import { useEffect, useState } from "react";
import "../CSS/Container.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import axios from "axios" 

axios.defaults.baseURL = "http://localhost:3001/"

const Dashboard = () => {

const [addSection, setAddSection] = useState(false)
const [formData, setFormData] = useState({
  username : "",
  email : "",
  password : ""
})

const [dataList, setDataList] = useState([])

const handleOnChange = (e) =>{
  const {value,username} = e.target
  setFormData((preve) =>{
    return{
      ...preve,
      [username] : value
    }
  })
}

const handleSubmit = async(e) => {
  e.preventDefault()
  const data = await axios.post("/create", formData)
  console.log(data)
  if(data.data.success){
    setAddSection(false)
    alert(data.data.message)
  }

}
  
  const getFetchData = async() =>{
    const data = await axios.get("/")
    if(data.data.success){
      setDataList(data.data.data)
    }
  }

  useEffect(() => {
    getFetchData()
  }, [])
  

  return (
    <div className="container">
        <button className="button button-add" onClick={() =>setAddSection(true)}>Add</button>

{
  addSection && (

    <div className="addContainer">
        <form onSubmit={handleSubmit}>
          <div className="close-btn" onClick={() =>setAddSection(false)}><IoIosCloseCircleOutline/></div>
            <label htmlFor="username">UserName : </label>
            <input type="text" id="username" name="username" onChange={handleOnChange}/>

            <label htmlFor="email">Email : </label>
            <input type="email" id="email" name="email" onChange={handleOnChange}/>

            <label htmlFor="password">Password : </label>
            <input type="text" name="password" id="password" onChange={handleOnChange}/>

            <button className="btn2">Submit</button>
          </form>
        </div>
  )
}
      

    </div>
  )
}

export default Dashboard