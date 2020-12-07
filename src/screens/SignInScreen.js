import React,{useContext}from "react";
import { View, StyleSheet, Text } from "react-native";
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context as AuthContext} from '../context/AuthContext';

const SignInScreen = () => {
  const {state,signin} = useContext(AuthContext);
  return (
    <View style={styles.containerStyle}>
    <AuthForm
    headerText="Sign in to Your Account"
    errorMessage={state.errorMessage}
    onSubmit={signin}
    submitButtonText="Sign In"
    />
    <NavLink
     text="Dont have an account ? Sign up Instead!" 
     routeName="Signup"
     />
    </View>
  );
};

SignInScreen.navigationOptions=() =>{
  return  {headerShown:false};
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    justifyContent:"center",
    marginBottom:50
  }
});

export default SignInScreen;
