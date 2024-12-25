import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {
  
    const router = useRouter();

    return (
    <View style={{
        padding:20,
        marginTop:50,
        display:'flex',
        alignItems:'center',
        gap:25
    }}>
      <Entypo name="location-pin" size={44} color="black" />
      <Text style={{
        fontSize:25,
        fontWeight:'bold',

      }}>No trips planned yet</Text>
      <Text style={{
        fontSize:20,
        // fontFamily:'serif',
        fontWeight:'medium',
        textAlign:'center',
        color:'gray'

      }}>"Adventure is out there waiting for you start planning your dream journey today and make unforgettable memories!"</Text>
    <TouchableOpacity 
    onPress={()=>router.replace('/create-trip/search-place')}
    style={{
        padding:15,
        backgroundColor:'black',
        borderRadius:15,
        paddingHorizontal:30
    }}>
        <Text style={{
            color:'white',
            // fontFamily:'serif',
            fontSize:20,
            textAlign:'center'
        }}>Start a new trip</Text>
    </TouchableOpacity>
    </View>
  )
}