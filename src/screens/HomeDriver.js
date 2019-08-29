import React, { Component } from "react";
import { StyleSheet, View, Image, AsyncStorage, Alert, TouchableHighlight, StatusBar } from "react-native";
import { Container, Content, Form, Label, Header, Item, Icon, Button, Input, Text, Fab } from 'native-base'
import Bottomtab from "../components/BottomTabsDriver";
import { NavigationEvents } from 'react-navigation';


export default class Home extends Component {
    state = {
        email: '',
        name: '',
        telp: '',
        latitude: '',
        longitude: '',
        photo: ''
    };

    constructor(props) {
        super(props)
        AsyncStorage.getItem('email').then(value => {
            this.setState({ email: value });
        });
        AsyncStorage.getItem('name').then(value => {
            this.setState({ name: value });
        });
        AsyncStorage.getItem('latitude').then(value => {
            this.setState({ latitude: value });
        });
        AsyncStorage.getItem('longitude').then(value => {
            this.setState({ longitude: value });
        });
        AsyncStorage.getItem('telp').then(value => {
            this.setState({ telp: value });
        });
        AsyncStorage.getItem('photo').then(value => {
            this.setState({ photo: value });
        });
    }

    del = () => {
        AsyncStorage.removeItem('userid')
        AsyncStorage.removeItem('jwToken')
        AsyncStorage.removeItem('role_id')
            .then(() => {
                this.setState({ isLogin: false })
                this.setState({ data: [] })
                Alert.alert(
                    'Logout',
                    'Logout success', [
                        {
                            text: 'OK', onPress: () => this.props.navigation.navigate('Auth')
                        }
                    ]
                )
            })
    };

    render() {
        return (
            <Container>
                <NavigationEvents
                    onWillFocus={() =>
                        AsyncStorage.getItem("name").then(value => {
                            this.setState({ name: value });
                        })
                    }
                />
                <NavigationEvents
                    onWillFocus={() =>
                        AsyncStorage.getItem("telp").then(value => {
                            this.setState({ telp: value });
                        })
                    }
                />
                <NavigationEvents
                    onWillFocus={() =>
                        AsyncStorage.getItem("email").then(value => {
                            this.setState({ email: value });
                        })
                    }
                />
                <NavigationEvents
                    onWillFocus={() =>
                        AsyncStorage.getItem("photo").then(value => {
                            this.setState({ photo: value });
                        })
                    }
                />
                <Content>
                    <View style={styles.container}>
                        <Image
                            style={styles.profileImage}
                            source={require('../assets/group.png')}
                        />
                    </View>
                    <Form style={styles.formInput}>
                        <View>
                            <Item inlineLabel>
                                <Label>Nama Driver : {this.state.name}</Label>
                            </Item>
                            <Item inlineLabel>
                                <Label>Email : {this.state.email}</Label>
                            </Item>
                            <Item inlineLabel last>
                                <Label>telp : {this.state.telp}</Label>
                            </Item>
                        </View>

                    </Form>
                    <View style={styles.save}>
                        <Button
                            style={styles.buttonSave}
                            rounded
                            info
                            onPress={() => this.props.navigation.navigate('DriverJob')}>
                            <Text style={{ color: "white" }}>Lihat Daftar Antar</Text>
                        </Button>
                    </View>

                    <View>
                        <StatusBar style={{ backgroundColor: '#008000' }} />
                        <View>
                            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.del}>
                                <Text style={styles.loginText}>Logout</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginTop: 248 }}>
                            <Bottomtab style={styles.BottomtabStyele} />
                        </View>

                    </View>
                </Content>
            </Container>
        )
    }
}

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
