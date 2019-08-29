import React, { Component } from 'react';
import { FlatList, Image, StatusBar } from "react-native";
import { Container, Header, Content, Title, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
const data2 = [
  {
    imageUrl: "https://i1.wp.com/wp.tumbasin.id/wp-content/uploads/2019/06/telur-compressor.png",
    title: "something"
  },
  {
    imageUrl: "https://i1.wp.com/wp.tumbasin.id/wp-content/uploads/2019/06/telur-compressor.png",
    title: "something two"
  },
  {
    imageUrl: "https://i1.wp.com/wp.tumbasin.id/wp-content/uploads/2019/06/telur-compressor.png",
    title: "something three"
  },
  {
    imageUrl: "https://i1.wp.com/wp.tumbasin.id/wp-content/uploads/2019/06/telur-compressor.png",
    title: "something four"
  },
  {
    imageUrl: "https://i1.wp.com/wp.tumbasin.id/wp-content/uploads/2019/06/telur-compressor.png",
    title: "something five"
  },
  {
    imageUrl: "https://i1.wp.com/wp.tumbasin.id/wp-content/uploads/2019/06/telur-compressor.png",
    title: "something five"
  },
  {
    imageUrl: "https://i1.wp.com/wp.tumbasin.id/wp-content/uploads/2019/06/telur-compressor.png",
    title: "something five"
  },
];
export default class ListThumbnailExample extends Component {
  constructor(props) {
    super(props);
    this.initData = data2;

    this.state = {
      data2: data2,
      data: this.initData,
      position: 1,
      interval: null,
      testSub: '',
    };

  }
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>status orderanmu</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <FlatList

            data={this.state.data2}
            renderItem={({ item: rowData }) => {
              return (
                <List>
                  <ListItem thumbnail onPress={() => { this.props.navigation.navigate('Maps') }}>
                    <Left>
                      <Thumbnail square source={{ uri: `${rowData.imageUrl}` }} />
                    </Left>
                    <Body>
                      <Text>{rowData.imageUrl}</Text>
                      <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Text>View</Text>
                      </Button>
                    </Right>
                  </ListItem>
                </List>
              );
            }}
            keyExtractor={(item, index) => index}
          />

        </Content>
      </Container>
    );
  }
}