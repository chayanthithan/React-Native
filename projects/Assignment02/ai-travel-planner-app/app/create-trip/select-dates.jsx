import { View, Text, TouchableOpacity,Platform } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, router, useNavigation, useRouter } from 'expo-router';
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext';


export default function SelectDates() {

    const navigation = useNavigation();
    const router = useRouter();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const { tripData, setTripData } = useContext(CreateTripContext);
      
    const showToast = (message) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.LONG);
        } else {
            alert(message); // Using alert as fallback for non-Android platforms
        }
    };

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, []);
    const OnDateSelectionContinue = () => {
        if (!startDate && !endDate) {
            showToast('Please select Start and End dates');
            return;
        }
        const totalNumOfDays = moment(endDate).diff(moment(startDate), 'days');;
        console.log('totalNumOfDates:',totalNumOfDays+1)
        setTripData({
            ...tripData,
            startDate:startDate,
            endDate:endDate,
            totalNumOfDays:totalNumOfDays+1
        });
        router.push('/create-trip/select-budget')
    }
    const onDateChange = (date, type) => {
        if (type == 'START_DATE') {
            setStartDate(moment(date));
        }
        if (type == 'END_DATE') {
            setEndDate(moment(date));
        }
    }
    return (
        <View style={{
            padding: 25,
            paddingTop: 50,
            backgroundColor: 'white',
            height: '100%'
        }}>
            <Text style={{
                fontSize: 35,
                marginTop: 20,
                fontWeight: 'bold'
            }}>Travel Dates</Text>
            <View style={{
                marginTop: 30
            }}>
                <CalendarPicker
                    selectedRangeStyle={{
                        backgroundColor: 'black',
                    }}
                    selectedDayTextStyle={{
                        color: 'white'
                    }}
                    minDate={new Date()}
                    maxRangeDuration={5} //only 5 days we can select
                    allowRangeSelection={true}
                    onDateChange={onDateChange} />
            </View>
            {/* <Link href={'/create-trip/select-dates'} > */}
            <TouchableOpacity
                onPress={OnDateSelectionContinue}
                style={{
                    padding: 15,
                    backgroundColor: 'black',
                    borderRadius: 15,
                    marginTop: 25,
                    textAlign: 'center'
                }}>
                <Text style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 20
                }}>Continue</Text>
            </TouchableOpacity>
            {/* </Link> */}
        </View>
    )
}