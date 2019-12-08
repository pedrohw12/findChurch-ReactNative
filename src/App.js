import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StatusBar } from 'react-native';

import api from './data/api.json';

export default function App() {
  const [ igrejas, setIgrejas ] = useState('buscando...');
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
    <View style={{padding: 20, flex: 1, backgroundColor: "#0336FF"}}>
      <StatusBar backgroundColor="#1111AA" />
      <TextInput 
        placeholder="Find churchs..." 
        onChangeText={(t)=> handleInput(t)} 
        style={{borderRadius: 4, marginBottom: 20, padding:10, backgroundColor: "white"}} 
      />

      {busca.length > 1 && 
        <TouchableOpacity 
          style={{
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: "#ffde03",
            height: 44,
            borderRadius: 4,
          }} 
          onPress={()=> handleSubmit()}>
          <Text style={{fontWeight: "bold"}}> Buscar </Text>
        </TouchableOpacity>   
      }
      {result.length > 0 &&
      <FlatList 
        style={{marginTop: 40}}
        data={igrejas}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={{borderRadius: 4, padding: 10, margin: 5, backgroundColor: "white"}}>
            <Text style={{fontSize: 20, marginBottom: 2, fontWeight: "bold"}}> {item.nome} </Text>
            <Text style={{color: "#0336FA", marginBottom: 7}}> {(item.denominacao).toUpperCase()} </Text>
            <Text style={{marginTop: 3, color: "#0003FF", fontWeight: "bold"}}> {item.qnt} membros </Text>
            <Text style={{marginTop: 3, fontWeight: "bold"}}> Início às {item.horario} </Text>
            <Text style={{marginTop: 10, color: "#0336FA"}}> {item.site} </Text>
          </View>  
        )}
      />
      
        }
        {result === '' &&
          <View style={{flex: 1, marginTop: '30%', alignItems: "center"}}>
            <Text style={{color: "white", fontWeight: "bold", fontSize: 30}}> God's House </Text>
          </View>
        }
    </View>
  );
}