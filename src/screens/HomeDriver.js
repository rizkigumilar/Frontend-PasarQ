import React, { Component } from "react";
import { StyleSheet, View, Image, AsyncStorage, Alert, TouchableHighlight, StatusBar } from "react-native";
import { Container, Content, Form, Label, Header, Item, Icon, Button, Input, Text, Fab } from 'native-base'
import Bottomtab from "../components/BottomTabsDriver";


export default class Home extends Component {
    state = {
        token: null,
        email: '',
        name: '',
        id_user: '',
    };
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
                {/* <NavigationEvents
              onWillFocus={() =>
                AsyncStorage.getItem("name").then(value => {
                  this.setState({ name: value });
                })
              }
            />
            <NavigationEvents
              onWillFocus={() =>
                AsyncStorage.getItem("token").then(value => {
                  this.setState({ token: value });
                })
              }
            />
            <NavigationEvents
              onWillFocus={() =>
                AsyncStorage.getItem("email").then(value => {
                  this.setState({ email: value });
                })
              }
            /> */}
                <Content>
                    <View style={styles.container}>
                        <Image
                            style={styles.profileImage}
                            source={require('../assets/group.png')}
                        />
                    </View>
                    <Form style={styles.formInput}>
                        {this.state.token == null ? (
                            <View>
                                <Item inlineLabel>
                                    <Label>Nama Driver :</Label>
                                    <Input />
                                </Item>
                                <Item inlineLabel>
                                    <Label>Email :</Label>
                                    <Input />
                                </Item>
                                <Item inlineLabel last>
                                    <Label>Location :</Label>
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
                        <View style={{ marginTop: 164 }}>
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
