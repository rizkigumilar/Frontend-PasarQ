import React, { Component } from 'react';
import { Container, Header,Footer, FooterTab, Tab,  Tabs,Item,Button,Text,Icon,Input, ScrollableTab } from 'native-base';
import { StyleSheet} from "react-native";
import Tab1 from './tab1';
import Bottomtab from "../components/bottomTab";

export default class TabsScrollableExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={{ backgroundColor: "#037F03" }} searchBar rounded>
					<Item>
						<Icon name="ios-search" />
						<Input placeholder="Search" />
						<Icon name="ios-people" />
					</Item>
					<Button transparent>
						<Text>Search</Text>
					</Button>
				</Header>
        <Tabs  renderTabBar={()=> <ScrollableTab style={{ backgroundColor: "#037F03" }} tabsContainerStyle={{ backgroundColor: '#85FF00' }} underlineStyle={{ backgroundColor: '#85FF00' }} />}>
          <Tab  heading="Sayuran">
            <Tab1   />
          </Tab>
          <Tab  heading="Daging Dagingan">
            <Tab1   />
          </Tab>
          <Tab  heading="Buah">
            <Tab1   />
          </Tab>
          <Tab  heading="Sembako">
            <Tab1   />
          </Tab>
          <Tab  heading="Bumbu Dapur">
            <Tab1   />
          </Tab>
        </Tabs>
        <Bottomtab	style={styles.BottomtabStyele}/>

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