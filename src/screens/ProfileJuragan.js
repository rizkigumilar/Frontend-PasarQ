import React, { Component, Fragment } from 'react'
import { View, Text, TouchableOpacity, AsyncStorage, Image, StyleSheet, Alert } from 'react-native'
import { Icon } from 'native-base'
import {withNavigation, NavigationEvents} from 'react-navigation';
import Geocoder from 'react-native-geocoder';

export default class Home extends Component {
    state = {
        email: '',
        name: '',
        address: '',
        telp: '',
      };

      constructor(props) {
        super(props);
        AsyncStorage.getItem('email').then(value => {
          this.setState({email: value});
        });
        AsyncStorage.getItem('name').then(value => {
          this.setState({name: value});
        });
        AsyncStorage.getItem('address').then(value => {
          this.setState({address: value});
        });
        AsyncStorage.getItem('telp').then(value => {
          this.setState({telp: value});
        });
      }
      
      geocode = async () => {
        var lat = this.state.region.latitude
        var lng = this.state.region.longitude
        var Location = {lat, lng};
        Geocoder.geocodePosition(Location);
        const address = res[0].subLocality + ', ' + res[0].subAdminArea + ', ' + res[0].adminArea;
    
        return address
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
    }

    render() {

        return (
            <Fragment>
        <NavigationEvents
          onWillFocus={() =>
            AsyncStorage.getItem('email').then(value => {
              this.setState({email: value});
            })
          }
        />
        <NavigationEvents
          onWillFocus={() =>
            AsyncStorage.getItem('name').then(value => {
              this.setState({name: value});
            })
          }
        />
        <NavigationEvents
          onWillFocus={() =>
            AsyncStorage.getItem('address').then(value => {
              this.setState({address: value});
            })
          }
        />
        <NavigationEvents
          onWillFocus={() =>
            AsyncStorage.getItem('telp').then(value => {
              this.setState({telp: value});
            })
          }
        />
            <View style={{ flex: 1, backgroundColor: '#eee' }}>

                <View
                    style={styles.linearGradient}>
                    <View style={{ marginLeft: '85%', marginTop: '4%' }}>
                        <TouchableOpacity onPress={this.del}>
                            <Icon name='exit' type='Ionicons' color='#fff' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: '5%', marginTop: '-7%' }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('HomeMitra') }}>
                            <Icon name='arrow-round-back' type='Ionicons' color='#fff' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <View style={{ flex: 3, alignItems: 'center' }}>
                            <Image style={{ width: 130, height: 130, borderRadius: 65, marginBottom: 15, backgroundColor: '#fff', marginTop: 20 }} source={{ uri: 'https://icons-for-free.com/iconfiles/png/512/agenda+app+contacts+online+profile+user+icon-1320183042135412367.png' }} />
                            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold', marginTop: 20 }}>{this.state.name}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View
                        style={styles.linearGradientB}>
                        <View style={{}}>
                            <Text style={{ alignSelf: 'center', marginBottom: 10, color: 'white', fontSize: 20 }}>Contact</Text>
                            <Text style={{ color: 'white', width: '100%', borderTopWidth: 1, padding: 10 }}>Email : {this.state.email}</Text>
                            <Text style={{ color: 'white', width: '100%', borderTopWidth: 1, padding: 10 }}>Phone : {this.state.telp}</Text>
                        </View>
                    </View>
                    <View
                        style={styles.linearGradientB}>
                        <View style={{}}>
                            <Text style={{ alignSelf: 'center', marginBottom: 10, color: 'white', fontSize: 20 }}>Biodata</Text>
                            <Text style={{ color: 'white', width: '100%', borderTopWidth: 1, padding: 10 }}>Name : {this.state.name}</Text>
                            <Text style={{ color: 'white', width: '100%', borderTopWidth: 1, padding: 10 }}>Address : {this.state.address} </Text>
                        </View>
                    </View>
                </View>
            </View>
        </Fragment>
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
        marginTop: 5,
        borderRadius: 9,
        elevation: 1,
        padding: 15,
        backgroundColor: '#11c232'
    },
});