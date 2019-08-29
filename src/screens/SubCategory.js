import React, { Component } from 'react';
import { Container, Header, Footer, TabHeading, Tab, Tabs, Item, Button, Text, Icon, Input, ScrollableTab, Fab } from 'native-base';
import { StyleSheet, StatusBar, FlatList } from "react-native";
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
      data: this.props.subcategory,
    });
  };

  render() {
    console.log("param", this.state.data)
    console.log("id category", this.state.idCat)
    return (
      <Container>

        <Header hasTabs style={{ backgroundColor: "#008000" }} searchBar rounded>
        </Header>

        <FlatList
          pagingEnabled={true}
          horizontal
          data={this.state.data}
          renderItem={({ item: rowData }) => {
            return (
              <Tabs>
                <Tab heading={<TabHeading style={{ backgroundColor: "#008000" }}><Text style={{ color: '#FFFFFF' }}>{rowData.name_subcategory}</Text></TabHeading>}>
                  <CardProduct id_subcategory={rowData.id_subcategory} />
                </Tab>
              </Tabs>
            );
          }}
          keyExtractor={(item, index) => index}
        />




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
    subcategory: state.subcategory.subcategoryList
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