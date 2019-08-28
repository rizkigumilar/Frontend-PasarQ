import React, { Component } from 'react';
import { register } from '../publics/redux/actions/user';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image,
    Alert,
    StatusBar
} from 'react-native';
import { Picker, Item } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
import GetLocation from 'react-native-get-location';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: [],
            data: []
        };
    }
    componentDidMount = async () => {
        await this.getCurrentPosition()
    }

    getCurrentPosition() {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                console.warn(location.latitude);

                let region = {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.00922 * 1.5,
                    longitudeDelta: 0.00421 * 1.5
                }

                this.setState({
                    mapRegion: region,
                    latitude: location.latitude,
                    longitude: location.longitude
                })
            })
            .catch(error => {
                const { code, message } = error;
            })
    }

    Register = async () => {
        if (this.state.fullName == '' && this.state.email == '' && this.state.password == '') {
            alert('Harap mengisi Semua Form!')
        }
        else {
            const Data = {
                email: this.state.email,
                name: this.state.name,
                password: this.state.password,
                telp: this.state.telp,
                address: this.state.address,
                latitude: this.state.latitude || 0,
                longitude: this.state.longitude || 0,
                role_id: this.state.role_id
            }
            await this.setState({
                user: Data
            })

            this.props.dispatch(register(Data))
                .then(() => {
                    Alert.alert(
                        'Register',
                        'Register Success',
                        [
                            { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },
                        ],
                    );
                })
                .catch(() => {
                    Alert.alert(
                        'Register',
                        'Register Failed',
                        [
                            { text: 'Try Again' },
                        ],
                    );

                });
            console.log(this.state.user);
            console.log(Data);
        };
    };
    render() {

        return (

            <View style={styles.container}>
                <StatusBar translucent={true} backgroundColor="transparent" />
                <ScrollView>
                    <Text style={styles.title}>Register</Text>

                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={{ uri: 'https://png.pngtree.com/svg/20170602/user_circle_1048392.png' }} />
                        <TextInput style={styles.inputs}
                            placeholder="name"
                            keyboardType="default"
                            underlineColorAndroid='transparent'
                            onChangeText={val => this.setState({ 'name': val })} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={{ uri: 'http://cdn.onlinewebfonts.com/svg/img_21206.png' }} />
                        <TextInput style={styles.inputs}
                            placeholder="Phone number"
                            keyboardType="numeric"
                            underlineColorAndroid='transparent'
                            onChangeText={val => this.setState({ 'telp': val })} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={{ uri: 'https://image.flaticon.com/icons/png/512/1239/1239525.png' }} />
                        <TextInput style={styles.inputs}
                            placeholder="address"
                            keyboardType="default"
                            underlineColorAndroid='transparent'
                            onChangeText={val => this.setState({ 'address': val })} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={{ uri: 'http://icons.iconarchive.com/icons/mysitemyway/blue-jeans-social-media/256/mail-icon.png' }} />
                        <TextInput style={styles.inputs}
                            placeholder="Email"
                            keyboardType="email-address"
                            underlineColorAndroid='transparent'
                            onChangeText={val => this.setState({ 'email': val })} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={{ uri: 'https://image.flaticon.com/icons/png/512/69/69891.png' }} />
                        <TextInput style={styles.inputs}
                            placeholder="Password"
                            secureTextEntry={true}
                            underlineColorAndroid='transparent'
                            onChangeText={val => this.setState({ 'password': val })} />
                    </View>

                    <Item rounded style={{ marginVertical: 10, borderColor: 'white', backgroundColor: '#DCDCDC', bottom: 15 }}>
                        <Image style={styles.inputIcon} source={{ uri: 'https://png.pngtree.com/svg/20160728/role_permissions_679763.png' }} />
                        <Picker
                            mode="dropdown"
                            placeholder="Select Your role"
                            selectedValue={this.state.role_id}
                            placeholderStyle="#DCDCDC"
                            placeholderIconColor="#DCDCDC"
                            style={{ paddingLeft: 20, color: 'black' }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ role_id: itemValue })
                            }>
                            <Picker.Item label="Select Your Role" value="" />
                            <Picker.Item label="User" value="4" />
                            <Picker.Item label="Driver" value="3" />
                            <Picker.Item label="Toko Mitra" value="2" />
                        </Picker>
                    </Item>

                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.Register}>
                        <Text style={styles.loginText}>Register</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text>Login</Text>
                    </TouchableHighlight>
                </ScrollView>
            </View>

        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    };
};
export default connect(mapStateToProps)(Register);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        top: 50
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#DCDCDC',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        marginBottom: 30,
        marginLeft: 50,
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#008000",
    },
    loginText: {
        color: 'white',
    }
});
