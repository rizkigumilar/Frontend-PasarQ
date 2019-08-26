import React, {Component, Fragment} from 'react';
import {Icon} from 'native-base';
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
} from 'react-native';
import {withNavigation} from 'react-navigation';

class Payment extends Component {
  render() {
    return (
      <Fragment>
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
          <Text style={{marginBottom: 5}}>Rezha Riansyah R</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name="pin" size={32} />
            <Text style={styles.text}>
              Jl. Selokan Mataram Gg. Nakula No. 303 C, Sinduaji, Mlati, Kutu
              Dukuh, Sinduadi, Sleman, Kabupaten Sleman, Daerah Istimewa
              Yogyakarta 83239
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Icon name="call" size={32} />
            <Text style={styles.text}>0198239082398398</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Icon name="mail" size={32} />
            <Text style={styles.text}>rezhariansyah@gmail.com</Text>
          </View>
        </View>
        <View style={styles.containerDelivery}>
          <Text style={{textAlign: 'center'}}>Pilihan Pengiriman</Text>
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
              <Text style={{textAlign: 'center'}}> Express </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.delivery}
              onPress={() => this.onPress}>
              <Text style={{textAlign: 'center'}}> To Day </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text>Sub Total (5 items)</Text>
            <Text style={{color: 'red'}}>Rp. 50000</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text>Biaya Pengiriman</Text>
            <Text style={{color: 'red'}}>Rp. 7000</Text>
          </View>
        </View>
        <View style={{justifyContent : 'flex-end', flex : 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginTop: 40,
              marginBottom: 20,
            }}>
            <Text style={{fontSize: 20, color: 'red'}}>Total : Rp. 7000</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.onPress}>
              <Text style={{color: 'white'}}> Buat Pesanan </Text>
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
    backgroundColor: '#C30F42',
    padding: 10,
  },
});
