import React, { Component } from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Image,
    Dimensions
} from 'react-native';
class Splash extends Component {
    // constructor() {
    //     super();
    //     this._bootstrapAsync();
    // }

    // _bootstrapAsync = async () => {
    //     const userToken = await AsyncStorage.getItem('userid');
    //     this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    // };
    render() {
        return (
            <View>
                <View style={styles.container}>
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
        top: 200
    },
    auth: {
        position: 'absolute',
        marginTop: '155%',
        color: 'black',
    },
})