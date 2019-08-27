import React, { Component } from 'react';
import { Container, Header, Footer, FooterTab, Tab, Tabs, Item, Button, Text, Icon, Input, ScrollableTab } from 'native-base';
import { StyleSheet } from "react-native";
import SubCategory from './SubCategory';
import Bottomtab from "../components/bottomTab";

export default class TabsScrollableExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={{ backgroundColor: "#008000" }} searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Tabs renderTabBar={() => <ScrollableTab style={{ backgroundColor: "#008000" }} tabsContainerStyle={{ backgroundColor: '#85FF00' }} underlineStyle={{ backgroundColor: '#85FF00' }} />}>
          <Tab heading="Sayuran">
            <SubCategory />
          </Tab>
          <Tab heading="Daging Dagingan">
            <SubCategory />
          </Tab>
          <Tab heading="Buah">
            <SubCategory />
          </Tab>
          <Tab heading="Sembako">
            <SubCategory />
          </Tab>
          <Tab heading="Bumbu Dapur">
            <SubCategory />
          </Tab>
        </Tabs>
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