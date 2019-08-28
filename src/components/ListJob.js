import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import Data from '../components/Data'
import { Header, Left, Body, Title, Button, Icon } from 'native-base'

export default class ListSend extends Component {
    constructor(props) {
        super(props)
        this.initData = Data
        this.state = {
            data: this.initData
        }
    }
    renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <View style={styles.image}>
                    <Image style={styles.imageProduct} source={{ uri: `${item.image}` }} />
                </View>
                <View style={styles.desc}>
                    <Text style={styles.textProduct}>{item.name_item}</Text>
                    <Text style={styles.textProduct}>Quantity: {item.qyt}</Text>
                </View>
                <View style={styles.qty}>
                    <TouchableOpacity style={styles.buttonMin}>
                        <Text style={{ color: 'white' }}> Antar Barang </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        return (
            <ScrollView>

                <View style={styles.contentContainer}>
                    <FlatList
                        style={styles.flatList}
                        data={this.state.data}
                        keyExtractor={item => item.id_item.toString()}
                        renderItem={this.renderItem}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingVertical: 5,
        flexDirection: 'row',
    },
    image: {
        flex: 1,
    },
    imageProduct: {
        width: 70,
        height: 70,
        marginLeft: 20,
    },
    desc: {
        flex: 2,
    },
    textProduct: {
        marginLeft: 20,
    },
    qty: {
        flex: 1,
        flexDirection: 'row',
        marginRight: 30,
    },
    buttonMin: {
        width: 90,
        marginTop: '20%',
        alignItems: 'center',
        backgroundColor: '#C30F42',
        padding: 2,
        height: 30,
    },
    contentContainer: {
        backgroundColor: 'white',
        flex: 1,
    },
    flatList: {
        marginTop: 20,
    },
})