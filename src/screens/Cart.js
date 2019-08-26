import React, {Component} from 'react';
import Data from '../dummyData/Data';
import AwesomeAlert from 'react-native-awesome-alerts';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert
} from 'react-native';

class Cart extends Component {
  constructor(props) {
    super();
    this.initData = Data;
    this.state = {
      data: this.initData,
      showAlert: false,
    };
  }

  deleteItem = () => {
    this.setState({
      showAlert: true,
    });
  };

  checkOut = () => {
    Alert.alert('Check out')
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };

  renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <View style={styles.image}>
          <Image style={styles.imageProduct} source={{uri: `${item.image}`}} />
        </View>
        <View style={styles.desc}>
          <Text style={styles.textProduct}>{item.name}</Text>
          <Text style={styles.textProduct}>Rp. {item.price}</Text>
        </View>
        <View style={styles.qty}>
          <TouchableOpacity style={styles.buttonMin} onPress={this.onPress}>
            <Text style={{color: 'white'}}> - </Text>
          </TouchableOpacity>
          <TextInput
            style={styles.inputQty}
            placeholder="0"
            keyboardType="default"
            underlineColorAndroid="transparent"
            textAlign={'center'}
          />
          <TouchableOpacity style={styles.buttonMin} onPress={this.onPress}>
            <Text style={{color: 'white'}}> + </Text>
          </TouchableOpacity>
        </View>
        <View stye={styles.delete}>
          <TouchableOpacity
            style={styles.buttonDelete}
            onPress={() => this.deleteItem()}>
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
    const {showAlert} = this.state;
    return (
      <View style={styles.contentContainer}>
        <View style={styles.address}>
          <Text style={styles.location}>
            Address: {'\n'}Jl. Selokan Mataram Gg. Nakula No. 303 C, Sinduaji,
            Mlati, Kutu Dukuh, Sinduadi, Sleman, Kabupaten Sleman, Daerah
            Istimewa Yogyakarta 83239
          </Text>
        </View>
        <View>
          <FlatList
            style={styles.flatList}
            data={this.state.data}
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderItem}
          />
          <View style={styles.checkoutBtn}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.checkOut()}>
              <Text style={{color: 'white'}}> Checkout </Text>
            </TouchableOpacity>
            <View style={styles.total}>
              <Text style={{color: 'red'}}>Total : Rp. 50000</Text>
            </View>
          </View>
        </View>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Delete this item?"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, delete it"
          confirmButtonColor="#C30F42"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
      </View>
    );
  }
}

export default Cart;

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  address: {
    backgroundColor: 'grey',
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
    flexDirection: 'row-reverse',
    marginHorizontal: '6%',
    marginTop: 20,
  },
  total: {
    alignItems: 'center',
    marginRight: 20,
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#C30F42',
    padding: 10,
  },
  buttonMin: {
    width: 30,
    alignItems: 'center',
    backgroundColor: '#C30F42',
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
