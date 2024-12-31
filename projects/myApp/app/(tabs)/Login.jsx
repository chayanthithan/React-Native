import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import noteImg from '@/assets/images/note_Img.jpg'
const InputField = ({ label, value, onChangeText, placeholder, style }) => {
    <View>
        <Text>{label}</Text>
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
        />
    </View>
}
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (

        <View>
            <ImageBackground
                source={noteImg}
                resizeMode='repeat'
                style={styles.image}
            >
            </ImageBackground>
            <Text>Login</Text>
            <View>
                <InputField
                    label='Username'
                    value={username}
                    onChangeText={setUsername}
                />
                <InputField
                    label='Password'
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    image: {
        // width: '100%',
        // height: '100%',
        // resizeMode:'cover',
        // flex:1

    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        fontSize: 16,
        borderRadius: 5,
    }
})