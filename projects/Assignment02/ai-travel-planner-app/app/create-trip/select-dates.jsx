import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Platform, Alert, StyleSheet } from 'react-native';
import { Link, useNavigation, useRouter } from 'expo-router';
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext';
import { Calendar } from 'react-native-calendars';

export default function SelectDates() {
    const navigation = useNavigation();
    const router = useRouter();
    const [selectedRange, setSelectedRange] = useState({});
    const { tripData, setTripData } = useContext(CreateTripContext);

    const showToast = (message) => {
        if (Platform.OS === 'android') {
            Alert.alert('Notice', message);
        } else {
            alert(message); // Using alert as fallback for non-Android platforms
        }
    };

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        });
    }, []);

    useEffect(() => {
       console.log('tripdata date:',tripData)
    }, [tripData]);

    const onDateSelectionContinue = () => {
        if (!selectedRange.startDate || !selectedRange.endDate) {
            showToast('Please select start and end dates.');
            return;
        }

        const totalNumOfDays = moment(selectedRange.endDate).diff(moment(selectedRange.startDate), 'days') + 1;
        // setTripData({
        //     ...tripData,
        //     startDate: selectedRange.startDate,
        //     endDate: selectedRange.endDate,
        //     totalNumOfDays
        // });
        setTripData(() => ({
            ...tripData,
            startDate: selectedRange.startDate,
            endDate: selectedRange.endDate,
            totalNumOfDays
        }));
        router.push('/create-trip/select-budget');
    };

    const onDayPress = (day) => {
        const { dateString } = day;
        if (!selectedRange.startDate || selectedRange.endDate) {
            // Start a new range selection
            setSelectedRange({ startDate: dateString, endDate: null });
        } else {
            // End the range selection
            setSelectedRange((prev) => ({ ...prev, endDate: dateString }));
        }
    };

    const getMarkedDates = () => {
        const markedDates = {};
        if (selectedRange.startDate) {
            markedDates[selectedRange.startDate] = {
                startingDay: true,
                color: 'black',
                textColor: 'white'
            };
        }
        if (selectedRange.endDate) {
            markedDates[selectedRange.endDate] = {
                endingDay: true,
                color: 'black',
                textColor: 'white'
            };

            // Highlight the days in between
            const start = moment(selectedRange.startDate);
            const end = moment(selectedRange.endDate);
            let current = start.clone();

            while (current.isBefore(end, 'day')) {
                const dateString = current.format('YYYY-MM-DD');
                if (!markedDates[dateString]) {
                    markedDates[dateString] = { color: 'gray', textColor: 'white' };
                }
                current.add(1, 'day');
            }
        }
        return markedDates;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel Dates</Text>
            <Calendar
                markingType="period"
                markedDates={getMarkedDates()}
                onDayPress={onDayPress}
                minDate={moment().format('YYYY-MM-DD')}
                theme={{
                    selectedDayBackgroundColor: 'black',
                    selectedDayTextColor: 'white',
                    todayTextColor: 'red',
                    arrowColor: 'black'
                }}
            />
            {/* <Link href={'/create-trip/select-dates'}> */}
                <TouchableOpacity onPress={onDateSelectionContinue} style={styles.button}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            {/* </Link> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        paddingTop: 50,
        backgroundColor: 'white',
        height: '100%'
    },
    title: {
        fontSize: 35,
        marginTop: 20,
        fontWeight: 'bold'
    },
    button: {
        padding: 15,
        backgroundColor: 'black',
        borderRadius: 15,
        marginTop: 25,
        textAlign: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
});
