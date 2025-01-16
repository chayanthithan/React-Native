import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment';
import { useRouter } from 'expo-router';
import UserTripCard from './UserTripCard';

export default function UserTripList({userTrips}) {

  const LatestTrip = JSON.parse(userTrips[0].tripData)
  const router = useRouter();
  return (
    <View>
      <Image source={require('./../../assets/images/pexels-pixabay-237272.jpg')}
        style={{
          width: '100%',
          height: 240,
          objectFit: 'cover',
          borderRadius: 15
        }}
      />
      <View style={{
        marginTop: 10
      }}>
        <Text style={{
          fontFamily: 'medium',
          fontSize: 24
        }}>
          {JSON.parse(userTrips[0]?.tripData)?.locationInfo?.country},
          {JSON.parse(userTrips[0]?.tripData)?.locationInfo?.city}</Text>
        <Text style={{
          fontFamily: 'medium',
          fontSize: 24,
          color:'gray'
        }}>{moment(LatestTrip.startDate).format('DD MMM yyyy')}
        </Text>
        <Text style={{
          fontFamily: 'medium',
          fontSize: 17,
          color:'gray'
        }}>{LatestTrip.traveler.title}</Text>
        <TouchableOpacity 
        onPress={()=>router.push({pathname:'/trip-details',params:{
          tripData:userTrips[0]
        }})}
        style={{
          backgroundColor:'black',
          padding:15,
          borderRadius:15,
          marginTop:10
        }}>
          <Text style={{
            color:'white',
            textAlign:'center',
            fontSize:15
          }}>See your plan</Text>
        </TouchableOpacity>
      </View>
        {userTrips.map((trip, index) => (
  <UserTripCard trip={trip} key={index} />
))}

    </View>
  )
}