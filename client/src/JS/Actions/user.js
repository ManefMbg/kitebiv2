import axios from "axios";
import {CURRENT_USER, FAIL_USER, LOAD_USER, LOGOUT_USER, SUCC_USER} from "../ActionTypes/user";



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
    let result = await axios.get("/api/user/current", config);
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};



