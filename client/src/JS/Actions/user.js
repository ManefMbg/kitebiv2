import axios from "axios";
import {CURRENT_USER, FAIL_USER, FAIL_USERS, GET_USER, GET_USERS, LOAD_USER, LOAD_USERS, LOGOUT_USER, SUCC_USER} from "../ActionTypes/user";



export const register = (newUser) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post("/auth/register", newUser);
    dispatch({ type: SUCC_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};



export const login = (user) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.post("/auth/login", user, config);

    dispatch({
      type: SUCC_USER,
      payload: {
        token: result.data.token,
        user: result.data.user,
        isAdmin: result.data.user.isAdmin,
      },
    });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};


export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/auth/current", config);
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};



// get one contact
export const getUser = (id) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.get(`/api/user/${id}`);
    dispatch({ type: GET_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.reponse });
  }
};

//Get all contact
export const getUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USERS });
  try {
    let result = await axios.get("/api/user/all");
    dispatch({ type: GET_USERS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.reponse });
  }
};


//edit contact
export const editUser = (id, newUser) => async (dispatch) => {
  try {
    await axios.put(`/api/user/${id}`, newUser);
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.reponse });
  }
};

//delete contact
export const deleteUser = (id) => async (dispatch) => {
  try {
    console.log(id)
    await axios.delete(`/api/user/${id}`);
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.reponse });
  }
};

