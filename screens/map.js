import React, { useEffect, useState } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet, View, Button, Alert, Text, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Location from 'expo-location';

export default function App({ navigation }) {
  const [initialRegion, setInitialRegion] = useState({
    latitude: 5.66739, // Replace with your destination latitude 5.55602
    longitude: -0.19153, // Replace with your destination longitude -0.1969
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    // Calculate directions or use a routing API (e.g., Google Directions API) to get directions
    // and update the "directions" state with the coordinates of the route.
    // For simplicity, let's assume the user's location and destination are enough to draw a straight line.
    if (userLocation && initialRegion) {
      setDirections([
        { latitude: userLocation.latitude, longitude: userLocation.longitude },
        { latitude: initialRegion.latitude, longitude: initialRegion.longitude },
      ]);
    }
  }, [userLocation, initialRegion]);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 50, margin: 10, width: '100%', flexDirection: 'row' }}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        {/* <View style={{ alignItems: 'center', justifyContent: 'center', width: '60%', marginTop: 20 }}>
          <Text style={{ fontSize: 20, color: '#FD8936', marginStart: 10 }}>{text}</Text>
        </View> */}
      </View>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {userLocation && (
          <Marker coordinate={userLocation} title="Your Location" pinColor="blue" />
        )}
        <Marker
          coordinate={{
            latitude: initialRegion.latitude,
            longitude: initialRegion.longitude,
          }}
          title="Destination"
        />
        {directions.length > 0 && (
          <Polyline
            coordinates={directions}
            strokeColor="#4CAF50" // Green line color
            strokeWidth={4} // Line width
            lineCap="round" // Line cap style
            lineDashPattern={[10, 5]} // Dashed pattern [line length, gap length]
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
