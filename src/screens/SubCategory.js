import React, { Component } from 'react';
import { Container, Header, Footer, TabHeading, Tab, Tabs, Item, Button, Text, Icon, Input, ScrollableTab, Fab } from 'native-base';
import { StyleSheet, StatusBar } from "react-native";
import CardProduct from './CardProduct';
import Bottomtab from "../components/bottomTab";
import { connect } from 'react-redux'
import { getSubcategoryByCategory } from '../publics/redux/actions/subcategory';


class SubCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      idCat: props.navigation.getParam('idCat'),
      data: []
    }
  }
  componentDidMount = async () => {
    await this.props.dispatch(getSubcategoryByCategory(this.state.idCat));
    this.setState({
      data: this.props.subcategory.subcategoryList,
    });
  };

  render() {
    console.log(this.state.data)
    return (
      <Container>
        <StatusBar backgroundColor="transparent" />
        <Header hasTabs style={{ backgroundColor: "#FFFFFF" }} searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Tabs renderTabBar={() => <ScrollableTab underlineStyle={{ backgroundColor: '#008000' }} />}>
          <Tab heading={
            <TabHeading style={{ backgroundColor: "#FFFFFF" }}>
              <Text style={{ color: 'black' }}>Sayur Mayur</Text>
            </TabHeading>}>
            <CardProduct />
          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: "#FFFFFF" }}>
            <Text style={{ color: 'black' }}>Daging Dagingan</Text>
          </TabHeading>}>
            <CardProduct />
          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: "#FFFFFF" }}>
            <Text style={{ color: 'black' }}>Buah</Text>
          </TabHeading>}>
            <CardProduct />
          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: "#FFFFFF" }}>
            <Text style={{ color: 'black' }}>Sembako</Text>
          </TabHeading>}>
            <CardProduct />
          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: "#FFFFFF" }}>
            <Text style={{ color: 'black' }}>Bumbu Dapur</Text>
          </TabHeading>}>
            <CardProduct />
          </Tab>
        </Tabs>
        <Fab position="bottomRight" onPress={() => this.props.navigation.navigate('Cart')} style={{ backgroundColor: '#008000', top: "-100%", position: "absolute" }} >
          <Icon name="cart" type="Ionicons" style={{ color: 'white' }} />
        </Fab>
        <Bottomtab style={styles.BottomtabStyele} />

      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    subcategory: state.subcategory
  }
}

export default connect(mapStateToProps)(SubCategory)
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(62,220,62,1)"
  },


  BottomtabStyele: {
    top: "90.33%",
    left: "-8.56%",
    width: "117.01%",
    height: "9.67%",
    position: "absolute"
  }
});