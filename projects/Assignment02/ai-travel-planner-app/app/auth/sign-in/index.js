import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from './../../../configs/FirebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
    const navigation = useNavigation();
    const router = useRouter();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // remove the header
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    // for show error message in any platform
    const showToast = (message) => {
            if (Platform.OS === 'android') {
              ToastAndroid.show(message, ToastAndroid.LONG);
            } else {
              alert(message); // Using alert as fallback for non-Android platforms
            }
          };
    const onSignInAccount = () => {
        if (!email || !password ) {
            showToast('Please enter all the details');
            return;
          }
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                router.replace('/mytrip');
                console.log('successfully logged');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
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
                    fontFamily: 'serif',
                    fontSize: 30,
                    marginTop: 30
                }}
            >Let's Sign You In</Text>
            <Text
                style={{
                    fontFamily: 'serif',
                    fontSize: 30,
                    color: 'gray',
                    marginTop: 20
                }}
            >Welcome Back</Text>
            <Text
                style={{
                    fontFamily: 'serif',
                    fontSize: 30,
                    color: 'gray',
                    marginTop: 20
                }}
            >You've been missed</Text>
            {/* email */}
            <View style={{ marginTop: 50 }}>
                <Text style={{ padding: 10 }}>Email</Text>
                <TextInput
                onChangeText={(value)=>setEmail(value)}
                    style={styles.input}
                    placeholder='Enter Email'></TextInput>
            </View>
            {/* password */}
            <View style={{ marginTop: 10 }}>
                <Text style={{ padding: 10 }}>Password</Text>
                <TextInput
                onChangeText={(value)=>setPassword(value)}
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder='Enter Password'></TextInput>
            </View>
            {/* sign-in */}
            <TouchableOpacity
                onPress={onSignInAccount}
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
                >Sign In</Text>
            </TouchableOpacity>
            {/* create Account */}
            <TouchableOpacity
                onPress={() => router.replace('auth/sign-up')}
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
                >Create Account</Text>
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