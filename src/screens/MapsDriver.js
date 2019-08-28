import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps'
import { StyleSheet, View, Image, AsyncStorage, Alert, TouchableHighlight } from "react-native";


export class DriverMap extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                </Header>
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
                    <Polyline
                        geodesic={true}
                        coordinates={[
                            { latitude: -7.758315, longitude: 110.3781336 },
                            { latitude: -7.732315, longitude: 110.3781336 },
                            { latitude: -7.732315, longitude: 110.3981336 }
                        ]}
                        strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                        strokeColors={[
                            '#7F0000',
                            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                            '#B24112',
                            '#E5845C',
                            '#238C23',
                            '#7F0000'
                        ]}
                        strokeWidth={6}
                    />
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
            </Container>
        )
    }
}

export default DriverMap

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "rgba(62,220,62,1)",
    },
    mapView: {
        position: "relative",
        height: "86%",
        width: "100%",

    },

    BottomtabStyele: {
        top: "90.33%",
        left: "-8.56%",
        width: "117.01%",
        height: "9.67%",
        position: "absolute",
    },

});
