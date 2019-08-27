import { createAppContainer, createDrawerNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation'

import Login from '../../screens/Login';
import Register from '../../screens/Register';
import AuthLoading from '../../screens/Splash';
import Home from '../../screens/Home';
import Produk from '../../screens/produk';
import Swiper from '../../screens/Homelist';


const AuthStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    }
})

const AppStack = createStackNavigator({
    Swiper: {
        screen: Swiper,
        navigationOptions: {
            header: null
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    Produk: {
        screen: Produk,
        navigationOptions: {
            header: null
        }
    },
   
})



export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack
    },

))