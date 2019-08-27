import React, { Component } from "react";
import { StyleSheet, View, Image, AsyncStorage, Alert, TouchableHighlight, Text } from "react-native";



export default class Profile extends Component {

    del = () => {
        AsyncStorage.removeItem('userid')
        AsyncStorage.removeItem('jwToken')
            .then(() => {
                this.setState({ isLogin: false })
                this.setState({ data: [] })
                Alert.alert(
                    'Logout',
                    'Logout success', [
                        {
                            text: 'OK', onPress: () => this.props.navigation.navigate('Auth')
                        }
                    ]
                )
            })
    };
    render() {
        return (
            <View>
                <View>
                    <Text>Profile</Text>

                    <View>
                        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.del}>
                            <Text style={styles.loginText}>Logout</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    BottomtabStyele: {
        top: "90.33%",
        left: "-8.56%",
        width: "117.01%",
        height: "9.67%",
        position: "absolute",
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        left: 30,
        width: 250,
        borderRadius: 30,

    },
    loginButton: {
        backgroundColor: "#008000",
    },
    loginText: {
        color: 'white',
    },
});
