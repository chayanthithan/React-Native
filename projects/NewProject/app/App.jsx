import { StyleSheet } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import Login from '../components/Login';
import Registration from '../components/Registration'; // Corrected spelling
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import './gesture-handler';
const Stack =  createStackNavigator();

const App = () => {
 
     return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
      </Stack.Navigator>
    );

}

export default App;

const styles = StyleSheet.create({});
