import React, { Component } from 'react';
import { StatusBar, View, Text, TouchableHighlight, AsyncStorage, Alert, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class Home extends Component {

    componentDidMount = async () => {
        await AsyncStorage.getItem('jwToken', (error, result) => {
            if (result) {
                this.setState({
                    token: result,
                });
            }
        });
    }

    render() {

        const del = () => {
            AsyncStorage.removeItem('userid')
            AsyncStorage.removeItem('jwToken')
                .then(() => {
                    this.setState({ isLogin: false })
                    this.setState({ data: [] })
                    Alert.alert(
                        'Logout',
                        'Logout success', [
                            {
                                text: 'OK', onPress: () => this.props.navigation.navigate('Login')
                            }
                        ]
                    )
                })
        };
        return (
            <ScrollView>
                <View>
                    <StatusBar backgroundColor='white' barStyle='dark-content' />

                    <Text>Home</Text>
                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={del}>
                        <Text style={styles.loginText}>Logout</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        width: 250,
        borderRadius: 30,
        bottom: 15
    },
    loginButton: {
        backgroundColor: "#27f607",
    },
    loginText: {
        color: 'white',
    },
})