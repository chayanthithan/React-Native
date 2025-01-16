import { View, Text, Image } from 'react-native'
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
                setTripDetails(parsedData);
            } catch (error) {
                console.error('Failed to parse trip data:', error);
            }
        }
    }, [trip]);

    return tripDetails && (
        <View>
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
                <Text style={{
                    fontSize: 25,
                    fontFamily: 'bold'

                }}>{tripDetails.tripData?.locationInfo?.country}</Text>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 5
                }}>
                    <Text style={{
                        fontWeight: 'medium',
                        fontSize: 20,
                        color: 'gray'
                    }}>{moment(formatData(tripDetails.tripData).startDate).format('DD MMM yyyy')}</Text>
                    <Text style={{
                        fontWeight: 'medium',
                        fontSize: 20,
                        color: 'gray'
                    }}>{moment(formatData(tripDetails.tripData).endDate).format('DD MMM yyyy')}</Text>

                </View>
                    <Text style={{
                        fontWeight: 'medium',
                        fontSize: 18,
                        color: 'gray'
                    }}>{JSON.parse(trip.tripData)?.traveler?.title}</Text>

            </View>
{/* flight list */}
                    {/* <FlightInfo flightData={tripDetails.triPlan.travelPlan.flight} /> */}
{/* hotel list */}
                    {/* <HotelList hotelList={tripDetails.triPlan.travelPlan.hotel}></HotelList> */}
        </View>
    )
}