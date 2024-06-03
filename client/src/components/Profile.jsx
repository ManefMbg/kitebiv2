
import "../CSS/Profile.css";

const Profile = () => {
  

  return (
    <div>

   <div className="container">
      <form action="" className="form">
      
        <label htmlFor="username" className="form__label">username</label>
        <input type="text" placeholder="UserName" className="form__input" id="username" />

        <label htmlFor="email" className="form__label">email</label>
        <input type="email" placeholder="Email" className="form__input" id="email" />

        <label htmlFor="subject" className="form__label">password</label>
        <input type="text" placeholder="Password" className="form__input" id="Password" />

        <button className="buttonP" onClick={() => handleEditClick(user)}>Submit</button>
      
      </form>
    </div>
  </div>
  )
}

export default Profile