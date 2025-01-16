import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router';
import moment from 'moment';
import FlightInfo from '../../components/TripDetails/FlightInfo';
import HotelList from '../../components/TripDetails/HotelList';

export default function TripDetails() {

    const navigation = useNavigation();
    const { trip } = useLocalSearchParams();
    const [tripDetails, setTripDetails] = useState([])


    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        });
        // setTripDetails(JSON.parse(trip));
        if (trip) {
            try {
                const parsedData = JSON.parse(trip); // Try parsing the trip string
                console.log('parse Data:', trip)
                setTripDetails(parsedData);
            } catch (error) {
                console.error('Failed to parse trip data:', error);
            }
        }
    }, [trip]);

    // Safely parse JSON data
    const formatData = (data) => {
        try {
            return JSON.parse(data);
        } catch (error) {
            console.error("Failed to parse JSON:", error.message);
            return null; // Return null if parsing fails
        }
    };
    // this is for fetch and store itinerary object details which is comes from prompt
    const newItinerary = tripDetails?.tripPlan?.itinerary;
    const visit_place = tripDetails?.tripPlan?.must_visit_places;
    const hotel_list = tripDetails?.tripPlan?.dining_options;

    console.log('newItinerary:', newItinerary)
    return (tripDetails && (
        <View style={{ flex: 1 }}>
            <Image source={require('./../../assets/images/travel-img.jpg')}
                style={{
                    width: '100%',
                    height: 330
                }}
            />
            <View style={{
                padding: 15,
                backgroundColor: 'white',
                height: '100%',
                marginTop: -30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30
            }}>
                {/* <Text style={{
                    fontSize: 25,
                    fontFamily: 'bold'

                }}>{tripDetails.tripData?.locationInfo?.country}</Text> */}

                <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 5,
                    flex: 1
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%'
                    }}>
                        <Text style={{
                            width: '45%',
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginBottom: 10,
                            color: '#333',
                        }}>Distination: </Text>
                        <Text style={{
                            fontSize: 14,
                            color: '#666', padding: 5, width: '55%'
                        }}>
                            {tripDetails?.tripPlan?.trip_details?.destination || 'Unknown Country'}
                        </Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',

                    }}>
                        <Text style={{
                            width: '45%',
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginBottom: 10,
                            color: '#333',
                        }}>Duration : </Text>
                        <Text style={{
                            fontSize: 14,
                            color: '#666', padding: 5, width: '55%'
                        }}>
                            {tripDetails?.tripPlan?.trip_details?.duration || 'Unknown Country'}
                        </Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            width: '45%',
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginBottom: 10,
                            color: '#333',
                        }}>Budget : </Text>
                        <Text style={{
                            fontSize: 14,
                            color: '#666', padding: 5, width: '55%'
                        }}>
                            {tripDetails?.tripPlan?.trip_details?.budget_type || 'Unknown Country'}
                        </Text>
                    </View>
                    <ScrollView style={styles.container}>
                        <Text style={styles.dayHeader}>Must Visit Places</Text>
                        {Array.isArray(visit_place) && visit_place.length > 0 ? (
                            visit_place.map((details, index) => (
                                <View key={index} style={styles.dayContainer}>
                                    <Text style={styles.dayHeader}>{details}</Text>
                                </View>
                            ))
                        ) : (
                            <Text>No must-visit places available.</Text>
                        )}
                    </ScrollView>
                    <ScrollView style={styles.container}>
                        <Text style={styles.dayHeader}>Best Hotels </Text>
                        {Array.isArray(hotel_list) && hotel_list.length > 0 ? (
                            visit_place.map((details, index) => (
                                <View key={index} style={styles.dayContainer}>
                                    <Text style={styles.dayHeader}>{details}</Text>
                                </View>
                            ))
                        ) : (
                            <Text>No must-visit places available.</Text>
                        )}
                    </ScrollView>
                    <ScrollView style={styles.container}>
                        <Text style={styles.dayHeader}>Start to End Plan</Text>
                        {newItinerary ? Object.entries(newItinerary).map(([day, details]) => (
                            <View key={day} style={styles.dayContainer}>
                                <Text style={styles.dayHeader}>{day.toUpperCase()}</Text>
                                <Text style={styles.theme}>Theme: {details.theme}</Text>
                                {details.activities.map((activity, index) => (
                                    <View key={index} style={styles.activityContainer}>
                                        <Text style={styles.activityTime}>
                                            Time: {activity.time}
                                        </Text>
                                        <Text style={styles.activityDescription}>
                                            Description: {activity.description}
                                        </Text>
                                        {activity.accommodation_recommendation && (
                                            <Text style={styles.accommodation}>
                                                Accommodation: {activity.accommodation_recommendation}
                                            </Text>
                                        )}
                                    </View>
                                ))}
                            </View>
                        ))
                            : <Text>No Itinerary Available</Text>}
                    </ScrollView>


                    {/* <Text style={{
                        fontWeight: 'medium',
                        fontSize: 20,
                        color: 'gray'
                    }}>{moment(formatData(tripDetails.tripData).startDate).format('DD MMM yyyy')}</Text>
                    <Text style={{
                        fontWeight: 'medium',
                        fontSize: 20,
                        color: 'gray'
                    }}>{moment(formatData(tripDetails.tripData).endDate).format('DD MMM yyyy')}</Text> */}

                </View>
                {/* <Text style={{
                    fontWeight: 'medium',
                    fontSize: 18,
                    color: 'gray'
                }}>{JSON.parse(trip.tripData)?.traveler?.title}</Text> */}

            </View>
            {/* flight list */}
            {/* <FlightInfo flightData={tripDetails.triPlan.travelPlan.flight} /> */}
            {/* hotel list */}
            {/* <HotelList hotelList={tripDetails.triPlan.travelPlan.hotel}></HotelList> */}
        </View>
    )
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    dayContainer: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    dayHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    theme: {
        fontSize: 16,
        marginBottom: 10,
        color: '#555',
    },
    activityContainer: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
    },
    activityTime: {
        fontSize: 14,
        color: '#444',
    },
    activityDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    accommodation: {
        fontSize: 14,
        color: '#007BFF',
        marginTop: 5,
    },
});