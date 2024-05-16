import {
    FAIL_BOOK,
    GET_BOOK,
    GET_BOOKES,
    LOAD_BOOK,
    SUCC_BOOKES,
  } from "../ActionTypes/book";
  
  //initialState
  const initialState = {
    listbookes: [],
    bookToGet: {},
    errors: [],
    load: false,
    success: false,
  };
  
  const bookesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOAD_BOOK:
        return { ...state, load: true };
      case GET_BOOKES:
        return { ...state, listbookes: payload.bookes, load: false, success: true };
      case FAIL_BOOK:
        return { ...state, load: false, errors: payload.errors, success: false };
      case GET_BOOK:
        return { ...state, bookToGet: payload.bookes, load: false, success: true };
      case SUCC_BOOKES:
        return { ...state, success: true };
      default:
        return state;
    }
  };
  export default bookesReducer;