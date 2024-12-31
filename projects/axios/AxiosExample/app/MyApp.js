import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const MyApp = () => {
    const[loading,setLoading]=useState(false)
    const[post,setPost]=useState([])

    useEffect(()=>{
        const loadPost = async()=>{
            setLoading(true)
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/");
            setPost(response.data);
        }
        loadPost();
    },[])
  return (
    // <View>
    //   <Text>MyApp</Text>
    // </View>
    <>
    {
        loading ? (<h3>loading ....</h3>) : (post.map(item=>(<h3>{item.title}</h3>)))
    }
    </>
  )
}

export default MyApp

const styles = StyleSheet.create({})