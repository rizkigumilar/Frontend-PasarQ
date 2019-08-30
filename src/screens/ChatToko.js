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
import { connect } from 'react-redux'
import { getUsersByRole } from '../publics/redux/actions/user';
import { withNavigation } from "react-navigation";


class Chat extends Component {
  constructor(props) {
    super();
    this.initData = Data;
    this.state = {
      idCat: props.navigation.getParam('idCat'),
      data: this.initData,
      showAlert: false,
      StateUser:[],
      chatList:""
    };
  }
  componentDidMount = async () => {
    await this.props.dispatch(getUsersByRole(4));
    this.setState({
      chatList: this.props.Propsuser.userList
    })
  };

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

  renderItem = ({ item : isidata}) => {
    return (
      <ListItem avatar onPress={() => this.props.navigation.navigate('ChatRoom', { datauser: isidata })}>
        <Left>
          <Thumbnail
            style={styles.imageProduct}
            source={{uri: `${isidata.photo}`}}
          />
        </Left>
        <Body style={styles.desc} >
          <Text style={styles.textProduct}>{isidata.name}</Text>
          <Text style={styles.textProduct}>{isidata.id_firebase}</Text>
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
              <Text>chat kios</Text>
            </View>
          </View>
          <ScrollView>
            <View>
              <FlatList
                style={styles.flatList}
                data={this.props.Propsuser.userList}
                keyExtractor={(item, index) => index}
                renderItem={this.renderItem}
              />
            </View>
          </ScrollView>
        </View>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    Propsuser: state.user
  }
}
export default connect(mapStateToProps)(withNavigation(Chat));

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
