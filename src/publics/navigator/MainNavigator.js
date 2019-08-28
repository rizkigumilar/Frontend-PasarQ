import {
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator,
    createSwitchNavigator,
} from 'react-navigation';

import Login from '../../screens/Login';
import Register from '../../screens/Register';
import AuthLoading from '../../screens/Splash';
import HomeMitra from '../../screens/HomeMitra';
import HomeUser from '../../screens/HomeUser';
import HomeDriver from '../../screens/HomeDriver'
import Product from '../../screens/SubCategory';
import DetailProduct from '../../screens/DetailProduct';
import Cart from '../../screens/Cart';
import Payment from '../../screens/Payment';
import ChatRoom from '../../components/ChatRoom';
import Maps from '../../screens/MapsTransaction';
import Chat from '../../screens/Chat';
import Profile from '../../screens/Profile';
import BarangToko from '../../screens/BarangToko';
import Add from '../../screens/AddProduct';
import DriverJob from '../../screens/DriverJob';

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

const UserStack = createStackNavigator({
    Home: {
        screen: HomeUser,
        navigationOptions: {
            header: null,
        },
    },
    Product: {
        screen: Product,
        navigationOptions: {
            header: null,
        },
    },
    DetailProduct: {
        screen: DetailProduct,
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
        },
    },
    Maps: {
        screen: Maps,
        navigationOptions: {
            header: null,
        },
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            header: null,
        },
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: null,
        },
    },

});

const MitraStack = createStackNavigator({
    Home: {
        screen: HomeMitra,
        navigationOptions: {
            header: null,
        },
    },
    Add: {
        screen: Add,
        navigationOptions: {
            header: null,
        },
    },
    BarangToko: {
        screen: BarangToko,
        navigationOptions: {
            header: null,
        },
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            header: null,
        },
    },
    ChatRoom: {
        screen: ChatRoom,
        navigationOptions: {
            header: null,
        },
    },
})
const DriverStack = createStackNavigator({
    Home: {
        screen: HomeDriver,
        navigationOptions: {
            header: null,
        },
    },
    DriverJob: {
        screen: DriverJob,
        navigationOptions: {
            header: null
        }
    }
})


export default createAppContainer(
    createSwitchNavigator({
        AuthLoading: AuthLoading,
        HomeUser: UserStack,
        HomeMitra: MitraStack,
        HomeDriver: DriverStack,
        Auth: AuthStack,
    }),
);
