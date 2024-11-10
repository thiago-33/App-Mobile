import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [tipoMaterial, setTipoMaterial] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [historico, setHistorico] = useState([]);

  const adicionarReciclagem = () => {
    if (tipoMaterial && quantidade) {
      const novoRegistro = {
        id: Math.random().toString(),
        tipoMaterial,
        quantidade,
        data: new Date().toLocaleDateString(), 
      };

      setHistorico((prevHistorico) => [novoRegistro, ...prevHistorico]);
      setTipoMaterial(''); 
      setQuantidade('');   
    } else {
      alert('Por favor, preencha todos os campos.'); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Reciclagem</Text>

      <TextInput
        style={styles.input}
        placeholder="Tipo de Material"
        value={tipoMaterial}
        onChangeText={setTipoMaterial}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade (kg)"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />   

      
      <Button title="Adicionar Registro" onPress={adicionarReciclagem} />

      <FlatList
        data={historico}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.data}: {item.tipoMaterial} - {item.quantidade} kg</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightgreen',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {    
    height: 40,
    borderColor: 'black',
    borderWidth: 3,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },  
});

export default App;
