import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const LoginScreen = () => {

    const router = useRouter();

  return (
    <View style={{height:'100%',width:'100%'}}>
      <Image source={require('./../assets/images/flight.png')}
      style={{width:'100%',height:550}}
      ></Image>
      <View style={styles.container}>
        <Text style={{
            fontSize:30,
            fontFamily:'sans',
            textAlign:'center',
            fontWeight:'bold',
            marginTop:20
        }}>
            AI Travel Planner
        </Text>
        <Text style={{
            fontFamily:'serif',
            fontSize:20,
            textAlign:'center',
            color:'gray',
            padding:10,
            marginTop:20
        }}>
            "Travel opens our hearts and minds, allowing us to embrace the beauty of the world. With each journey, we discover new horizons, create lasting memories, and connect with the diverse tapestry of humanity."
            ✈️
        </Text>
        <TouchableOpacity style={styles.button}
        onPress={()=>router.push('auth/sign-in')}
        >
            <Text style={{
                color:'white',
                textAlign:'center',
                fontFamily:'serif',
                fontSize:20
            }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        marginTop:-20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        height:'100%',
        padding:15
    },
    button:{
        padding:15,
        backgroundColor:'black',
        borderRadius:99,
        marginTop:'11%'
    }
})