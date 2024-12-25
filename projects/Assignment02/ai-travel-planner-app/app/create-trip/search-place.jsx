import { TextInput, FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
import { CreateTripContext } from './../../context/CreateTripContext';


export default function searchPlace() {
  const navigation = useNavigation();
  const mapboxClient = mbxGeocoding({ accessToken: 'pk.eyJ1IjoiY2hheWFua3VtYXIiLCJhIjoiY201M24wMjdpMmIyNTJqcDdpYXJkeDloZCJ9.80UvaX7Wkoo71GYeSTztKA' });
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'search'
    })
  }, []);

  useEffect(()=>{
    console.log("tripData:",tripData)
  }),[tripData]


  const searchPlaces = async (input) => {
    if (input.length > 2) {
      try {
        const response = await mapboxClient.forwardGeocode({
          query: input,
          limit: 5,
        }).send();
        const features = response.body.features.map((feature) => ({
          id: feature.id,
          name: feature.text, // Place name
          address: feature.place_name, // Full address
          coordinates: feature.geometry.coordinates, // [longitude, latitude]
          context: feature.context || [], // Additional context like city, region
          // Note: Mapbox does not provide images or URLs. You would need additional APIs for that.
        }));

        setResults(features);
      } catch (error) {
        console.error(error);
      }
    } else {
      setResults([]);
    }
  };

  const handleSelectPlace = (place) => {
    console.log('Selected Place:', place);
    setQuery(place.place_name);
    setResults([]);
    setTripData({
      locationInfo: {
        name: results.name,
        geo: results.coordinates,
        address:results.address
      }
    })
    router.push('./create-trip/select-travaler')
  };

 
  return (
    <View style={{
      padding: 25,
      paddingTop: 75,
      backgroundColor: 'white',
      height: '100%'
    }}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Search for a place"
        value={query}
        onChangeText={(text) => {
          setQuery(text);
          searchPlaces(text);
        }}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectPlace(item)}>
            <Text style={{ padding: 10 }}>{item.place_name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>

  )
}


// import React, { useState } from 'react';
// import { TextInput, FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
// import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';

// const mapboxClient = mbxGeocoding({ accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN' });

// const MapboxSearch = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const searchPlaces = async (input) => {
//     if (input.length > 2) {
//       try {
//         const response = await mapboxClient
//           .forwardGeocode({
//             query: input,
//             limit: 5,
//           })
//           .send();

//         // Extract and map results to include required details
//         const features = response.body.features.map((feature) => ({
//           id: feature.id,
//           name: feature.text, // Place name
//           address: feature.place_name, // Full address
//           coordinates: feature.geometry.coordinates, // [longitude, latitude]
//           context: feature.context || [], // Additional context like city, region
//           // Note: Mapbox does not provide images or URLs. You would need additional APIs for that.
//         }));

//         setResults(features);
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       setResults([]);
//     }
//   };

//   const handleSelectPlace = (place) => {
//     console.log('Selected Place:', place);
//     setQuery(place.name);
//     setResults([]);
//   };

//   return (
//     <View style={{ padding: 10 }}>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1,
//           marginBottom: 10,
//           paddingHorizontal: 10,
//         }}
//         placeholder="Search for a place"
//         value={query}
//         onChangeText={(text) => {
//           setQuery(text);
//           searchPlaces(text);
//         }}
//       />
//       <FlatList
//         data={results}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => handleSelectPlace(item)}>
//             <View style={{ padding: 10 }}>
//               <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
//               <Text>{item.address}</Text>
//               <Text>Coordinates: {item.coordinates.join(', ')}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// export default MapboxSearch;

