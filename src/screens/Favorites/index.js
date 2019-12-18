import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, Button } from 'react-native';

import api from '../../data/api.json';

function Favorites(props) {
  return  (
    <View style={{flex: 1, backgroundColor: "#0336FF", padding: 20}}>
      <View style={{borderBottomColor: "#fff", borderBottomWidth: 0.5, marginLeft: 11, marginRight: 11, marginBottom: 10}}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30, marginBottom: 10}}> Your List </Text>
      </View>

      <ScrollView style={{flex: 1}}>
      <View style={{flex: 1, borderRadius: 4, padding: 10, margin: 10, backgroundColor: "white"}}>
        <Text> {JSON.stringify(props.favorito)} </Text>
      </View>
      <View style={{flex: 1, borderRadius: 4, padding: 10, margin: 10, backgroundColor: "white"}}>
        <Text> uma igreja </Text>
      </View>
      <View style={{flex: 1, borderRadius: 4, padding: 10, margin: 10, backgroundColor: "white"}}>
        <Text> uma igreja </Text>
      </View>
      <View style={{flex: 1, borderRadius: 4, padding: 10, margin: 10, backgroundColor: "white"}}>
        <Text> uma igreja </Text>
      </View>
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    favorito:state.favoritoReducer.favorito,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    setName: (name)=> dispatch({type: 'SET_NAME', payload: {name}})
  };
};

export default connect(mapStateToProps, dispatchToProps)(Favorites);
