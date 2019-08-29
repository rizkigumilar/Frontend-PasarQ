import React, { Component } from "react";
import { FlatList, Text, Image, StatusBar, View, StyleSheet } from "react-native";
import data from './dummy'
import Slideshow from 'react-native-image-slider-show'
import { Container, Header, Item, Input, Content, Card, CardItem, Fab, Button, Icon, Left, Body, Right } from 'native-base';
import { getCategory } from '../publics/redux/actions/category';
import { getStore } from '../publics/redux/actions/store';
import { connect } from 'react-redux'
import Bottomtab from "../components/bottomTab";
import { ScrollView } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      category: [],
      store: [],
      position: 1,
      interval: null,
      testSub: '',
      dataSource: [
        {
          url: 'https://www.borneonews.co.id/images/upload/1485161905-pasar2.jpg',
          title: 'Nikmati kemudahan belanja kepasar',
        }, {
          url: 'http://1.bp.blogspot.com/-hrH7JhJY2DM/TaKv8WQrfkI/AAAAAAAAASw/pgb8bhB6Bm4/s1600/p05-a-1_55.jpg',
          title: 'Tanpa harus pergi kepasar',
        }, {
          url: 'https://asset.kompas.com/data/photo/2013/08/13/1707181fresh-marketok780x390.jpg',
          title: 'hanya dengan satu klik',
        }
      ]
    };
  }
  componentDidMount = async () => {
    await this.props.dispatch(getCategory());
    this.setState({
      category: this.props.category.categoryList,
    });
    await this.props.dispatch(getStore());
    this.setState({
      store: this.props.store.storeList
    })
  };
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        })
      }, 2000)
    })
  }
  componentWillUnmount() {
    clearInterval(this.state.interval)
  }
  render() {
    // console.log('data', this.state.category)
    // console.log('data store', this.state.store)
    return (
      <Container>

        <Header style={{ backgroundColor: '#008000' }} searchBar rounded>
          <Text style={{ color: 'white', fontSize: 36, fontWeight: 'bold' }}>PasarQ</Text>
        </Header>
        <ScrollView>
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
          <Card style={{ height: 350 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', justifyContent: 'center', textAlign: 'center' }}>Kategori Produk</Text>
            <FlatList
              horizontal
              data={this.state.category}
              renderItem={({ item: rowData }) => {
                return (
                  <Card style={{ width: 200 }}>
                    <CardItem button onPress={() => this.props.navigation.navigate('Product', { idCat: rowData.id_category })} cardBody>
                      <Image style={{ width: 200, height: 260 }} source={{ uri: `${rowData.image}` }} />
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
          <Card style={{ height: 180 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', justifyContent: 'center', textAlign: 'center' }}>Daftar Toko Mitra</Text>
            <FlatList
              horizontal
              data={this.state.store}
              renderItem={({ item: rowData }) => {
                return (
                  <Card style={{ heigth: 150, width: 200 }}>
                    <CardItem button onPress={() => this.props.navigation.navigate('StoreProduct', { idStore: rowData.id_store, name: rowData.name_store })} cardBody>
                      <Image style={{ width: 180, height: 100 }} source={{ uri: `${rowData.photo}` }} />
                    </CardItem>
                    <CardItem footer button onPress={() => this.props.navigation.navigate('StoreProduct', { idStore: item.id_store, name: rowData.name_store })}>
                      <Text>{rowData.name_store}</Text>
                    </CardItem>
                  </Card>
                );
              }}
              keyExtractor={(item, index) => index}
            />
          </Card>

        </ScrollView>
        <View>
          <Fab position="bottomRight" onPress={() => this.props.navigation.navigate('Cart')} style={{ backgroundColor: '#008000', top: "-80%", position: "absolute" }} >
            <Icon name="cart" type="Ionicons" style={{ color: 'white' }} />
          </Fab>
        </View>
        <Bottomtab style={styles.BottomtabStyele} />
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    category: state.category,
    store: state.store
  }
}

export default connect(mapStateToProps)(withNavigation(Home));
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(62,220,62,1)"
  },
  header: {
    flexDirection: 'row',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  label: {
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  BottomtabStyele: {
    top: "90.33%",
    left: "-8.56%",
    width: "117.01%",
    height: "9.67%",
    position: "absolute"
  }
});