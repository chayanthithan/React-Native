import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Login from '../components/Login'
import Registration from '../components/Registration'
import Home from '../components/Home'
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router'

export class App extends Component {
  render() {
    return (
      // <View>
      //   <Login/>
      // </View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Registration} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App