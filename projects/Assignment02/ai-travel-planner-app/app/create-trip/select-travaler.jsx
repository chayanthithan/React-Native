import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { SelectTravalesList } from '../../constants/options';
import OptionCard from '../../components/CreateTrip/OptionCard';
export default function SelectTravaler() {
  
    const navigation = useNavigation();
    
    useEffect(() => {
        navigation.setOptions({
          headerShown: true,
          headerTransparent: true,
          headerTitle: ''
        })
      }, []);

    return (
    <View style={{
        padding:25,
        backgroundColor:'white',
        paddingTop:75,
        height:'100%'
    }}>
      <Text style={{
        fontSize:35,
        marginTop:10,
        fontWeight:'bold'
      }}
      >Who's Traveling</Text>
      <View style={{
        marginTop:20
      }}>
        <Text style={{
            fontWeight:'bold',
            fontSize:25,
            padding:10,
            color:'gray'
        }}>Choose Your Traveles</Text>
        <FlatList
        data={SelectTravalesList}
        renderItem={({item,index})=>(
            <View style={{
                marginVertical:10,
            }}>
                <OptionCard option={item}></OptionCard>
            </View>
        )}
        ></FlatList>
      </View>
    </View>
  )
}