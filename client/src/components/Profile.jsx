import { useState, useEffect } from "react";
import "../CSS/Profile.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { current } from "../JS/Actions/user";

const Profile = () => {
  const userData = useSelector((state) => state?.user?.user);
  const [user, setUser] = useState({
    username: userData?.username || "",
    email: userData?.email || "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  useEffect(() => {
    if (userData) {
      setUser({
        username: userData.username,
        email: userData.email,
        password: "",
      });
    }
  }, [userData]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditClick = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(`/api/user/${userData?._id}`, user, {
        headers: {
          Authorization: token,
        },
      });
      setSuccess("Profile updated successfully");
      setError("");
    } catch (error) {
      setError("Error updating profile");
      setSuccess("");
    }
  };

  return (
    <div className="container-bg">
      <form className="form" onSubmit={handleEditClick}>
        <label htmlFor="username" className="form__label">
          Username
        </label>
        <input
          type="text"
          placeholder="Username"
          className="form__input"
          id="username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />

        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          className="form__input"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <label htmlFor="password" className="form__label">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="form__input"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />

        <button className="buttonP" type="submit">
          Submit
        </button>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default Profile;