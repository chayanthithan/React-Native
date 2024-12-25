import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{headerShown:false}}
    >
        <Tabs.Screen name="mytrip"
        options={{
          tabBarLabel:'My Trip',
          tabBarIcon:({color})=><Entypo name="location-pin" size={24} color={color} />

        }}
        ></Tabs.Screen>
        <Tabs.Screen name="discover"
        options={{
          tabBarLabel:'Discover',
          tabBarIcon:({color})=><FontAwesome name="globe" size={24} color={color} />

        }}
        ></Tabs.Screen>
        <Tabs.Screen name="profile"
        options={{
          tabBarLabel:'Profile',
          tabBarIcon:({color})=><FontAwesome name="user-circle" size={24} color={color} />

        }}
        ></Tabs.Screen>
    </Tabs>
  )
}