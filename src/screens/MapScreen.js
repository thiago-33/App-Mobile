import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const [collectionPoints, setCollectionPoints] = useState([
    // Pontos de coleta de exemplo
    { id: 1, name: 'Ponto de Coleta 1', coordinates: { latitude: -23.5225, longitude: -46.1889 } },
    { id: 2, name: 'Ponto de Coleta 2', coordinates: { latitude: -23.5235, longitude: -46.1875 } },
    { id: 3, name: 'Ponto de Coleta 3', coordinates: { latitude: -23.5245, longitude: -46.1860 } },
  ]); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa de Pontos de Coleta</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.5225, // Latitude de Mogi das Cruzes
          longitude: -46.1889, // Longitude de Mogi das Cruzes
          latitudeDelta: 0.05, // Ajuste de zoom no mapa
          longitudeDelta: 0.05,
        }}
      >
        {collectionPoints.map((point) => (
          <Marker
            key={point.id}
            coordinate={point.coordinates}
            title={point.name}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
