
import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Header, Left, Button, Icon, Body, Title, Thumbnail, Fab } from 'native-base'


class DetailProduct extends Component {
    constructor(props) {
        super(props)
        this.initData = Data
        this.state = {
            data: this.initData
        }
    }

    render() {
        const uri = 'https://cdn2.tstatic.net/jakarta/foto/bank/images/ilustrasi-tahu_20180504_111423.jpg'
        return (
            <>
                <StatusBar backgroundColor='#1bbd19' />
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
                    <Thumbnail square source={{ uri: uri }} style={styles.img} />
                    <Text style={styles.itemName}> Tahu Putih </Text>
                    <Text style={styles.itemPrice}> Rp. 7.500 </Text>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Cart')}>
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
                    <Text style={styles.desc}> Tahu Putih Kotak per bugkus </Text>
                </View>
                <Fab position="bottomRight" onPress={() => this.props.navigation.navigate('ChatRoom')} style={{ backgroundColor: '#008000', top: "-100%", position: "absolute" }} >
                    <Icon name="chatboxes" type="Ionicons" style={{ color: 'white' }} />
                </Fab>
            </>
        )
    }
}
export default DetailProduct

const styles = StyleSheet.create({
    img: {
        height: '45%',
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