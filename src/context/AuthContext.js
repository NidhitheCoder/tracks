import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const AuthReducer = (state, action) => {
  switch (action.type) {
      case 'add_error':
          return {...state,errorMessage:action.payload};
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
    } catch (err) {
      dispatch({type:'add_error',payload:'Something went wrong with signup'})
    }
  };
};

const signin = dispatch => {
  return ({ email, password }) => {
    // Trying to sign in.
    // Handle by success by updating state.
    // Handle failure by showing error message someware.
  };
};

const signout = dispatch => {
  return () => {
    // somehow signout
  };
};

export const { Provider, Context } = createDataContext(
  AuthReducer,
  { signin, signout, signup },
  { isSignedIn: false,errorMessage:'' }
);
