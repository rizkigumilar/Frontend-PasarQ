import React, { Component } from "react";
import { StyleSheet, View, Image, AsyncStorage, Alert, TouchableHighlight, StatusBar } from "react-native";
import { Header, Item, Icon, Button, Input, Text, Fab } from 'native-base'
import Bottomtab from "../components/BottomTabMitra";


export default class Home extends Component {


    render() {
        return (
            <View>
                <StatusBar style={{ backgroundColor: '#008000' }} />

                <View style={{ top: 100 }}>
                    <Fab position="bottomRight" onPress={() => this.props.navigation.navigate('Add')} style={{ backgroundColor: '#008000', top: "-100%", position: "absolute" }} >
                        <Icon name="add" type="Ionicons" style={{ color: 'white' }} />
                    </Fab>

                    <Bottomtab style={styles.BottomtabStyele} />
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
