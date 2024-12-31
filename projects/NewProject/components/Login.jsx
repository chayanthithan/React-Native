import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const Login = (props) => {
  return (
    <View>
      <Text>Login</Text>
      <Button title='Login' onPress={() => props.navigation.navigate('Home')} />
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({});
