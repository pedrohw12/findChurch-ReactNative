import { createBottomTabNavigator } from 'react-navigation-tabs';

import Main from '../screens/Main';
import Favorites from '../screens/Favorites';

const MainStack = createBottomTabNavigator({
  Main: {
    screen: Main
  },
  Favorites: {
    screen: Favorites,
  },
});

export default MainStack;