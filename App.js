import React, { Component } from 'react'
import MainNavigator from './src/publics/navigator/MainNavigator'
import Splash from './src/screens/Splash';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native'
import axios from 'axios'; 
import store from './src/publics/redux/store'
// "authorization": "semangat-team-faraday",
//                     "x-access-token": `token: ${AsyncStorage.jwToken}`,
//                     "x-control-user": AsyncStorage.userid
class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            iduser: '',
            token: '',
            view: <Splash />
        }
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({
                view: <MainNavigator />
            })
        }, 2000)
    }
    render() {
        axios.defaults.headers.common["authorization"] = "semangat-team-faraday"
        axios.defaults.headers.common["x-access-token"] = `token: ${AsyncStorage.jwToken}`
        axios.defaults.headers.common["x-control-user"] = AsyncStorage.userid

        return (
            <Provider store={store}>
                {this.state.view}
            </Provider>
        )

    }
}

export default App
