import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(event) {
    this.setState({search: event.substr(0, 20)});
  }

  render() {
    return (
      <View>
        <Text> Search Bar </Text>
      </View>
    );
  }
}