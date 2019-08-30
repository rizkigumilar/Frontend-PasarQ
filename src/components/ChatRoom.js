import React, {Component, Fragment} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {StyleSheet, View, Text, Image, AsyncStorage} from 'react-native';
import {Icon} from 'native-base';
import { Database, Auth } from '../publics/firebase/index'

class ChatRoom extends React.Component {
  constructor(props) {
    super();
    this.initData = Data;
    this.state = {
      messages: [],
      datauser: props.navigation.getParam('datauser'),
      text: '',
      avatar: '',
      name: ''
    };

    AsyncStorage.getItem('photo', (err, result) => {
      if (result) {
          this.setState({
              avatar: result
          })
      }
  })
  AsyncStorage.getItem('name', (err, result) => {
    if (result) {
        this.setState({
            name: result
        })
    }
})
  }

  componentWillMount() {
       
    Database.ref('messages').child(Auth.currentUser.uid).child(this.state.datauser.id_firebase )
        .on('child_added', (value) => {
            this.setState((prevState) => {
                return {
                    messages: GiftedChat.append(prevState.messages, value.val())
                }
            })
        })
    }

onSend = () => {

    if (this.state.text.length > 0) {
        let msgId = Database.ref('messages').child(Auth.currentUser.uid).child(this.state.datauser.id_firebase).push().key
        let updates = {}
        let message = {
            _id: msgId,
            text: this.state.text,
            createdAt: new Date(),
            user: {
                _id: Auth.currentUser.uid,
                username: this.state.datauser.name,
                avatar: this.state.avatar
            }
        }

        updates['messages/' + this.state.datauser.id_firebase + '/' + Auth.currentUser.uid + '/' + msgId] = message
        updates['messages/' + Auth.currentUser.uid + '/' + this.state.datauser.id_firebase + '/' + msgId] = message

        Database.ref().update(updates)
        this.setState({ text: '' })
    }
}

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
              onPress={() => this.props.navigation.navigate('Chat')}
            />
          </View>
          <View style={styles.label}>
            <View style={styles.image}>
              <Image
                style={styles.imageProduct}
                source={{uri: `${this.state.datauser.photo}`}}
              />
            </View>
            <Text style={styles.juragan}>{this.state.datauser.name}</Text>
          </View>
        </View>
        <GiftedChat
          text={this.state.text} showUserAvatar={true}
          messages={this.state.messages} onSend={this.onSend}
          user={{
              _id: Auth.currentUser.uid,
              username: this.state.datauser.name,
              avatar: this.state.avatar
            }}
              onInputTextChanged={(value) => this.setState({ text: value })}
              isLoadingEarlier={true}
          />
      </Fragment>
    );
  }
}

export default ChatRoom;

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
    flexDirection: 'row',
    flex: 1,
  },
  imageProduct: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    marginTop: 5,
  },
  juragan: {
    flex: 1,
    color: 'black',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 5,
  },
});
