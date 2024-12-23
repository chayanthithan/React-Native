// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './contexts/UserContext';
import { NotesProvider } from './contexts/NotesContext';

import LoginPage from './screens/LoginPage';
import RegistrationPage from './screens/RegistrationPage';
import HomePage from './screens/HomePage';
import AddNotePage from './screens/AddNotePage';
import ViewNotePage from './screens/ViewNotePage';

const Stack = createStackNavigator();

export default function App() {
    return (
            <UserProvider>
                <NotesProvider>
                    <Stack.Navigator initialRouteName="Login">
                        <Stack.Screen name="Login" component={LoginPage} />
                        <Stack.Screen name="Register" component={RegistrationPage} />
                        <Stack.Screen name="Home" component={HomePage} />
                        <Stack.Screen name="AddNote" component={AddNotePage} />
                        <Stack.Screen name="ViewNote" component={ViewNotePage} />
                    </Stack.Navigator>
                </NotesProvider>
            </UserProvider>
    );
}
