import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { withNavigation } from 'react-navigation';
import { Container, Header, Badge, Footer, FooterTab, Button, Icon } from 'native-base';

export class bottomTab extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        
        }
    }
    render() {
    return (
      <Footer>
      <FooterTab style={{backgroundColor:"#037F03"}}>
        <Button onPress={ ()=> { this.props.navigation.navigate('Home')}} badge vertical>
          <Badge><Text>2</Text></Badge>
          <Icon name="apps" />
          <Text style={{color:"white"}} >Apps</Text>
        </Button>
        <Button onPress={ ()=> { this.props.navigation.navigate('Register')}} vertical>
          <Icon name="camera" />
          <Text style={{color:"white"}}>Camera</Text>
        </Button>
        <Button onPress={ ()=> { this.props.navigation.navigate('Login')}}  badge vertical>
          <Badge warning ><Text>51</Text></Badge>
          <Icon  name="cart" />
          <Text style={{color:"white"}}>Keranjang</Text>
        </Button>
        
      </FooterTab>
    </Footer>
      
    )
  }
}

export default withNavigation(bottomTab)

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(3,127,3,1)",
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    width: "99.74%",
    height: "58.93%",
    flexDirection: "row",
    paddingRight: 30,
    paddingLeft: 30
  },
  segmentTextWrapper1: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    padding: 6,
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  text1: {
    color: "rgba(0,0,0,1)",
    fontSize: 13,
    fontFamily: "roboto-regular"
  },
  segmentTextWrapper2: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    padding: 6,
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  text2: {
    color: "rgba(0,0,0,1)",
    fontSize: 13,
    fontFamily: "roboto-regular"
  },
  segmentTextWrapper3: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    padding: 6,
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  text3: {
    color: "rgba(0,0,0,1)",
    fontSize: 13,
    fontFamily: "roboto-regular"
  }
});
