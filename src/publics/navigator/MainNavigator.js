import { createAppContainer, createDrawerNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation'

import Login from '../../screens/Login';
import Register from '../../screens/Register';
import AuthLoading from '../../screens/Splash';

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

})



export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack
    }

))