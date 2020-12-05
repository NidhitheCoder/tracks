import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <View style={styles.containerStyle}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={newEmail => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
      secureTextEntry
       label="Password"
       value={Password} 
       onChangeText={setPassword} 
       autoCapitalize="none"
       autoCorrect={false}
       />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  );
};

// In this section the password onChangeText directly apply new password to setEmail state.
// Only write for study purpose.
SignUpScreen.navigationOptions = () => {
  return {
    header: null
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
