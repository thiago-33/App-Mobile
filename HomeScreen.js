import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagem no topo */}
      <Image
        source={require('../../assets/logo.png')}  // Ajuste o caminho conforme necessário
        style={styles.logo}
      />

      <Text style={styles.greeting}>Bem-vindo, Thiago!</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Qualidade do Ar: Boa</Text>
        <Text style={styles.infoText}>Emissão de Carbono: 45 ppm</Text>
      </View>

      {/* Caixa de Botões */}
      <View style={styles.buttonBox}>
        <Button title="Abrir Scanner" onPress={() => navigation.navigate('Scanner')} />
      </View>
      <View style={styles.buttonBox}>
        <Button title="Mapa de Pontos de Coleta" onPress={() => navigation.navigate('Map')} />
      </View>
      <View style={styles.buttonBox}>
        <Button title="Perfil" onPress={() => navigation.navigate('Profile')} />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',  // Cor de fundo do container
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',  // Centraliza os itens no eixo principal
  },
  logo: {
    width: 400,  // Largura da imagem ajustada
    height: 400, // Altura da imagem ajustada    
  },
  greeting: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: '#e0f7fa',
    padding: 16,
    borderRadius: 8,
    marginBottom: 30,
  },
  infoText: {
    fontSize: 20,
  },
  buttonBox: {
    width: '80%',  // Largura ajustada da caixa do botão
    marginBottom: 15,  // Espaço entre os botões
    backgroundColor: '#4CAF50',  // Cor de fundo das caixas
    borderRadius: 5,  // Bordas arredondadas
    overflow: 'hidden',  // Esconde partes que saem da caixa (caso necessário)
  },
});

export default HomeScreen;
