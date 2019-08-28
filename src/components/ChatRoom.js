import React, {Component, Fragment} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Icon} from 'native-base';

class ChatRoom extends React.Component {
  state = {
    messages: [],
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
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
                source={require('../assets/group.png')}
              />
            </View>
            <Text style={styles.juragan}>Nama Juragan</Text>
          </View>
        </View>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
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
    flexDirection : 'row',
    flex : 1
  },
  imageProduct: {
    width: 50,
    height: 50,
    justifyContent : "center",
    marginTop : 5
  },
  juragan : {
    flex: 1,
    color : 'black',
    justifyContent : "center",
    marginTop : 20,
    marginLeft : 5
  }
});
