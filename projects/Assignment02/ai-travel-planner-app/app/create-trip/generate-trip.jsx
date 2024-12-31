import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_PROMPT } from '../../constants/options';

export default function GenerateTrip() {

    const navigation = useNavigation();
    const [tripData,setTripData] = useContext(CreateTripContext)
    
    useEffect(()=>{
        tripData&&GenerateAiTrip()
    },[tripData])


    const GenerateAiTrip=()=>{
        const FINAL_PROMPT = AI_PROMPT
        .replace('{location}',tripData?.locationInfo?.name || '')
        .replace('{totaldays}',tripData?.totalNumOfDays || '0')
        .replace('{totalnights}',tripData?.totalNumOfDays-1 || '0')
        .replace('{budget}',tripData?.budget || '0')
        // .replace('{location}',tripData?.locationInfo?.name)
        
        console.log('final prompt:',FINAL_PROMPT)
    }
    
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, [])

    return (
        <View style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: 'white',
            height: '100%'
        }}>
            <Text style={{
                fontFamily: 'bold',
                fontSize: 35,
                textAlign: 'center'
            }}>Please Wait.......</Text>

            <Text style={{
                fontFamily: 'bold',
                fontSize: 20,
                textAlign: 'center',
                marginTop: 40,
                marginBottom: 10
            }}>We are working to generate your dream trip</Text>
            <Image source={require('./../../assets/images/756bd903fe3c0c50e3bd3940c640b043.gif')}
                style={{
                    width: '50%',
                    height: 200,
                    objectFit: 'cover',
                    borderRadius:'50%',
                    marginLeft:100,
                    marginTop:150
                }}
            />
            {/* <Image source={require('./../../assets/images/giphy.gif')}/> */}
            <Text style={{
                color: 'gray',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 20,
                padding:10
            }}>Don't go back</Text>
        </View>
    )
}