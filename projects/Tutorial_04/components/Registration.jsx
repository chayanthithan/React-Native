import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Reusable InputField Component
const InputField = ({ label, value, onChangeText, placeholder, style }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={[styles.input, style]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            // keyboardType="numeric"
            />
        </View>
    );
};

const Registration = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conformPassword, setconformPassword] = useState('');
    return (
        <View style={styles.container}>

            <Image style={styles.imageStyle} source={require('./../assets/images/Screenshot_2024-10-23_220052-removebg-preview.png')} />
            <View style={styles.innerView}>
                <Text style={styles.header}>MY LOGIN APP</Text>
                <View>
                    <InputField
                        style={styles.inputWhite}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Enter your name'
                        keyboardType="default"
                    />
                    <InputField
                        style={styles.inputWhite}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Enter Your Email'
                        keyboardType="numeric"
                    />
                    <InputField
                        style={styles.inputGray}
                        value={email}
                        onChangeText={setPassword}
                        placeholder='Password'
                        keyboardType="numeric"
                    />
                    <InputField
                        style={styles.inputGray}
                        value={email}
                        onChangeText={setconformPassword}
                        placeholder='Conform Password'
                        keyboardType="numeric"
                    />
                </View>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}  onPress={() => navigation.navigate('Login')}>Sign Up</Text>
                </TouchableOpacity>
                <View>
                    <View style={styles.alreadyHave}>
                        <Text style={styles.forgotPassword}>if you have An account?</Text>
                        <Text style={styles.linkText}  onPress={() => navigation.navigate('Login')}>Sign In</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Registration

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: 710,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    innerView: {
        padding: 20,
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black',
        top:-120
       
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white'
    },
    inputContainer: {
        marginBottom: 15,
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        color: '#fff'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 50,
        fontSize: 16,
        borderRadius: 50,
        backgroundColor: 'gray',
        fontWeight: 'bold'
    },
    error: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
    result: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
        borderWidth: 1,          // Border width
        borderColor: 'white',    // Border color
        borderRadius: 10,        // Border radius for rounded corners
        padding: 10,
        backgroundColor: 'white'
    },
    scrollView: {
        padding: 20,
    },
    studentDetails: {
        flexDirection: 'column',


    },
    imageStyle: {

        width: 250,
        height: 250,
        


    },
    inputWhite: {
        color:'white',
    },
    inputGray: {
        color: '#555555'
    },
    buttonStyle: {
        height: 50,
        width: 220,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 2,
        paddingHorizontal: 10,
        fontSize: 16,
        borderRadius: 50,
        backgroundColor: 'gray',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20

    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        // borderWidth:1

    },
    alreadyHave: {
        flexDirection: 'row',
        paddingVertical: 15

    },
    forgotPassword: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'right',
        paddingVertical: 5,

    },
    linkText: {
        paddingTop: 5,
        paddingLeft: 15,
        color: 'white', // Make the text look like a link
        textDecorationLine: 'underline', // Add underline to mimic anchor tag
        textAlign: 'right'
    },
})