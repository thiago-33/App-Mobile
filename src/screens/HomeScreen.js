// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Bem-vindo, Thiago!</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Qualidade do Ar: Boa</Text>
        <Text style={styles.infoText}>Emissão de Carbono: 45 ppm</Text>
      </View>
      
      <Button title="Abrir Scanner" onPress={() => navigation.navigate('Scanner')} />
      <Button title="Mapa de Pontos de Coleta" onPress={() => navigation.navigate('Map')} />
      <Button title="Perfil" onPress={() => navigation.navigate('Profile')} />      
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 90,
  },
  infoBox: {
    backgroundColor: '#e0f7fa',
    padding: 16,
    borderRadius: 8,
    marginBottom: 90,
  },
  infoText: {
    fontSize: 20,
  },
});

export default HomeScreen;
