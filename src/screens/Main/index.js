import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TextInput, 
  TouchableOpacity, 
  StatusBar,
  Animated,
} from 'react-native';
import { connect } from 'react-redux';

import {Botao, Img} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../data/api.json';

function Main() {
  const [ busca, setBusca ] = useState('');
  const [ result, setResult ] = useState(''); 
  const [growAnim] = useState(new Animated.Value(0))
  const [fadeAnim] = useState(new Animated.Value(1))
 
  function handleInput(t) {
    setBusca(t); 
  }

  function handleSubmit() {
    var filtro = api.igrejas.filter(
      (i)=> {
        return i.cidade.toLowerCase().trim().indexOf(busca.toLowerCase().trim()) !== -1 
        || i.nome.toLowerCase().trim().indexOf(busca.toLowerCase().trim()) !== -1 ;
      }
    );

    setResult(filtro);
    setBusca('');      
  }

  useEffect(() => {
    Animated.sequence([

      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 1099,
        }
      ),
      
      Animated.timing(
        growAnim,
        {
          toValue: 30,
          duration: 1099,
        }
      )
      
    ]).start();
  }, [])

  function toggleFavorito(index) {
    let newIgrejas = [...api.igrejas];
    newIgrejas[index].favorito = !newIgrejas[index].favorito;
    setResult(newIgrejas);
  }

 
  return (
    <Animated.View style={{padding: 20, flex: 1 , backgroundColor: "#0336FF", opacity: fadeAnim}}>
      <StatusBar backgroundColor="#1111AA" />
      <TextInput 
        value={busca}
        placeholder="Find churchs..."
        onChangeText={(t)=> handleInput(t)} 
        style={{borderRadius: 4, marginBottom: 20, padding:10, backgroundColor: "white"}} 
      />
      <Icon name="search" size={20} color="#9999" style={{position: 'absolute', marginTop: '11%', marginLeft: '95%'}} />

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

      
      <FlatList 
        style={{marginTop: 20}}
        data={result}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View style={{borderRadius: 4, padding: 10, margin: 5, backgroundColor: "white"}}>

            <View style={{flexDirection: 'row', alignItems: "center"}}>
              <Text style={{fontSize: 20, marginBottom: 2, fontWeight: "bold"}}> {item.nome} </Text>
              <Botao onPress={()=> [toggleFavorito(index)]}>
                <Img name="star" size={25} index={item.favorito} />
              </Botao>
            </View>

            <Text style={{color: "#0336FA", marginBottom: 7}}> {(item.denominacao)} </Text>

            <View style={{flexDirection: 'row', alignItems: "center"}}>
              <Icon name="person" size={20} color="#333" />
              <Text style={{marginTop: 3, color: "#0003FF", fontWeight: "bold", flexDirection: "column", marginLeft: 5}}>
                {item.qnt} membros 
              </Text>
            </View>

            <Text style={{marginTop: 3, fontWeight: "bold"}}> Início às {item.horario} </Text>

            <Text style={{marginTop: 10, color: "#0336FA"}}> {item.site} </Text>
          </View>  
        )}
      />
        
        {result === '' &&
          <View style={{flex: 1, marginTop: '30%', alignItems: "center"}}>
            <Animated.Text style={{color: "white", fontWeight: "bold", fontSize: growAnim}}> God's House </Animated.Text>
          </View>
        }
    </Animated.View>
  );
}

const mapStateToProps = (state) => {
  return {
    favorito:state.favoritoReducer.favorito,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    setFavorito: (favorito)=> dispatch({type: 'SET_FAVORITO', payload: {favorito}})
  };
};

export default connect(mapStateToProps, dispatchToProps)(Main);