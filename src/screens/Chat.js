import React, { Component, Fragment } from 'react';
import Data from '../dummyData/Data';
import { Icon, Body, ListItem, Left, Thumbnail } from 'native-base';
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
  TouchableHighlight
} from 'react-native';


class Chat extends Component {
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
    Alert.alert('Check out');
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };

  renderItem = ({ item }) => {
    return (
      <ListItem avatar onPress={() => this.props.navigation.navigate('ChatRoom')}>
        <Left>
          <Thumbnail
            style={styles.imageProduct}
            source={require('../assets/group.png')}
          />
        </Left>
        <Body style={styles.desc} >
          <Text style={styles.textProduct}>Nama Juragan</Text>
          <Text style={styles.textProduct}>Nama Toko</Text>
        </Body>
      </ListItem>
    );
  };

  render() {
    return (
      <Fragment>
        <StatusBar backgroundColor="#008000" />
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <View style={styles.back}>
              <Icon
                name="arrow-back"
                color="#000000"
                size={32}
                style={styles.menuIcon}
                onPress={() => this.props.navigation.navigate('Home')}
              />
            </View>
            <View style={styles.label}>
              <Text>Home</Text>
            </View>
          </View>
          <ScrollView>
            <View>
              <FlatList
                style={styles.flatList}
                data={this.state.data}
                keyExtractor={item => item.id.toString()}
                renderItem={this.renderItem}
              />
            </View>
          </ScrollView>
        </View>
      </Fragment>
    );
  }
}

export default Chat;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
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
  contentContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  image: {
    flex: 1,
  },
  desc: {
    flex: 2,
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
    backgroundColor: '#008000',
    padding: 10,
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
});
