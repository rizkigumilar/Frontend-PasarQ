import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import Login from '../../screens/Login';
import Register from '../../screens/Register';
import AuthLoading from '../../screens/Splash';
import Home from '../../screens/Home';
import Cart from '../../screens/Cart';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null,
    },
  },
});

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppStack,
      Auth: AuthStack,
      Cart
    },
    {
      initialRouteName: 'Cart',
    },
  ),
);
