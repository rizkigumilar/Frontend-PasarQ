import React, { Component } from "react";
import { StyleSheet, View, Image, AsyncStorage, Alert, TouchableHighlight } from "react-native";
import { Container, Header, Item, Input, Icon, Button, Text, Fab } from 'native-base'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import Bottomtab from "../components/bottomTab";


export default class Untitled extends Component {
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
                    <View style={{ top: 5 }}>
                        <Fab position="bottomRight" onPress={() => this.getCurrentPosition()} style={{ backgroundColor: 'white', top: "-100%", position: "absolute" }} >
                            <Icon name="locate" type="Ionicons" style={{ color: 'steelblue' }} />
                        </Fab>

                        <Bottomtab style={styles.BottomtabStyele} />
                    </View>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "rgba(62,220,62,1)",
    },
    mapView: {
        position: "relative",
        height: "92%",
        width: "100%",

    },

    BottomtabStyele: {
        top: "100%",
        left: "-8.56%",
        width: "117.01%",
        height: "9.67%",
        position: "absolute",
    },

});
