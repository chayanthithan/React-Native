// import { View, Text, FlatList, Image } from 'react-native'
// import React from 'react'

// export default function HotelList({ hotelList }) {
//     return (
//         <View style={{
//             marginTop: 20
//         }}>
//             <Text style={{
//                 fontFamily: 'bold',
//                 fontSize: 20
//             }}>Hotel Recommendation</Text>
//             <FlatList
//                 style={{
//                     marginTop: 7,
//                 }}
//                 horizontal={true}
//                 showsHorizontalScrollIndicator={false}
//                 data={hotelList}
//                 renderItem={({ item, index }) => (
//                     <View style={{
//                         marginRight: 20,
//                         width:180

//                     }}>
//                         <Image source={require('./../../assets/images/hotel.png')}
//                             style={{
//                                 width: 180,
//                                 height: 120,
//                                 borderRadius: 15
//                             }}
//                         />
//                         <View>
//                             <Text style={{
//                                 fontFamily:'medium',
//                                 fontSize:17
//                             }}>{item.hotelName}</Text>

//                         <View>
//                             <Text style={{
//                                 fontFamily:'medium',
//                                 fontSize:17
//                             }}>{item.rating}</Text>
//                         </View>
//                         </View>
//                     </View>
//                 )}
//             ></FlatList>
//         </View>
//     )
// }