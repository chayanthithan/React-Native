import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

export default function searchPlace() {
    const navigation = useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'search'
        })
    },[]);

  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:'white',
        height:'100%'
    }}>
      <Text>search-place</Text>
    </View>
  )
}