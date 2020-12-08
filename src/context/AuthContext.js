import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return {
        ...state,
        errorMessage: "",
        token: action.payload
      };
    case "clear_errorMessage":
      return {
        ...state,
        errorMessage: ""
      };
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async() =>{
  const token = await AsyncStorage.getItem('token');
  if(token){
    dispatch({type:'signin',payload:token});
    navigate('TrackList');
  } else {
    navigate('Signup');
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: "clear_errorMessage" });
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    // navigate to main flow
    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with signup"
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign in"
    });
  }
};

const signout = dispatch => {
  return () => {
    // somehow signout
  };
};

export const { Provider, Context } = createDataContext(
  AuthReducer,
  { signin, signout, signup,clearErrorMessage,tryLocalSignin },
  { token: null, errorMessage: "" }
);
