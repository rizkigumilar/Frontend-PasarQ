import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { login } from '../publics/redux/actions/user';
import { connect } from 'react-redux';
import {
    AsyncStorage,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image,
    Alert,
} from 'react-native';
import {
    Picker,
    Item
} from 'native-base'
import Logo from '../assets/logo.png'
import { ScrollView } from 'react-native-gesture-handler';
import GetLocation from 'react-native-get-location';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            user: [],
            email: '',
            password: '',
            latitude: 0,
            longitude: 0,
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
                this.setState({
                    latitude: location.latitude,
                    longitude: location.longitude
                })
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }

    log = async () => {
        if (this.state.email == '' && this.state.password == '') {
            alert('Harap mengisi Semua Form!')
        } else {
            this.state.data.push({
                email: this.state.email,
                password: this.state.password,
                role: this.state.role_id
            });
            await this.props.dispatch(login(this.state.data[0]))
                .then(() => {
                    Alert.alert(
                        'Login',
                        'Login Success',
                        [
                            {
                                text: 'OK', onPress: () => this.props.navigation.navigate('AuthLoading', {
                                    userid: this.state.userid,
                                    token: this.state.token,
                                    name: this.state.name,
                                    email: this.state.email
                                })
                            },
                        ],
                    );
                })
                .catch(() => {
                    Alert.alert(
                        'Login',
                        'Login Failed',
                        [
                            { text: 'Try Again' },
                        ],
                    );
                })
        }
    }

    render() {

        return (
            <ScrollView>
                <View behavior="padding"
                    style={styles.Wrapper}>
                    <View style={styles.container}>
                        <Image style={styles.logo} source={Logo} />
                        <View>
                            <Text style={styles.title}>Login</Text>
                            <View style={styles.inputContainer}>
                                <Image style={styles.inputIcon} source={{ uri: 'http://icons.iconarchive.com/icons/mysitemyway/blue-jeans-social-media/256/mail-icon.png' }} />
                                <TextInput style={styles.inputs}
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(email) => this.setState({ email })} />
                            </View>

                            <View style={styles.inputContainer}>
                                <Image style={styles.inputIcon} source={{ uri: 'https://image.flaticon.com/icons/png/512/69/69891.png' }} />
                                <TextInput style={styles.inputs}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    underlineColorAndroid='transparent'
                                    onChangeText={(password) => this.setState({ password })} />
                            </View>
                            <Item rounded style={{ marginVertical: 10, borderColor: 'white', backgroundColor: '#DCDCDC', bottom: 30 }}>
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
                                    <Picker.Item label="User" value="4" />
                                    <Picker.Item label="Driver" value="3" />
                                </Picker>
                            </Item>
                            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.log}>
                                <Text style={styles.loginText}>Login</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Register')}>
                                <Text>Register</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );

    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    };
};
export default connect(mapStateToProps)(withNavigation(Login))

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    logo: {
        height: 250,
        width: 250
    },
    wraper: {
        height: '100%'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#DCDCDC',
        borderRadius: 30,
        borderBottomWidth: 3,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 15
    },
    title: {
        fontSize: 40,
        marginBottom: 30,
        marginLeft: 70,
        bottom: 10,
        fontWeight: "bold"
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
        marginBottom: 30,
        width: 250,
        borderRadius: 30,
        bottom: 15
    },
    loginButton: {
        backgroundColor: "#008000",
    },
    loginText: {
        color: 'white',
    },
});