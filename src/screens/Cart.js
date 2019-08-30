import React, { Component, Fragment } from 'react';
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
  StatusBar,
  AsyncStorage,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {
  getCartUser,
  deleteCart,
  quantityplus,
  quantitymin,
  checkoutCart,
} from '../publics/redux/actions/cart';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';

class Cart extends Component {
  constructor(props) {
    super();
    this.state = {
      cartList: [],
      iduser: '',
    };
    AsyncStorage.getItem('userid').then(value => {
      this.setState({ iduser: value });
    });
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.props.dispatch(getCartUser(this.state.iduser)).then(res => {
        this.setState({
          cartList: this.props.cartList,
        });
      });
    }, 1000);
  };

  getData = () => {
    this.props.dispatch(getCartUser(this.state.iduser)).then(res => {
      this.setState({
        cartList: this.props.cartList,
      });
    });
  };

  delete = async id_cart => {
    await this.props.dispatch(deleteCart(id_cart)).then(() => {
      this.getData();
    });
  };

  deleteItem = id_cart => {
    Alert.alert(
      'Delete Item',
      'Are you sure? ',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => this.delete(id_cart) },
      ],
      { cancelable: false },
    );
  };

  onBtnMin = async (id_cart, quantity) => {
    if (quantity <= 1) {
      quantity == 1;
    } else {
      await this.props.dispatch(quantitymin(id_cart)).then(() => {
        this.getData();
      });
    }
  };

  onBtnPlus = async id_cart => {
    await this.props.dispatch(quantityplus(id_cart)).then(() => {
      this.getData();
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };

  checkout = async id_user => {
    await this.props.dispatch(checkoutCart(id_user));
    this.props.navigation.navigate('Payment');
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <View style={styles.image}>
          <Image style={styles.imageProduct} source={{ uri: `${item.image}` }} />
        </View>
        <View style={styles.desc}>
          <Text style={styles.textProduct}>{item.name_item}</Text>
          <NumberFormat
            value={item.price}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Rp '}
            renderText={value => <Text style={styles.textProduct}>{value}</Text>}
          />
        </View>
        <View style={styles.quantity}>
          <TouchableOpacity
            style={styles.buttonMin}
            onPress={() => this.onBtnMin(item.id_cart, item.quantity)}>
            <Text style={{ color: 'white' }}> - </Text>
          </TouchableOpacity>
          <TextInput
            style={styles.inputQty}
            value={`${item.quantity}`}
            keyboardType="default"
            underlineColorAndroid="transparent"
            textAlign={'center'}
          />
          <TouchableOpacity
            style={styles.buttonMin}
            onPress={() => this.onBtnPlus(item.id_cart)}>
            <Text style={{ color: 'white' }}> + </Text>
          </TouchableOpacity>
        </View>
        <View stye={styles.delete}>
          <TouchableOpacity
            style={styles.buttonDelete}
            onPress={() => this.deleteItem(item.id_cart)}>
            <Image
              style={styles.deleteIcon}
              source={require('../assets/delete.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <Container>
        <View style={styles.contentContainer}>
          <View style={styles.address}>
            <Text style={styles.location}>Your Cart</Text>
          </View>
          <ScrollView>
            <View>
              <FlatList
                style={styles.flatList}
                data={this.state.cartList}
                keyExtractor={item => item.id_cart}
                renderItem={this.renderItem}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.checkoutBtn}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.checkout(this.state.iduser)}>
            <Text style={{ color: 'white' }}> Checkout </Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const mapStateToProp = state => {
  return {
    cartList: state.cart.cartList,
  };
};
export default connect(mapStateToProp)(Cart);

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  quantity: {
    flexDirection: 'row',
  },
  address: {
    backgroundColor: '#008000',
    height: 60,
    justifyContent: "center"
  },
  image: {
    flex: 1,
  },
  desc: {
    flex: 2,
  },
  qty: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 30,
  },
  delete: {
    flex: 1,
  },
  buttonDelete: {
    width: 30,
    alignItems: 'center',
    padding: 2,
    height: 30,
    marginRight: 20,
  },
  location: {
    paddingHorizontal: 20,
    color: 'white',
    paddingVertical: 10,
    fontSize: 18
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingVertical: 10,
    flexDirection: 'row',
  },
  imageProduct: {
    width: 70,
    height: 70,
    marginLeft: 20,
  },
  textProduct: {
    marginLeft: 20,
  },
  checkoutBtn: {
    marginHorizontal: '6%',
    height: 60,
    justifyContent: 'center',
    alignSelf: "center"
  },
  total: {
    alignItems: 'center',
    marginRight: 20,
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#008000',
    padding: 10,
    justifyContent: 'center',
    width: 150
  },
  buttonMin: {
    width: 30,
    alignItems: 'center',
    backgroundColor: '#008000',
    padding: 2,
    height: 30,
  },
  inputQty: {
    width: 30,
    height: 30,
    backgroundColor: '#f7f7f5',
    padding: 2,
    borderWidth: 1,
    borderColor: 'grey',
  },
  deleteIcon: {
    width: 25,
    height: 25,
  },
  flatList: {
    marginTop: 20,
  },
});
