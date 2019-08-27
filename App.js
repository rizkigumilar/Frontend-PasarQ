import React, { Component } from 'react'
import MainNavigator from './src/publics/navigator/MainNavigator'
import Splash from './src/screens/Splash';
import { Provider } from 'react-redux';
import store from './src/publics/redux/store'
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
        }, 200)
    }
    render() {
        return (
            <Provider store={store}>
                {this.state.view}
            </Provider>
        )

    }
}

export default App
