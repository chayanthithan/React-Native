import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { CreateTripContext } from '../../context/CreateTripContext';
import moment from 'moment';
export default function ReviewTrip() {

    const navigation = useNavigation();
    const router = useRouter();
    const { tripData, setTripData } = useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, [])
    useEffect(() => {
        console.log("tripData trip review:", tripData)
      }), [tripData]
    
    return (
        <View style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: 'white',
            height: '100%'
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 35
            }}>Review your trip</Text>
            <View>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color:'gray',
                    textAlign:'justify',
                    marginBottom:30,
                    marginTop:10
                }}>
                    Before generating your trip, please review your selection
                </Text>

                {/* Date Selection */}

                <View style={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    gap: 20
                }}>
                    {/* <Ionicons name="location" size={34} color="black" /> */}
                    <View style={{
                        borderWidth:1,
                        borderRadius:10,
                        height:'100%',
                        width:'20%',padding:10,
                        }}>
                        <Text style={{
                            fontSize: 30,
                        
                        }}>📅 </Text>
                    </View>
                    <View style={{
                        borderWidth:1,
                        borderRadius:10,
                        height:'100%',
                        width:'75%',padding:10
                        }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 25,
                            color: 'gray'
                        }}>Destination</Text>
                        <Text style={{
                            fontWeight: 'medium',
                            fontSize: 20,
                            borderWidth:1,
                            borderRadius:10,
                            color:'white',
                            backgroundColor:'black',
                            padding:5,
                            textAlign:'center',
                            marginTop:5
                        }}>{tripData?.locationInfo?.country}</Text>
                        <Text style={{
                            fontWeight: 'medium',
                            fontSize: 20,
                            borderWidth:1,
                            borderRadius:10,
                            color:'white',
                            backgroundColor:'black',
                            padding:5,
                            textAlign:'center',
                            marginTop:5
                        }}
                        >{tripData?.locationInfo?.city}</Text>
                        <Text style={{
                            fontWeight: 'medium',
                            fontSize: 20,
                            borderWidth:1,
                            borderRadius:10,
                            color:'white',
                            backgroundColor:'black',
                            padding:5,
                            textAlign:'center',
                            marginTop:5
                        }}>{tripData?.locationInfo?.place}</Text>

                    </View>
                </View>

                {/* Date */}

                <View style={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    gap: 20
                }}>
                    {/* <Ionicons name="location" size={34} color="black" /> */}
                    <View style={{
                        borderWidth:1,
                        borderRadius:10,
                        height:'100%',
                        width:'20%',padding:10
                        }}>
                        <Text style={{
                            fontSize: 30,
                        }}>🏖️</Text>
                    </View>
                    <View style={{
                        borderWidth:1,
                        borderRadius:10,
                        height:'100%',
                        width:'75%',padding:10
                        }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 25,
                            color: 'gray'
                        }}>Travel Dates</Text>
                        <Text style={{
                            fontWeight: 'medium',
                            fontSize: 20,
                            borderWidth:1,
                            borderRadius:10,
                            color:'white',
                            backgroundColor:'black',
                            padding:5,
                            textAlign:'center',
                            marginTop:5
                        }}>{moment(tripData?.startDate).format('DD MMM') + ' To ' +
                            moment(tripData?.endDate).format('DD MMM') + ' '}({tripData?.totalNumOfDays} Days)</Text>

                    </View>

                </View>

                {/* Travelers */}

                <View style={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    gap: 20
                }}>
                    {/* <Ionicons name="location" size={34} color="black" /> */}
                    <View style={{
                        borderWidth:1,
                        borderRadius:10,
                        height:'100%',
                        width:'20%',padding:10
                        }}>
                        <Text style={{
                            fontSize: 30,
                        }}>🧳</Text>
                    </View>
                    <View style={{
                        borderWidth:1,
                        borderRadius:10,
                        height:'100%',
                        width:'75%',padding:10
                        }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 25,
                            color: 'gray'
                        }}>Who is Traveling</Text>
                        <Text style={{
                            fontWeight: 'medium',
                            fontSize: 20,
                            borderWidth:1,
                            borderRadius:10,
                            color:'white',
                            backgroundColor:'black',
                            padding:5,
                            textAlign:'center',
                            marginTop:5
                        }}>{tripData?.traveler?.title}</Text>

                    </View>

                </View>

                {/* Budget */}

                <View style={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    gap: 20
                }}>
                    {/* <Ionicons name="location" size={34} color="black" /> */}
                    <View style={{
                        borderWidth:1,
                        borderRadius:10,
                        height:'100%',
                        width:'20%',padding:10
                        }}>
                        <Text style={{
                            fontSize: 30,
                        }}>💰</Text>
                    </View>
                    <View style={{
                        borderWidth:1,
                        borderRadius:10,
                        height:'100%',
                        width:'75%',padding:10
                        }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 25,
                            color: 'gray'
                        }}>Budget</Text>
                        <Text style={{
                            fontWeight: 'medium',
                            fontSize: 20,
                            borderWidth:1,
                            borderRadius:10,
                            color:'white',
                            backgroundColor:'black',
                            padding:5,
                            textAlign:'center',
                            marginTop:5
                        }}>{tripData?.budget}</Text>

                    </View>

                </View>

            </View>
            {/* <Link href={'/create-trip/select-dates'} > */}
            <TouchableOpacity
                onPress={()=>router.replace('/create-trip/generate-trip')}
                style={{
                    padding: 15,
                    backgroundColor: 'black',
                    borderRadius: 15,
                    marginTop: 50,
                    textAlign: 'center'
                }}>
                <Text style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 20
                }}>Build My Trip</Text>
            </TouchableOpacity>
            {/* </Link> */}
        </View>
    )
}