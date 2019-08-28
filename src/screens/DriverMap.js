import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import MapView, { PROVIDER_GOOGLE, Marker,Polyline } from 'react-native-maps'
import { StyleSheet, View, Image, AsyncStorage,  TouchableHighlight } from "react-native";
import MapViewDirections from 'react-native-maps-directions';
import BottomTabDriver from '../components/bottomTabDriver'

const origin = {latitude: -7.758497, longitude: 110.3781336};
const destination = {latitude: -7.860551, longitude: 110.2834043};
const GOOGLE_MAPS_APIKEY = 'AIzaSyANrU0IYG6amBR2BN2F7kzZk6j2Luhowwc';

export class DriverMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coords: []
    }
  }

  

  render() {
    var rumah = "rumah mbok darmi"
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Menuju ke rumah {`${rumah}`}</Title>
          </Body>
          <Right></Right>
        </Header>
        <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={{
            
                latitude:  -7.8505958,
                longitude: 110.3009674,
                latitudeDelta: 0.20,
                longitudeDelta: 0.20
            }}
            customMapStyle={[]}
            style={styles.mapView}
        >
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="#00b02f"
          />
            <Marker
                coordinate={{ latitude: -7.758315, longitude: 110.3781336, }}
                description={"wik"}
                title={"pasar malioboro"}
            />

            <Marker
                coordinate={{ latitude: -7.860551, longitude: 110.2834043, }}
                description={"tes"}
                title={"rumah mbok darmi"}
            />
            
        </MapView>
        <BottomTabDriver />
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
      height: "82%",
      width: "100%",

  },
  BottomtabStyele: {
    top: "90.33%",
    left: "-8.56%",
    width: "117.01%",
    height: "9.67%",
    position: "absolute"
  },
  BottomtabStyele: {
      top: "90.33%",
      left: "-8.56%",
      width: "117.01%",
      height: "9.67%",
      position: "absolute",
  },

});
