import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import {
    Form,
    Label,
    Item,
    Input,
    Container,
    Header,
    Content,
    Button,
} from 'native-base';
import { withNavigation } from 'react-navigation';

class ProfileToko extends Component {
    state = {
        token: null,
        email: '',
        name: '',
        id_user: '',
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
                            source={{ uri: 'https://icons-for-free.com/iconfiles/png/512/agenda+app+contacts+online+profile+user+icon-1320183042135412367.png' }}
                        />
                    </View>
                    <Form style={styles.formInput}>
                        {this.state.token == null ? (
                            <View>
                                <Item floatingLabel>
                                    <Label>Nama Toko </Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel>
                                    <Label>Nama Pasar</Label>
                                    <Input />
                                </Item>
                            </View>
                        ) : (
                                <View>
                                    <Item floatingLabel>
                                        <Label>Nama Toko : {this.state.name}</Label>
                                        <Input />
                                    </Item>s
                <Item floatingLabel>
                                        <Label>Nama Pasar : {this.state.email}</Label>
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
                            <Text style={{ color: "white" }}>Daftarkan Toko</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default withNavigation(ProfileToko);

const styles = StyleSheet.create({
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