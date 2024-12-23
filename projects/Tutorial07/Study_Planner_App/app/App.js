// Study Planner App - React Native with Expo
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/HomeScreen';
import CalendarScreen from './components/CalendarScreen';
import TaskManagementScreen from './components/TaskManagementScreen';
import SettingsScreen from './components/SettingsScreen';
import { TaskProvider } from './context/TaskContext'; // Assuming you modularized TaskProvider
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TaskProvider>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Calendar" component={CalendarScreen} />
          <Tab.Screen name="Tasks" component={TaskManagementScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    </TaskProvider>
  );
}

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});
