import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { Form, Label, Item, Input, Container, Header, Content, Button, Picker } from 'native-base';
import { postStore } from '../publics/redux/actions/store'
import { getMarket } from '../publics/redux/actions/market'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

class AddToko extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: [],
            market: [],
            namaMarket: '',
            idMarket: '',
            namaToko: '',
            iduser: ''
        }
        AsyncStorage.getItem('userid').then(value => {
            this.setState({ iduser: value });
        });
    }

    DaftarToko = () => {
        console.log('asdasd' + this.state.idMarket)
        this.props.dispatch(postStore({
            name_store: this.state.namaToko,
            id_market: this.state.idMarket,
            shop_selector: this.state.iduser
        }))
        this.props.navigation.navigate('Home')
    }

    componentWillMount = () => {
        setTimeout(async () => {
            await this.props.dispatch(getMarket(this.state.market)).then(() => {
                this.setState({
                    market: this.props.market
                })
            })
        }, 1000)
    }


    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.container}>
                        <Image
                            style={styles.profileImage}
                            source={{ uri: 'https://icons-for-free.com/iconfiles/png/512/agenda+app+contacts+online+profile+user+icon-1320183042135412367.png' }}
                        />
                    </View>
                    <Form style={styles.formInput}>
                        <View>
                            <Item floatingLabel>
                                <Label>Nama Toko </Label>
                                <Input name='namaToko' value={this.state.namaToko} onChangeText={(namaToko) => this.setState({ namaToko })} />
                            </Item>
                        </View>
                        <View style={{ marginTop: '13%' }}>
                            <Item rounded style={{ marginVertical: 10, borderColor: 'white', backgroundColor: '#DCDCDC', bottom: 30 }}>
                                <Image style={styles.inputIcon} source={{ uri: 'https://png.pngtree.com/svg/20160728/role_permissions_679763.png' }} />
                                <Picker
                                    mode="dropdown"
                                    placeholder="Select Your Market"
                                    selectedValue={this.state.idMarket}
                                    placeholderStyle="#DCDCDC"
                                    placeholderIconColor="#DCDCDC"
                                    style={{ paddingLeft: 20, color: 'black' }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ idMarket: itemValue })
                                    }>
                                    <Picker.Item label="Pilih Pasar" value="" />
                                    {this.state.market.map((item) =>
                                        <Picker.Item label={item.name_market} value={item.id_market} />
                                    )}
                                </Picker>
                            </Item>
                        </View>
                    </Form>
                    <View style={styles.save}>
                        <TouchableOpacity
                            style={styles.buttonSave}
                            onPress={() => this.DaftarToko()}>
                            <Text style={{ color: "white" }}>Daftarkan Toko</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        market: state.market.marketList
    };
};
export default connect(mapStateToProps)(AddToko);

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
        height: 40,
        justifyContent: 'center',
        flex: 1,
        borderRadius: 15,
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