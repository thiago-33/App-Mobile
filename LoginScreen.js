import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('thiagoalves@gmail.com');
  const [password, setPassword] = useState('thiago33');

  const handleLogin = () => {
    if (username === 'thiagoalves@gmail.com' && password === 'thiago33') {
      navigation.navigate('Home'); 
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos.');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/login.jpg')}  // Caminho para sua imagem de fundo
      style={styles.background}
    >
      <View style={styles.container}>       
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Entrar" onPress={handleLogin} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',  // Expande a imagem para cobrir toda a tela
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Fundo semitransparente para facilitar a leitura
    padding: 16,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    fontSize: 20,
    height: 40,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#fff',
  },
});

export default LoginScreen;
