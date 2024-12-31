import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Home =()=> {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={require('./../assets/images/waving-hand.gif')}/>       
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text>chayankumar</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Centers the content vertically
        alignItems: 'center', // Centers the content horizontally
    },
    imageStyle:{
        width:400,
        height:400,
    },
    welcomeText:{
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center',
        color:'purple'

    }
});