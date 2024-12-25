import { View, Text } from 'react-native'
import React from 'react'

export default function OptionCard({ option }) {
  return (
    <View style={{
      padding: 25,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#D3D3D3',
      borderRadius: 15
    }}>
      <View >
        <Text style={{
          fontSize: 22,
          fontWeight: 'bold'
        }}>{option?.title}</Text>

        <Text style={{
          fontSize: 17,
          color: 'gray'
        }}>{option?.desc}</Text>

        <Text style={{
          fontSize: 17,
          color: 'gray'
        }}>{option?.people}</Text>
      </View>
      <View>
        <Text style={{
          fontSize: 50,
          color: 'gray'
        }}>{option?.icon}</Text>
      </View>
    </View>
  )
}