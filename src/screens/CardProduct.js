import React, { Component } from 'react';
import { FlatList, Image, View, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import data from './dummy';
import { withNavigation } from 'react-navigation';
class CardProduct extends Component {
  constructor(props) {
    super();
    this.initData = data;
    this.state = {
      data: this.initData,
      showAlert: false,
    };
  }
  render() {

    return (
      <Container>
        <Content>
          <View style={styles.FlatList}>
            <FlatList
              data={this.state.data}
              numColumns={2}
              keyExtractor={item => item.id}
              renderItem={({ item, index }) => {
                return (
                  <Card >
                    <CardItem cardBody button onPress={() => { this.props.navigation.navigate('DetailProduct') }}>
                      <Image source={{ uri: `${item.image}` }} style={styles.image} />
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Button success >
                          <Text style={{ padding: 10, justifyContent: "center", textAlign: "center" }}>Rp {item.price} {item.name} / gram</Text>
                        </Button>
                      </Left>

                    </CardItem>
                  </Card>
                );
              }}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(CardProduct)
const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 60
  },
  text: {
    fontSize: 30
  },
  Borrowed: {
    fontSize: 10,
    color: "white",
    textAlign: "center",
    backgroundColor: "grey",
    borderRadius: 10,
    paddingTop: 2,
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
    width: 60,
    height: 20,
    marginTop: 192
  },

  image: {
    width: 170,
    height: 211,
    borderRadius: 10
  },

  searchBar: {
    zIndex: 1,
    backgroundColor: "#fff",
    borderBottomColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
    marginTop: 15,
    alignSelf: "center",
    marginRight: 0,
    height: 38,
    width: 307,
    position: "absolute",
    borderRadius: 20
  },
  FlatList: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  item: {
    backgroundColor: "black",
    margin: 15,
    borderRadius: 8,
    elevation: 6,
    width: 145,
    height: 215
  }
});