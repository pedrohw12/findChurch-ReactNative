import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Main from '../screens/Main';
import Favorites from '../screens/Favorites';

const MainStack = createBottomTabNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      tabBarIcon: <Icon name="search" size={25} />,
      title:"Search",
    }
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarIcon: <Icon name="star" size={25} />,
      title:"Favorites",
    }
  },
});

export default MainStack;