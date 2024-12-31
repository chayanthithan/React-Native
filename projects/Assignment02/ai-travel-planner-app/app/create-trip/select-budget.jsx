import { View, Text, FlatList, TouchableOpacity,Platform } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation, useRouter } from 'expo-router';
import { CreateTripContext } from '../../context/CreateTripContext';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { SelectBudgetOptions } from '../../constants/options';

export default function SelectBudget() {

    const navigation = useNavigation();
    const router  = useRouter();
    const [selectedTraveler, setSelectedTraveler] = useState();
    const { tripData, setTripData } = useContext(CreateTripContext);
    const [selectedOption,setSelectedOption] = useState();
    
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

    useEffect(() => {
        selectedOption && setTripData({
            ...tripData,
            budget:selectedOption?.title
        })
    }, [selectedOption]);

    const OnClickContinue = () =>{
        if(!selectedOption){
            showToast('Please select your budget');
            return;
        }
        router.push('/create-trip/review-trip');
    }

    return (
        <View style={{
            paddingTop:75,
            padding:25,
            backgroundColor:'white',
            height:'100%'
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 35,
                marginTop: 20,
                textAlign: 'center'
            }}>Budget</Text>
            <View>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginTop: 20,
                    textAlign: 'center'
                }}>Choose spending habits for your trip</Text>

                <FlatList
                    data={SelectBudgetOptions}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                        onPress={()=>setSelectedOption(item)}
                        style={{
                            marginVertical:10
                        }}>
                            <OptionCard option={item} selectedOption={selectedOption}></OptionCard>
                        </TouchableOpacity>
                    )}
                >

                </FlatList>

            </View>
            
                  <TouchableOpacity 
                  onPress={()=>OnClickContinue()}
                 style={{
                    padding:15,
                    backgroundColor:'black',
                    borderRadius:15,
                    marginTop:25,
                    textAlign:'center'
                  }}
                 >
                    <Text style={{
                      textAlign:'center',
                      color:'white',
                      fontSize:20
                    }}>Continue</Text>
                  </TouchableOpacity>
        </View>
    )
}