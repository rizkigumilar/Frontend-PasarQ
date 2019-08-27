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
import Swiper from '../../screens/Homelist';
import Product from '../../screens/SubCategory';
import DetailProduct from '../../screens/DetailProduct';
import Cart from '../../screens/Cart';
import Payment from '../../screens/Payment';
import ChatRoom from '../../components/ChatRoom';
import Maps from '../../screens/MapsTransaction';
import Chat from '../../screens/Chat';
import Profile from '../../screens/Profile';


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
        screen: Swiper,
        navigationOptions: {
            header: null,
        },
    },
    Product: {
        screen: Product,
        navigationOptions: {
            header: null
        }
    },
    DetailProduct: {
        screen: DetailProduct,
        navigationOptions: {
            header: null
        }
    },
    Cart: {
        screen: Cart,
        navigationOptions: {
            header: null,
        },
    },
    Payment: {
        screen: Payment,
        navigationOptions: {
            header: null,
        },

    },
    ChatRoom: {
        screen: ChatRoom,
        navigationOptions: {
            header: null,
        }
    },
    Maps: {
        screen: Maps,
        navigationOptions: {
            header: null
        }
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            header: null
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: null
        }
    },
})



export default createAppContainer(
    createSwitchNavigator({
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack,
    }),
);
