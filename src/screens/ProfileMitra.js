import React, { Component, Fragment } from "react";
import { StyleSheet, View, Image, AsyncStorage, Alert, TouchableHighlight, StatusBar } from "react-native";
import { Container, Content, Form, Label, Header, Item, Icon, Button, Input, Text, Fab } from 'native-base'
import Bottomtab from "../components/BottomTabMitra";
import {NavigationEvents} from 'react-navigation';
import Geocoder from 'react-native-geocoder';
import { getByIdUser} from '../publics/redux/actions/store'
import { connect } from 'react-redux'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idItem: props.navigation.getParam('idItem'),
            photoStore: props.navigation.getParam('photoStore'),
            store: [],
            iduser: '',
            data:[],
            email: '',
            address: ''
        
        }
        AsyncStorage.getItem('userid').then(value => {
            this.setState({iduser: value});
          });
          AsyncStorage.getItem('email').then(value => {
            this.setState({email: value});
          });
          AsyncStorage.getItem('address').then(value => {
            this.setState({address: value});
          });
    }
      
      geocode = async () => {
        var lat = this.state.region.latitude
        var lng = this.state.region.longitude
        var Location = {lat, lng};
        Geocoder.geocodePosition(Location);
        const address = res[0].subLocality + ', ' + res[0].subAdminArea + ', ' + res[0].adminArea;
    
        return address
      };

    render() {
        return (
            <Container>
                <NavigationEvents
                onWillFocus={() =>
                 AsyncStorage.getItem('email').then(value => {
                   this.setState({email: value});
                 })
                 }
                 />
                 <NavigationEvents
                onWillFocus={() =>
                AsyncStorage.getItem('address').then(value => {
                    this.setState({address: value});
                 })
                 }
        />
                <Content>
                    <View style={styles.container}>
                        <Image
                            style={styles.profileImage}
                            source={{ uri: `${this.state.photoStore}` }}
                        />
                    </View>
                    <Form style={styles.formInput}>
                        {this.state.token == null ? (
                            <View>
                                <Item inlineLabel>
                                    <Label>Nama Toko : {this.state.idItem}</Label>
                                    <Input />
                                </Item>
                                <Item inlineLabel>
                                    <Label>Email : {this.state.email}</Label>
                                    <Input />
                                </Item>
                                <Item inlineLabel last>
                                    <Label>Location : {this.state.address}</Label>
                                    <Input />
                                </Item>
                            </View>
                        ) : (
                                <View>
                                    <Item inlineLabel>
                                        <Label>Full Name : {this.state.name}</Label>
                                        <Input />
                                    </Item>
                                    <Item inlineLabel>
                                        <Label>Email : {this.state.email}</Label>
                                        <Input />
                                    </Item>
                                    <Item inlineLabel last>
                                        <Label>New Password :</Label>
                                        <Input />
                                    </Item>
                                </View>
                            )}
                    </Form>
                    <View style={styles.save}>
                        <Button
                            style={styles.buttonSave}
                            rounded
                            info
                            onPress={() => this.props.navigation.navigate('BarangToko')}>
                            <Text style={{ color: "white" }}>Lihat Jenis Barang</Text>
                        </Button>
                    </View>

                    <View>
                        <StatusBar style={{ backgroundColor: '#008000' }} />
                        <View>
                            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.del}>
                                <Text style={styles.loginText}>Logout</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginTop: 164 }}>
                            <Bottomtab style={styles.BottomtabStyele} />
                        </View>

                    </View>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        store: state.store
    };
};
export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
    BottomtabStyele: {
        top: "90.33%",
        left: "-8.56%",
        width: "117.01%",
        height: "9.67%",
        position: "absolute",
    },
    buttonContainer: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        borderRadius: 30,
        marginLeft: 120,
    },
    loginButton: {
        backgroundColor: "#008000",
    },
    loginText: {
        color: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 45,
    },
    profileImage: {
        width: 180,
        height: 180,
    },
    text: {
        fontSize: 30,
    },
    formInput: {
        marginHorizontal: 10,
    },
    buttonSave: {
        width: 150,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        margin: 8,
        marginTop: 0,
        backgroundColor: "#008000"
    },
    save: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
        flexDirection: 'row',
        marginHorizontal: 100,
    },
});
