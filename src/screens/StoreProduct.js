import React, { Component } from 'react'
import { Image, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'
import { getItemByIdstore } from '../publics/redux/actions/item';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux';

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            idStore: props.navigation.getParam('idStore'),
            name_store: props.navigation.getParam('name'),
        }
    }

    componentDidMount = async () => {
        await this.props.dispatch(getItemByIdstore(this.state.idStore));
        this.setState({
            data: this.props.item.itemList,
        })
    };
    render() {
        console.log('data', this.state.data)
        return (
            <Container>
                <Header style={{ backgroundColor: '#008000' }}>
                    <Body>
                        <Text style={{ color: 'white' }}> {this.state.name_store} </Text>
                    </Body>
                </Header>
                <Content>
                    <View style={styles.FlatList}>
                        <FlatList
                            data={this.state.data}
                            numColumns={2}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) => {
                                return (
                                    <Card >
                                        <CardItem cardBody button onPress={() => { this.props.navigation.navigate('DetailProduct', { idItem: item.id_item }) }}>
                                            <Image source={{ uri: `${item.image}` }} style={styles.image} />
                                        </CardItem>
                                        <CardItem>
                                            <Left>
                                                <TouchableOpacity style={{ flex: 1, backgroundColor: '#008000' }} >
                                                    <Text style={{ padding: 20, justifyContent: "center", textAlign: "center", color: 'white' }}>{item.name_item}</Text>
                                                    <Text style={{ padding: 10, justifyContent: "center", textAlign: "center", color: 'white' }}>Rp. {item.price}</Text>
                                                </TouchableOpacity>
                                            </Left>

                                        </CardItem>
                                    </Card>
                                );
                            }}
                        />
                    </View>
                </Content>
            </Container>
        );
    }
}
const mapStateToProps = state => {
    return {
        item: state.item
    }
}

export default connect(mapStateToProps)(withNavigation(Product))
const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        height: 60
    },
    text: {
        fontSize: 30
    },
    Borrowed: {
        fontSize: 10,
        color: "white",
        textAlign: "center",
        backgroundColor: "grey",
        borderRadius: 10,
        paddingTop: 2,
        justifyContent: "center",
        position: "absolute",
        zIndex: 1,
        width: 60,
        height: 20,
        marginTop: 192
    },

    image: {
        width: 190,
        height: 211,
        borderRadius: 10
    },

    searchBar: {
        zIndex: 1,
        backgroundColor: "#fff",
        borderBottomColor: "transparent",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
        marginTop: 15,
        alignSelf: "center",
        marginRight: 0,
        height: 38,
        width: 307,
        position: "absolute",
        borderRadius: 20
    },
    FlatList: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center"
    },
    item: {
        backgroundColor: "black",
        margin: 15,
        borderRadius: 8,
        elevation: 6,
        width: 145,
        height: 215
    }
});
