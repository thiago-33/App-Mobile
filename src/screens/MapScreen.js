import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapScreen = () => {
  return (

    
    <View style={styles.container}>
      <Text style={styles.title}>Mapa de Pontos de Coleta</Text>
      <Text>Carregando mapa...</Text>
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
  },
});

export default MapScreen;
