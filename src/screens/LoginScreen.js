import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

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
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {    
    fontSize: 30,
    
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    fontSize: 20,
    height: 40,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
