import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Fab } from 'native-base';
import MapView, { PROVIDER_GOOGLE, Marker,Polyline } from 'react-native-maps'
import { StyleSheet, View, Image, Text,AsyncStorage,  TouchableHighlight } from "react-native";
import MapViewDirections from 'react-native-maps-directions';
import BottomTabDriver from '../components/bottomTabDriver'
import GetLocation from 'react-native-get-location'
const origin = {latitude: -7.758497, longitude: 110.3781336};
const destination = {latitude: -7.860551, longitude: 110.2834043};
const GOOGLE_MAPS_APIKEY = 'AIzaSyANrU0IYG6amBR2BN2F7kzZk6j2Luhowwc';

export class DriverMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coords: [],
      mapRegion:{ latitude: 0,
        longitude: 0.01,
        latitudeDelta: 0.6,
        longitudeDelta: 0.6},
      latitude:0,
      longitude:0,

    }
  }
  getCurrentPosition() {
    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        // timeout: 15000,
    })
        .then(location => {
          console.warn(location);

          let region = {
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.6,
            longitudeDelta: 0.6
          }

          this.setState({
            mapRegion: region,
            latitude: location.latitude,
            longitude: location.longitude
          })
        })
        .catch(error => {
          const { code, message } = error;
          alert("gps nya di nyalain dulu coeg");
        })
}
  

  render() {
    var rumah = "=>                     mbok darmi"
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Text style={{color:"white" ,fontWeight:"bold"}}>Menuju ke rumah    =></Text>
          </Body>
          <Right><Text style={{color:"white",fontWeight:"bold"}}> {`${rumah}`}</Text></Right>
        </Header>
        <MapView
            provider={PROVIDER_GOOGLE}
            region={this.state.mapRegion}
            customMapStyle={[]}
            showsMyLocationButton={true}
            showsUserLocation={true}
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
                coordinate={this.state.mapRegion}
                description={`${this.state.latitude} / ${this.state.longitude}`}
                title={"pasar malioboro"}
            />

            <Marker
                coordinate={{ latitude: -7.860551, longitude: 110.2834043, }}
                description={"tes"}
                title={"rumah mbok darmi"}
            />
            
        </MapView>
          <Fab position="bottomRight" onPress={() => this.getCurrentPosition()} style={{  backgroundColor: 'white' ,top:"-100%"}} >
            <Icon name="locate" type="Ionicons" style={{ color: 'steelblue' }} />
          </Fab>
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
