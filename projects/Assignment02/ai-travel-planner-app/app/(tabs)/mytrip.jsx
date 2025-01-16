import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import StartNewTripCard from '../../components/MyTrip/StartNewTripCard';
import { auth,db } from '../../configs/FirebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import UserTripList from '../../components/MyTrip/UserTripList';

export default function MyTrip() {

  const [userTrips, setUserTrips] = useState([]);
  const user = auth.currentUser
  const [loading,setLoading] = useState(false);


useEffect(()=>{
  user&&GetMyTrips();
},[user])

  // const GetMyTrips = async () => {

  //   setLoading(true);
  //   setUserTrips([]);
  //   const q = query(collection(db, 'UserTrips'), where('userEmail', '==', user?.email));
  //   const querySnapshot = await getDocs(q);

  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, "=>", doc.data());
  //     setUserTrips(prev=>[...prev,doc.data()])
  //     console.log('UserTrips:',userTrips)
  //   })
  //   setLoading(false);
  // }

  const GetMyTrips = async () => {
    setLoading(true);
    const trips = []; // Temporary array to store trips
    const q = query(collection(db, 'UserTrips'), where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);
  
    console.log('QuerySnapshot size:', querySnapshot.size); // Debugging
    if (querySnapshot.empty) {
      console.log('No matching documents found.');
      setLoading(false);
      return;
    }

    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      trips.push(doc.data()); // Add each document to the temporary array
    });
  
    setUserTrips(trips); // Update state with the accumulated trips
    setLoading(false);
  
    console.log('UserTrips:', trips); // Log the trips for debugging
  };

  
  return (
    <ScrollView
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
        <MaterialIcons name="add-circle" size={50} color="black" />
      </View>
      {loading&&<ActivityIndicator size={'large'} color={'Black'} />}
      
      {userTrips?.length == 0? <StartNewTripCard/> : <UserTripList userTrips={userTrips} />}
    
    </ScrollView>
  )
}