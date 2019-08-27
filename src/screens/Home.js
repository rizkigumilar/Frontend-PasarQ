import React, { Component } from "react";
import { StyleSheet, View, Image, AsyncStorage, Alert, TouchableHighlight, StatusBar } from "react-native";
import { Header, Item, Icon, Button, Input, Text, Fab } from 'native-base'
import Bottomtab from "../components/bottomTab";


export default class Home extends Component {


    render() {
        return (
            <View>
                <StatusBar style={{ backgroundColor: '#008000' }} />
                <Header style={{ backgroundColor: "#037F03" }} searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <View style={{ top: 100 }}>
                    <Fab position="bottomRight" onPress={() => this.props.navigation.navigate('Cart')} style={{ backgroundColor: '#008000', top: "-100%", position: "absolute" }} >
                        <Icon name="cart" type="Ionicons" style={{ color: 'white' }} />
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
