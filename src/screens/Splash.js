import React, { Component } from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Image
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
                    <Image source={require('../assets/logo-trans.png')} style={styles.imagess} />
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
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
    imagess: {
        position: 'absolute',
        width: 380,
        height: 380,
        top: 200
    },
    auth: {
        position: 'absolute',
        marginTop: '124%',
        color: 'black',
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 1
    }
})