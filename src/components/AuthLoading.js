import React, { Component } from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native'
import { withNavigation } from 'react-navigation';


class AuthLoading extends Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const roleid = await AsyncStorage.getItem('role_id')
        console.log(roleid)
        if (roleid === 4) {
            this.props.navigation.navigate('HomeUser')
        } else if (roleid === 2) {
            this.props.navigation.navigate('HomeMitra')
        } else {
            this.props.navigation.navigate('Auth')
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default withNavigation(AuthLoading)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});