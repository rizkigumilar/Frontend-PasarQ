import React, { Component } from "react";
import { StyleSheet, View, Image, AsyncStorage, ScrollView, TouchableHighlight } from "react-native";
import { Container, Header, Item, Input, Icon, Button, Text, Fab } from 'native-base'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import Bottomtab from "../components/bottomTab";


export default class Untitled extends Component {

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
                            text: 'OK', onPress: () => this.props.navigation.navigate('Login')
                        }
                    ]
                )
            })
    };
    render() {
        return (
            <Container>

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
                <View style={styles.root}>
                    <View>
                        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.del}>
                            <Text style={styles.loginText}>Logout</Text>
                        </TouchableHighlight>
                    </View>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: -7.758497,
                            longitude: 110.3781336,
                            latitudeDelta: 0.09,
                            longitudeDelta: 0.04
                        }}
                        customMapStyle={[]}
                        style={styles.mapView}
                    >
                        <Marker
                            coordinate={{ latitude: -7.758315, longitude: 110.3781336, }}
                            description={"wik"}
                            title={"pasar malioboro"}
                        />
                        <Marker
                            coordinate={{ latitude: -7.732315, longitude: 110.3781336, }}
                            description={"tes"}
                            title={"pasar non malioboro"}
                        />
                        <Marker
                            coordinate={{ latitude: -7.732315, longitude: 110.3981336, }}
                            description={"tes"}
                            title={"pasar non malioboro juga"}
                        />
                    </MapView>
                    <Fab position="bottomRight" onPress={() => this.getCurrentPosition()} style={{ backgroundColor: 'white', top: "-100%", position: "absolute" }} >
                        <Icon name="locate" type="Ionicons" style={{ color: 'steelblue' }} />
                    </Fab>

                    <Bottomtab style={styles.BottomtabStyele} />

                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "rgba(62,220,62,1)"
    },
    mapView: {
        position: "relative",
        height: "84.3%",
        width: "93.22%",
        top: "2.45%",
        left: "3.39%"
    },

    BottomtabStyele: {
        top: "90.33%",
        left: "-8.56%",
        width: "117.01%",
        height: "9.67%",
        position: "absolute"
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