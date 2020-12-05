import createDataContext from "./createDataContext";

const AuthReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup= (dispatch) => {
    return ({email,password}) => {
        // make api request to sign up  with that email and password.
        // if we sign up, modify our state. and say that we are authonticated
        // if signin up fails, we probably  need to reflect  an error message someware.

    }
};

const signin = (dispatch) => {
    return ({email,password}) => {
        // Trying to sign in.
        // handle by success by updating state.
        // handle failure by showing error message someware.
    }
};

const signout = (dispatch) => {
    return ()=>{
        // somehow signout
    }
}

export const { Provider, Context } = createDataContext(
  AuthReducer,
  {signin,signout,signup},
  { isSignedIn: false }
);
