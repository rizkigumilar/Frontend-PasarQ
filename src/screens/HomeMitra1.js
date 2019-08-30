import React, { Component } from 'react'
import { Image, StyleSheet, View, FlatList, TouchableOpacity, AsyncStorage } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'
import { getByIdUser} from '../publics/redux/actions/store'
import { connect } from 'react-redux'

class HomeMitra extends Component {
    constructor(props) {
        super(props)
        this.state = {
            store: [],
            iduser: '',
            data:[]
    
        }
        AsyncStorage.getItem('userid').then(value => {
            this.setState({iduser: value});
          });
    }
    getMitra = () => {
        setTimeout( async () => {
            await this.props.dispatch(getByIdUser(this.state.iduser));
        this.setState({
            store: this.props.store.storeList,
        })
        }, 1000)
    }
    componentDidMount = () => {
        const { navigation } = this.props
        this.focusListener = navigation.addListener('didFocus', () => {
            this.getMitra()
        })
      }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#11c232' }}>
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileJuragan')}>
                            <Icon name='contact' type='Ionicons' />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Text> Home Mitra </Text>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddToko')}>
                            <Icon name='add-circle' type='Ionicons' />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <View style={styles.FlatList}>
                        <FlatList
                            data={this.state.store}
                            numColumns={2}
                            keyExtractor={item => item.iduser}
                            renderItem={({ item, index }) => {
                                return (
                                    <Card >
                                        <CardItem cardBody button onPress={() => { this.props.navigation.navigate('Toko',{ idItem: item.name_store, photoStore: item.photo }) }}>
                                            <Image source={{ uri: `${item.photo}` }} style={styles.image} />
                                        </CardItem>
                                        <CardItem>
                                            <Left>
                                                <TouchableOpacity style={{ flex: 1, backgroundColor: '#11c232' }} >
                                                    <Text style={{ padding: 10, justifyContent: "center", textAlign: "center" }}>{item.name_store}</Text>
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
        store: state.store
    };
};
export default connect(mapStateToProps)(HomeMitra);
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
        justifyContent: "center",
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
