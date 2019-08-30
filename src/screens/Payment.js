import React, { Component, Fragment } from 'react';
import { Icon, ListItem, Left, Right, Radio } from 'native-base';
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
import { getPayment, paymentSend } from '../publics/redux/actions/payment';
import { NavigationEvents, withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';

class Payment extends Component {
  state = {
    paymentList: [],
    email: '',
    name: '',
    address: '',
    telp: '',
    userid: '',
    biayaPengiriman: 0,
    totalHarga: 0,
    namaBank: '',
    id_delivery: null,
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
    AsyncStorage.getItem('userid').then(value => {
      this.setState({ userid: value });
    });
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.props.dispatch(getPayment(this.state.userid)).then(res => {
        this.setState({
          paymentList: this.props.paymentList,
        });
      });
    }, 1000);
  };

  express = () => {
    this.setState({
      biayaPengiriman: 15000,
      totalHarga: this.state.paymentList.total_price + 15000,
      id_delivery: 2,
    });
  };

  day = () => {
    this.setState({
      biayaPengiriman: 5000,
      totalHarga: this.state.paymentList.total_price + 5000,
      id_delivery: 1,
    });
  };

  buatPesanan = async () => {
    if (this.state.namaBank == '' || this.state.biayaPengiriman == 0) {
      alert('anda belum memilih bank transfer atau memilih pengiriman');
    } else {
      await this.props.dispatch(
        paymentSend(
          this.state.paymentList.id_payment, {
            id_delivery: this.state.id_delivery,
            payment_method: this.state.namaBank,
          })
      ).then(() => {
        Alert.alert(
          'Success',
          'Payment Success',
          [
            {
              text: 'OK', onPress: () => this.props.navigation.navigate('DetailPembayaran', { bank: this.state.namaBank })
            },
          ],
        );
      })
    }
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
        <NavigationEvents
          onWillFocus={() =>
            AsyncStorage.getItem('userid').then(value => {
              this.setState({ userid: value });
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ marginBottom: 7, fontSize: 17, color: 'red' }}>
              {this.state.name}
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Text style={{ color: 'red', fontSize: 17 }}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

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
              onPress={() => this.express()}>
              <Text style={{ textAlign: 'center' }}> 1 hour service </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.delivery}
              onPress={() => this.day()}>
              <Text style={{ textAlign: 'center' }}> 1 day service </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text>Sub total</Text>

            <NumberFormat
              value={this.state.paymentList.total_price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Rp '}
              renderText={value => <Text style={{ color: 'red' }}>{value}</Text>}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text>Biaya Peniriman</Text>
            <NumberFormat
              value={this.state.biayaPengiriman}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Rp '}
              renderText={value => <Text style={{ color: 'red' }}>{value}</Text>}
            />
          </View>
        </View>

        <View style={styles.FlatList}>
          <Text>Total belanja</Text>
          <Text
            style={{
              paddingBottom: 10,
              borderBottomWidth: 3,
              borderBottomColor: 'red',
            }}>
            {this.state.paymentList.name_item}
          </Text>
          <ScrollView>
            <View>
              <View style={styles.paymentMethod}>
                <View style={styles.banking}>
                  <ListItem>
                    <View style={{ flexDirection: 'row' }}>
                      <Left>
                        <Image
                          style={styles.imageProduct}
                          source={require('../assets/1423261-bank-negara-indonesia-bni-waena--kantor-cabang-jayapura-papua.png')}
                        />
                        <Text style={{ paddingTop: 15, paddingLeft: 10 }}>
                          Bank BNI
                        </Text>
                      </Left>
                      <Right>
                        <Radio
                          color={'#f0ad4e'}
                          selectedColor={'#5cb85c'}
                          onPress={() => this.setState({ namaBank: 'BNI' })}
                          selected={this.state.namaBank == 'BNI'}
                        />
                      </Right>
                    </View>
                  </ListItem>
                  <ListItem>
                    <View style={{ flexDirection: 'row' }}>
                      <Left>
                        <Image
                          style={styles.imageProduct}
                          source={require('../assets/kisspng-logo-brand-bank-syariah-mandiri-font-bank-mandiri-5c096898ec8ba1.9972779515441204729689.jpg')}
                        />
                        <Text style={{ paddingTop: 15, paddingLeft: 10 }}>
                          Bank Mandiri
                        </Text>
                      </Left>
                      <Right>
                        <Radio
                          color={'#f0ad4e'}
                          selectedColor={'#5cb85c'}
                          onPress={() => this.setState({ namaBank: 'Mandiri' })}
                          selected={this.state.namaBank == 'Mandiri'}
                        />
                      </Right>
                    </View>
                  </ListItem>
                  <ListItem>
                    <Left>
                      <Image
                        style={styles.imageProduct}
                        source={require('../assets/images.png')}
                      />
                      <Text style={{ paddingTop: 15, paddingLeft: 10 }}>
                        Bank BCA Syariah
                      </Text>
                    </Left>
                    <Right>
                      <Radio
                        color={'#f0ad4e'}
                        selectedColor={'#5cb85c'}
                        onPress={() => this.setState({ namaBank: 'BCA' })}
                        selected={this.state.namaBank == 'BCA'}
                      />
                    </Right>
                    <View style={{ flexDirection: 'row' }}></View>
                  </ListItem>
                  <ListItem>
                    <Left>
                      <View style={{ flexDirection: 'row' }}>
                        <Image
                          style={styles.imageProduct}
                          source={require('../assets/brand.gif')}
                        />
                        <Text style={{ paddingTop: 15, paddingLeft: 10 }}>
                          Bank CIMB
                        </Text>
                      </View>
                    </Left>
                    <Right>
                      <Radio
                        color={'#f0ad4e'}
                        selectedColor={'#5cb85c'}
                        onPress={() => this.setState({ namaBank: 'CIMB' })}
                        selected={this.state.namaBank == 'CIMB'}
                      />
                    </Right>
                  </ListItem>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{ justifyContent: 'flex-end' }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              marginTop: 10,
              marginBottom: 20,
            }}>
            <NumberFormat
              value={this.state.totalHarga}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Rp '}
              renderText={value => (
                <Text style={{ fontSize: 20, color: 'red' }}>{value}</Text>
              )}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.buatPesanan()}>
              <Text style={{ color: 'white' }}> Buat Pesanan </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Fragment>
    );
  }
}

const mapStateToProp = state => {
  return {
    paymentList: state.payment.paymentList,
  };
};
export default connect(mapStateToProp)(withNavigation(Payment));

const styles = StyleSheet.create({
  paymentMethod: {
    flex: 1,
  },
  banking: {
    flex: 1,
  },
  imageProduct: {
    width: 70,
    height: 70,
  },
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
  FlatList: {
    flex: 1,
    borderTopWidth: 3,
    borderTopColor: 'red',
    marginHorizontal: 20,
    paddingTop: 10,
  },
});
