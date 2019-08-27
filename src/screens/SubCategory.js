import React, { Component } from 'react';
import { Container, Header, Footer, TabHeading, Tab, Tabs, Item, Button, Text, Icon, Input, ScrollableTab, Fab } from 'native-base';
import { StyleSheet } from "react-native";
import CardProduct from './CardProduct';
import Bottomtab from "../components/bottomTab";

export default class SubCategory extends Component {
  render() {
    return (
      <Container>
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
        <Tabs  renderTabBar={() => <ScrollableTab underlineStyle={{ backgroundColor: '#008000' }} />}>
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