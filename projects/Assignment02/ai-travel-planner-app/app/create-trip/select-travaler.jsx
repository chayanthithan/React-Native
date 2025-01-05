import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, router, useNavigation } from 'expo-router'
import { SelectTravalesList } from '../../constants/options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from './../../context/CreateTripContext'

export default function SelectTravaler() {

  const navigation = useNavigation();
  const [selectedTraveler, setSelectedTraveler] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    })
  }, []);

  useEffect(()=>{
    setTripData({
      ...tripData,
      traveler:selectedTraveler})
      
  },[selectedTraveler])

  useEffect(()=>{
    console.log('tripdta traveler:',tripData) 
  },[tripData])

  const navigateFunction=()=>{
    router.push('/create-trip/select-dates')
  }

  return (
    <View style={{
      padding: 25,
      backgroundColor: 'white',
      paddingTop: 75,
      height: '100%'
    }}>
      <Text style={{
        fontSize: 35,
        marginTop: 10,
        fontWeight: 'bold'
      }}
      >Who's Traveling</Text>
      <View style={{
        marginTop: 20
      }}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 25,
          padding: 10,
          color: 'gray'
        }}>Choose Your Traveles</Text>
        <FlatList
          data={SelectTravalesList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveler(item)}
              style={{
                marginVertical: 10,
              }}>
              <OptionCard option={item} selectedTraveler={selectedTraveler}></OptionCard>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
      <TouchableOpacity  style={{
        padding:15,
        backgroundColor:'black',
        borderRadius:15,
        marginTop:25,
        textAlign:'center'
      }}
      
      
      onPress={navigateFunction}
      >
        <Text style={{
          textAlign:'center',
          color:'white',
          fontSize:20
        }}>Continue</Text>
      </TouchableOpacity>
      {/* </Link> */}
    </View>
  )
}