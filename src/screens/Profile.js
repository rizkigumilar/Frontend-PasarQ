import React, { Component } from 'react'
import { View, Text, TouchableOpacity, AsyncStorage, Image, StyleSheet, Alert } from 'react-native'
import { Icon } from 'native-base'
import BottomTab from '../components/bottomTab';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
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
    }

    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#eee' }}>

                <View
                    style={styles.linearGradient}>
                    <View style={{ marginLeft: '85%', marginTop: '4%' }}>
                        <TouchableOpacity onPress={this.del}>
                            <Icon name='exit' type='Ionicons' color='#fff' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <View style={{ flex: 3, alignItems: 'center' }}>
                            <Image style={{ width: 130, height: 130, borderRadius: 65, marginBottom: 15, backgroundColor: '#fff', marginTop: 20 }} source={{ uri: 'https://icons-for-free.com/iconfiles/png/512/agenda+app+contacts+online+profile+user+icon-1320183042135412367.png' }} />
                            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold', marginTop: 20 }}>Arizal Arkan</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View
                        style={styles.linearGradientB}>
                        <View style={{}}>
                            <Text style={{ alignSelf: 'center', marginBottom: 10, color: 'white', fontSize: 20 }}>Contact</Text>
                            <Text style={{ color: 'white', width: '100%', borderTopWidth: 1, padding: 10 }}>Email : arkan@gmail.com</Text>
                        </View>
                    </View>
                    <View
                        style={styles.linearGradientB}>
                        <View style={{}}>
                            <Text style={{ alignSelf: 'center', marginBottom: 10, color: 'white', fontSize: 20 }}>Biodata</Text>
                            <Text style={{ color: 'white', width: '100%', borderTopWidth: 1, padding: 10 }}>Name : Arizal Arkan</Text>
                        </View>
                    </View>
                </View>
                <BottomTab />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        backgroundColor: '#11c232',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    }, linearGradientB: {
        marginTop: 30,
        borderRadius: 9,
        elevation: 1,
        padding: 15,
        backgroundColor: '#11c232'
    },
});