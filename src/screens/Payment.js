import React, { Component, Fragment } from 'react';
import { Icon } from 'native-base';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  AsyncStorage,
} from 'react-native';
import { withNavigation, NavigationEvents } from 'react-navigation';
import Geocoder from 'react-native-geocoder';

class Payment extends Component {
  state = {
    email: '',
    name: '',
    address: '',
    telp: '',
  };

  constructor(props) {
    super(props);
    AsyncStorage.getItem('email').then(value => {
      this.setState({ email: value });
    });
    AsyncStorage.getItem('name').then(value => {
      this.setState({ name: value });
    });
    AsyncStorage.getItem('address').then(value => {
      this.setState({ address: value });
    });
    AsyncStorage.getItem('telp').then(value => {
      this.setState({ telp: value });
    });
  }




  geocode = async () => {
    var lat = this.state.region.latitude
    var lng = this.state.region.longitude
    var Location = { lat, lng };
    Geocoder.geocodePosition(Location);
    const address = res[0].subLocality + ', ' + res[0].subAdminArea + ', ' + res[0].adminArea;

    return address
  };

  render() {
    return (
      <Fragment>
        <NavigationEvents
          onWillFocus={() =>
            AsyncStorage.getItem('email').then(value => {
              this.setState({ email: value });
            })
          }
        />
        <NavigationEvents
          onWillFocus={() =>
            AsyncStorage.getItem('name').then(value => {
              this.setState({ name: value });
            })
          }
        />
        <NavigationEvents
          onWillFocus={() =>
            AsyncStorage.getItem('address').then(value => {
              this.setState({ address: value });
            })
          }
        />
        <NavigationEvents
          onWillFocus={() =>
            AsyncStorage.getItem('telp').then(value => {
              this.setState({ telp: value });
            })
          }
        />
        <View style={styles.header}>
          <View style={styles.back}>
            <Icon
              name="arrow-back"
              color="#000000"
              size={32}
              style={styles.menuIcon}
              onPress={() => this.props.navigation.navigate('Cart')}
            />
          </View>
          <View style={styles.label}>
            <Text>Checkout</Text>
          </View>
        </View>
        <View style={styles.containerProfile}>
          <Text style={{ marginBottom: 5 }}>{this.state.name}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="pin" size={32} />
            <Text style={styles.text}>{this.state.address}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Icon name="call" size={32} />
            <Text style={styles.text}>{this.state.telp}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Icon name="mail" size={32} />
            <Text style={styles.text}>{this.state.email}</Text>
          </View>
        </View>
        <View style={styles.containerDelivery}>
          <Text style={{ textAlign: 'center' }}>Pilihan Pengiriman</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <TouchableOpacity
              style={styles.delivery}
              onPress={() => this.onPress}>
              <Text style={{ textAlign: 'center' }}> 1 hour services </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.delivery}
              onPress={() => this.onPress}>
              <Text style={{ textAlign: 'center' }}> 1 dat services </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text>Sub Total (5 items)</Text>
            <Text style={{ color: 'red' }}>Rp. 50000</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text>Biaya Pengiriman</Text>
            <Text style={{ color: 'red' }}>Rp. 7000</Text>
          </View>
        </View>
        <View style={{ justifyContent: 'flex-end', flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginTop: 40,
              marginBottom: 20,
            }}>
            <Text style={{ fontSize: 20, color: 'red' }}>Total : Rp. 7000</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.onPress}>
              <Text style={{ color: 'white' }}> Buat Pesanan </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Fragment>
    );
  }
}

export default withNavigation(Payment);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
  },
  back: {
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  menuIcon: {
    width: 20,
    height: 30,
  },
  label: {
    justifyContent: 'center',
  },
  containerProfile: {
    marginHorizontal: 20,
    borderBottomWidth: 3,
    borderBottomColor: 'red',
    paddingBottom: 10,
  },
  text: {
    marginHorizontal: 13,
  },
  containerDelivery: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  delivery: {
    height: 80,
    width: '48%',
    borderWidth: 2,
    borderColor: 'red',
    justifyContent: 'center',
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#008000',
    padding: 10,
  },
});