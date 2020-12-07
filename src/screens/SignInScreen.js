import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignInScreen = () => {
  return (
    <View style={styles.containerStyle}>
    <AuthForm
    headerText="Sign in to Your Account"
    errorMessage=""
    onSubmit={()=>{}}
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
