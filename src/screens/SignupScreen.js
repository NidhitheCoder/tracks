import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from '../components/NavLink';

const SignUpScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.containerStyle}>
    <AuthForm 
    headerText="Signup for Tracker"
    errorMessage={state.errorMessage}
    onSubmit={signup}
    submitButtonText="Sign Up"
    />
    <NavLink 
    routeName="Signin"
    text="Already have an account? Sign in instead!"
    
    />
    </View>
  );
};

// In this section the password onChangeText directly apply new password to setEmail state.
// Only write for study purpose.
SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  }
});

export default SignUpScreen;
