import React, { useEffect, useState } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet, View, Button, Alert } from 'react-native';
//import Geolocation from 'react-native-geolocation-service';

export default function App() {
  const [initialRegion, setInitialRegion] = useState({
    latitude: 5.66739, // Replace with your destination latitude 5.55602
    longitude: -0.19153, // Replace with your destination longitude -0.1969
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState([]);

  

  return (
    <View style={styles.container}>
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
