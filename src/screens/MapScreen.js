import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapScreen = () => {
  
  // Definindo a função fora do JSX
  const generateMapLink = (coordinates) => {
    return `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`;
  };

  // Exemplo de uso da função generateMapLink
  const coordinates = { lat: -23.550520, lng: -46.633308 }; // Exemplo de coordenadas
  const mapLink = generateMapLink(coordinates); // Aqui você pode gerar o link do mapa
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa de Pontos de Coleta</Text>
      <Text>Carregando mapa...</Text>
      {/* Exemplo de como exibir o link gerado */}
      <Text>{mapLink}</Text>
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
