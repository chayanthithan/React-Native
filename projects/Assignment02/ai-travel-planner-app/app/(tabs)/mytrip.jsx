import { View, Text } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import StartNewTripCard from '../../components/MyTrip/StartNewTripCard';

export default function MyTrip() {

  const [userTrips, setUserTrip] = useState([]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: 'white',
        height: '100%'
      }}
    >
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
      }}>
        <Text
          style={{
            fontFamily: 'serif',
            fontSize: 35
          }}
        >MyTrip</Text>
        <MaterialIcons name="add-circle" size={24} color="black" />
      </View>
      {userTrips?.length == 0 ? <StartNewTripCard></StartNewTripCard> : null}
    </View>
  )
}