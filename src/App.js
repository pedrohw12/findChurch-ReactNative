import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';

import api from './data/api.json';

export default function App() {
  const [ igrejas, setIgrejas ] = useState('buscando...');
  const [ botao, setBotao ] = useState(false);
  const [ busca, setBusca ] = useState('');
  const [ result, setResult ] = useState('');

  useEffect(()=>{
    const response = api.igrejas;
    setIgrejas(response) 
  },[]); 
 
  function handleInput(t) {
    setBusca(t); 
  }

  function handleSubmit() {
    var arr1 = api.igrejas.filter(d => d.nome === busca || d.cidade === busca);
    x = arr1[0].cidade;
    setResult(x);
    console.log(result);
    // console.log(result.length)
  }
 
  return (
    <View style={{padding: 20, flex: 1}}>
      <TextInput placeholder="Pesquisar igrejas..." onChangeText={(t)=> handleInput(t)} style={{borderWidth: 1, borderRadius: 4, marginBottom: 20, padding:10}} />
      {busca.length > 1 && 
        <Button title="Buscar" onPress={()=> handleSubmit()} />
      }
      {result.length > 0 &&
      <FlatList 
        style={{marginTop: 40}}
        data={igrejas}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={{borderWidth: 1, borderRadius: 4, padding: 10, margin: 5}}>
            <Text style={{fontSize: 20, marginBottom: 2}}> {item.nome} </Text>
            <Text style={{color: "#666", marginBottom: 7}}> {item.denominacao} </Text>
            <Text style={{marginTop: 3}}> {item.qnt} membros </Text>
            <Text style={{marginTop: 3}}> Início às {item.horario} </Text>
            <Text style={{marginTop: 10}}> {item.site} </Text>
          </View>  
        )}
      />
        }
        {result.length < 1 &&
          <Text> {result} </Text>
        }
    </View>
  );
}