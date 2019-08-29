import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, AsyncStorage, Alert, Image } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux';
import { Header, Left, Button, Icon, Body, Title, Thumbnail, Fab } from 'native-base'
import { getItemId } from '../publics/redux/actions/item';
import { postCart } from '../publics/redux/actions/cart';


class DetailProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idItem: props.navigation.getParam('idItem'),
            data: [],
            idUser: ''
        }
        AsyncStorage.getItem('userid').then(value => {
            this.setState({ idUser: value });
        });
    }
    componentDidMount = async () => {
        await this.props.dispatch(getItemId(this.state.idItem))
        this.setState({
            data: this.props.item,
        });

    };
    addToCart = async () => {
        let data = {
            id_item: this.state.data.id_item,
            id_user: this.state.idUser
        }
        await this.props.dispatch(postCart(data)).then((res) => {
            this.props.navigation.navigate('Cart')
        }).catch(() => {
            Alert.alert("Barang sudah ditambahkan")
        })
    };
    render() {
        console.warn(this.state.idUser)
        return (
            <View>
                <View style={styles.header}>
                    <View style={styles.back}>
                        <Icon
                            name="arrow-back"
                            color="#000000"
                            size={32}
                            style={styles.menuIcon}
                            onPress={() => this.props.navigation.navigate('Product')}
                        />
                    </View>
                    <View style={styles.label}>
                        <Text>Product</Text>
                    </View>
                </View>
                <View>
                    <Thumbnail square source={{ uri: this.state.data.image }} style={styles.img} />
                    <Text style={styles.itemName}> {this.state.data.name_item} </Text>
                    <Text style={styles.itemPrice}> Rp. {this.state.data.price} </Text>
                    <TouchableOpacity style={styles.button} onPress={() => this.addToCart()}>
                        <View>
                            <Text style={styles.buttonText}>
                                Tambah ke Keranjang
                            </Text>
                        </View>
                        <View>
                            <Icon
                                name="cart"
                                style={{ color: 'white', top: 10, left: 10 }}
                                size={32}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.desc}>Deskripsi Produk :</Text>
                    <Text style={styles.desc}> {this.state.data.description} </Text>
                </View>
                <View style={{ marginTop: 50 }}>
                    <Fab position="bottomRight" onPress={() => this.props.navigation.navigate('ChatRoom', { idStore: this.state.data.id_store, idItem: this.state.data.id_item })} style={{ backgroundColor: '#008000', top: "-100%", position: "absolute" }} >
                        <Icon name="chatboxes" type="Ionicons" style={{ color: 'white' }} />
                    </Fab>
                </View>
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        item: state.item.itemDetail,
    }
}
export default connect(mapStateToProps)(DetailProduct)

const styles = StyleSheet.create({
    img: {
        height: '50%',
        width: '100%'
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        left: 20
    },
    button: {
        backgroundColor: '#008000',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 8,
        marginTop: '10%',
        width: 280,
        alignSelf: 'center',
        flexDirection: "row"
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '5%',
        marginTop: '4%'
    },
    itemPrice: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: '6%',
        marginTop: '2%'
    },
    desc: {
        marginLeft: '4%',
        marginTop: '4%'
    },
    header: {
        flexDirection: 'row',
        height: 60,
    },
    back: {
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    menuIcon: {
        width: 20,
        height: 30,
    },
    label: {
        justifyContent: 'center',
    },
})