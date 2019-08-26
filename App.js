import React, { Component } from 'react'
import MainNavigator from './src/publics/navigator/MainNavigator'
import Splash from './src/screens/Splash';
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
        }, 500)
    }
    render() {
        return (
            <>
                {this.state.view}
            </>
        )

    }
}

export default App
