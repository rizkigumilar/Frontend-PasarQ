import React, { Component } from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Image,
} from 'react-native';
import { withNavigation } from 'react-navigation';
class Splash extends Component {
    constructor() {
        super();

    }
    componentDidMount = async () => {
        await this._bootstrapAsync();
    }
    _bootstrapAsync = async () => {
        const roleid = await AsyncStorage.getItem('role_id')
        console.log(roleid)
        console.log(this.props)
        if (roleid == 4) {
            this.props.navigation.navigate('HomeUser')
        } else if (roleid == 3) {
            this.props.navigation.navigate('HomeDriver')
        } else if (roleid == 2) {
            this.props.navigation.navigate('HomeMitra')
        } else {
            this.props.navigation.navigate('Auth')
        }

    };
    render() {

        return (
            <View>
                <View style={styles.container}>
                    <StatusBar backgroundColor="green" />
                    <Image source={require('../assets/logo.png')} style={styles.imagess} />
                    <View >
                        <ActivityIndicator size="large" color="#00b5ec" style={styles.auth} />
                        <StatusBar barStyle="default" />
                    </View>
                </View>

            </View>
        )
    }
}


export default Splash


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagess: {
        position: 'absolute',
        width: 380,
        height: 380,
        top: 150
    },
    auth: {
        position: 'absolute',
        marginTop: '125%',
        color: 'black',
    },
})