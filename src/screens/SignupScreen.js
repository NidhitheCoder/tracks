import React from "react";
import { View, Text, StyleSheet,Button } from "react-native";

const SignUpScreen = ({navigation}) => {
  return (
    <>
      <Text>Signup Screen</Text>
      <Button title="Go to Signin" onPress={()=>navigation.navigate("Signin")} />
      <Button title="Go to main Flow" onPress={()=>navigation.navigate('mainFlow')} />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
