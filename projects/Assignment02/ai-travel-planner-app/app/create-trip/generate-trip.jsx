import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { AI_PROMPT } from '../../constants/options';
import { CreateTripContext } from './../../context/CreateTripContext'
import { chatSession } from '../../configs/AiModal';
import { doc, setDoc } from "firebase/firestore"; 
import {auth,db} from './../../configs/FirebaseConfig'
export default function GenerateTrip() {

    const navigation = useNavigation();
    const { tripData, setTripData } = useContext(CreateTripContext);
    const [ loading, setLoading ] = useState(false);
    const router = useRouter()
    const user = auth.currentUser
    useEffect(()=>{
        GenerateAiTrip()
    },[])


    const GenerateAiTrip =async () => {
        setLoading(true);
        const FINAL_PROMPT = AI_PROMPT
        .replace('{location}',tripData?.locationInfo?.country || '')
        .replace('{totaldays}',tripData?.totalNumOfDays || '0')
        .replace('{totalnights}',tripData?.totalNumOfDays-1 || '0')
        .replace('{budget}',tripData?.budget || '0')
        // .replace('{location}',tripData?.locationInfo?.name)
        
        console.log('final prompt:',FINAL_PROMPT)
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());
    setLoading(false);
    const docId = (Date.now()).toString();
    const tripResonse = JSON.parse(result.response.text());
    
    // Add a new document in collection "cities"
    const result_ = await setDoc(doc(db, "UserTrips", docId), {
      userEmail:user.email,
      tripPlan:tripResonse,//AI result
      tripData:JSON.stringify(tripData), //user Input
        docId:docId
    })
    
    router.push('(tabs)/mytrip')
  
    
    
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