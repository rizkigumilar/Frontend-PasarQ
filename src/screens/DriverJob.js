import React, { Component } from 'react';
import { Container, Header,Body, Title,Left,Button,Icon, Tab, Tabs,TabHeading,Text,ScrollableTab } from 'native-base';
import Tab1 from './SubCategory';
import Tab2 from '../components/ListJob';


export class DriverJob extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={{backgroundColor: '#037F03'}}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Title> List Barang </Title>
          </Body>
        </Header>

        <Tabs  renderTabBar={() => <ScrollableTab underlineStyle={{ backgroundColor: '#008000' }} />}>
          <Tab heading={
            <TabHeading style={{ backgroundColor: "#FFFFFF" }}>
              <Text style={{ color: 'black' }}>1 day service</Text>
            </TabHeading>}>
            <Tab2 />
          </Tab>

          <Tab heading={
            <TabHeading style={{ backgroundColor: "#FFFFFF" }}>
              <Text style={{ color: 'black' }}>1 hour service</Text>
            </TabHeading>}>
            <Tab2 />
          </Tab>

          <Tab heading={
            <TabHeading style={{ backgroundColor: "#FFFFFF" }}>
              <Text style={{ color: 'black' }}>Delivered</Text>
            </TabHeading>}>
            <Tab2 />
          </Tab>

        </Tabs>

      </Container>
    )
  }
}

export default DriverJob
