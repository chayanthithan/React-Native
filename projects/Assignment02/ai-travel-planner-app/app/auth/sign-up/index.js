import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './../../../configs/FirebaseConfig';

export default function SignUp() {
    const navigation = useNavigation();
    const router = useRouter();

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [fullname,setFullName] = useState();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);
// it is used to show message on any platform
    const showToast = (message) => {
        if (Platform.OS === 'android') {
          ToastAndroid.show(message, ToastAndroid.LONG);
        } else {
          alert(message); // Using alert as fallback for non-Android platforms
        }
      };

    const onCreateAccount = () => {
        if (!email || !password || !fullname) {
            showToast('Please enter all the details');
            return;
          }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                router.replace('/mytrip')
                const user = userCredential.user;
                console.log("user:",user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("errorCode:",errorCode);
                console.log("errorMessage:",errorMessage);
                // ..
            });
    }

    return (
        <View
            style={{
                padding: 25,
                paddingTop: 30,
                backgroundColor: 'white',
                height: '100%'
            }}
        >
            <TouchableOpacity
                onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    marginTop: 30
                }}
            >Create New Account</Text>
            {/* full name */}
            <View style={{ marginTop: 50 }}>
                <Text style={{ padding: 10 }}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value)=>setFullName(value)}
                    placeholder='Enter Full Name'></TextInput>
            </View>
            {/* email */}
            <View style={{ marginTop: 10 }}>
                <Text style={{ padding: 10 }}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value)=>setEmail(value)}
                    placeholder='Enter Email'></TextInput>
            </View>
            {/* password */}
            <View style={{ marginTop: 10 }}>
                <Text style={{ padding: 10 }}>Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(value)=>setPassword(value)}
                    placeholder='Enter Password'></TextInput>
            </View>
            {/* sign-in */}
            <TouchableOpacity 
            onPress={onCreateAccount}
            style={{
                padding: 20,
                backgroundColor: 'black',
                borderRadius: 15,
                marginTop: 150
            }}>
                <Text
                    style={{
                        color: 'white',
                        textAlign: 'center'
                    }}
                >Create Account</Text>
            </TouchableOpacity>
            {/* create Account */}
            <TouchableOpacity
                onPress={() => router.replace('auth/sign-in')}
                style={{
                    padding: 20,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    marginTop: 30,
                    borderWidth: 1
                }}>
                <Text
                    style={{
                        color: 'black',
                        textAlign: 'center'
                    }}
                >Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        color: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        padding: 15
    }
})