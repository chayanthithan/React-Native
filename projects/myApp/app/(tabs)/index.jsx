import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import coffee from "@/assets/images/coffee.jpg"
const app = () => {
    return (
        <View>
            <ImageBackground
                source={coffee}
                resizeMode='cover'
                style={styles.image}
            >
                <Text style={styles.text}>Coffee Shop</Text>
                <Link href="/contact" style={styles.link} asChild>
                    <Pressable>
                        <Text>contact us</Text>
                    </Pressable>
                </Link>
                <Link href="/Login" style={styles.link} asChild>
                    <Pressable>
                        <Text>Login</Text>
                    </Pressable>
                </Link>
                <Link href="/Registration" style={styles.link} asChild>
                    <Pressable>
                        <Text>Registration</Text>
                    </Pressable>
                </Link>
            </ImageBackground>
        </View>
    )
}

export default app

const styles = StyleSheet.create({
    container: {

    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        // resizeMode:'cover',
        // flex:1

    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 42,
        fontWeight: 'bold',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderColor: 'white'
    },
    link: {
        color: 'blue',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: 'white',
        borderColor: 'white',
        textDecorationLine: 'underline'
    }
})