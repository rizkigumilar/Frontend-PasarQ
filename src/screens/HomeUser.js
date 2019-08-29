import React, { Component } from "react";
import { FlatList, Text, Image, StatusBar, View } from "react-native";
import data from './dummy'
import Slideshow from 'react-native-image-slider-show'
import { Container, Header, Item, Input, Content, Card, CardItem, Fab, Button, Icon, Left, Body, Right } from 'native-base';
import { getCategory } from '../publics/redux/actions/category';
import { connect } from 'react-redux'
import Bottomtab from "../components/bottomTab";

class Home extends Component {
  constructor(props) {
    super(props);
    this.initData = data;

    this.state = {
      category: [],
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
  componentDidMount = async () => {
    await this.props.dispatch(getCategory());
    this.setState({
      category: this.props.category.categoryList,
    });
  };
  // componentWillMount() {
  //   this.setState({
  //     interval: setInterval(() => {
  //       this.setState({
  //         position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
  //       })
  //     }, 2000)
  //   })
  // }

  // componentWillUnmount() {
  //   clearInterval(this.state.interval)
  // }
  render() {
    console.log('data', this.state.category)
    return (
      <Container>
        <StatusBar backgroundColor="green" />
        <Header style={{ backgroundColor: 'white' }} searchBar rounded>
          <Item>
            <Input placeholder="Search" />
            <Icon name="ios-search" />
          </Item>
          <Button>
            <Text>Search</Text>
          </Button>
        </Header>
        <Slideshow titleStyle={{
          fontWeight: 'bold',
          color: 'white',
          textShadowColor: 'black',
          textShadowOffset: { width: -1, height: -1 },
          textShadowRadius: 5,
          fontSize: 19
        }}
          captionStyle={{
            fontWeight: 'bold', color: 'white', textShadowColor: 'black', textShadowOffset: { width: -1, height: -1 }, textShadowRadius: 5,

          }}
          height={200}
          arrowSize={15}
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })} />
        <Card style={{ height: 150 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', justifyContent: 'center', textAlign: 'center' }}>Kategori Produk</Text>
          <FlatList
            horizontal
            data={this.state.category}
            renderItem={({ item: rowData }) => {
              return (
                <Card style={{ width: 100 }}>
                  <CardItem button onPress={() => this.props.navigation.navigate('Product', { idCat: rowData.id_category })} cardBody>
                    <Image style={{ width: 100, height: 60 }} source={{ uri: `${rowData.image}` }} />
                  </CardItem>
                  <CardItem footer button onPress={() => this.props.navigation.navigate('Product', { idCat: rowData.id_category })}>
                    <Text>{rowData.name_category}</Text>
                  </CardItem>
                </Card>
              );
            }}
            keyExtractor={(item, index) => index}
          />
        </Card>
        <Card style={{ height: 280 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', justifyContent: 'center', textAlign: 'center' }}>Produk Terlaris</Text>
          <FlatList
            horizontal
            data={this.state.data}
            renderItem={({ item: rowData }) => {
              return (
                <Card style={{ heigth: 300, width: 200 }}>
                  <CardItem button onPress={() => this.props.navigation.navigate('Product')} cardBody>
                    <Image style={{ width: 180, height: 170 }} source={{ uri: `${rowData.image}` }} />
                  </CardItem>
                  <CardItem footer button onPress={() => this.props.navigation.navigate('Product')}>
                    <Text>{rowData.name}</Text>
                  </CardItem>
                </Card>
              );
            }}
            keyExtractor={(item, index) => index}
          />
        </Card>
        <View>
          <Fab position="bottomRight" onPress={() => this.props.navigation.navigate('Cart')} style={{ backgroundColor: '#008000', top: "-100%", position: "absolute" }} >
            <Icon name="cart" type="Ionicons" style={{ color: 'white' }} />
          </Fab>
          <Bottomtab />
        </View>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    category: state.category
  }
}

export default connect(mapStateToProps)(Home);