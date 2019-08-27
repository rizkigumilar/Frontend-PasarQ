import React, { Component } from "react";
import { FlatList, Text ,Image} from "react-native";
import data from './dummy'
import Slideshow from 'react-native-image-slider-show'
import { Container, Header,Item,Input, Content, Card, CardItem, Thumbnail,  Button, Icon, Left, Body, Right } from 'native-base';
import { Colors } from "react-native/Libraries/NewAppScreen";
import Bottomtab from "../components/bottomTab";

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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.initData = data;

    this.state = {
      data2: data2,
      data: this.initData,
      position: 1,
            interval: null,
            dataSource: [
                {
                  url: 'https://www.borneonews.co.id/images/upload/1485161905-pasar2.jpg',
                  title: 'Nikmati kemudahan belanja kepasar',
                  caption: 'pasar Tumpah ',
                }, {
                  url: 'https://cdn.brilio.net/news/2017/03/18/123095/603331-penjual-ini-punya-paras-cantik-yang-bikin-konsumen-gagal-fokus.jpg',
                  title: 'Tanpa harus pergi kepasar',
                  caption: 'pasar Tumpeh-tumpeh',
                }, {
                  url: 'https://cdn-radar.jawapos.com/uploads/radarmadura/news/2019/02/05/penertiban-pedagang-pasar-tumpah-tak-jelas_m_117804.jpg',
                  title: 'hanya dengan satu klik',
                  caption: 'Pasar keramat jati',
                }
            ]
    };
  }
      componentWillMount(){
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                })
            }, 2000)
        })
    }

    componentWillUnmount(){
        clearInterval(this.state.interval)
    }
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'green'}} searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Slideshow titleStyle={{fontWeight: 'bold',
                                color: 'white',
                                textShadowColor: 'black',
                                textShadowOffset: {width: -1, height: -1},
                                textShadowRadius: 5,
                                fontSize: 19
                                  }}
                captionStyle={{ fontWeight: 'bold',color: 'white',textShadowColor: 'black', textShadowOffset: {width: -1, height: -1},textShadowRadius: 5,
                            
                         }}
              height={200}
              arrowSize={15}
              dataSource={this.state.dataSource}
              position={this.state.position}
              onPositionChanged={position => this.setState({ position })} />
      <Text>Kategori Produk </Text>
      <FlatList
        horizontal
        data={this.state.data2}
        renderItem={({ item: rowData }) => {
          return (
           <Card >
            <CardItem button onPress={() => alert("This is Card Footer")} cardBody>
              <Image style={{width:60,height:60}} source={{uri: `${rowData.imageUrl}`}} />
            </CardItem>
            <CardItem footer button onPress={() => alert("This is Card Footer")}>
              <Text>telor</Text>
            </CardItem>
          </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />
      <Card>
        <Text>test</Text>
      </Card>
      <FlatList
        horizontal
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
           <Card >
            <CardItem button onPress={() => alert("This is Card Footer")} cardBody>
              <Image style={{width:80,height:80}} source={{uri: `${rowData.image}`}} />
            </CardItem>
            <CardItem footer button onPress={() => alert("This is Card Footer")}>
              <Text>{rowData.name}</Text>
            </CardItem>
          </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />
      <Bottomtab/>
      </Container>
    );
  }
}