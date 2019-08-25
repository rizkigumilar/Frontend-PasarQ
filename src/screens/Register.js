import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';

class Register extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         email: '',
    //         password: '',
    //         latitude: null,
    //         longitude: null
    //     };
    // }
    // componentDidMount = async () => {
    //     await this.getCurrentPosition()
    // }

    // getCurrentPosition() {
    //     GetLocation.getCurrentPosition({
    //         enableHighAccuracy: true,
    //         timeout: 15000,
    //     })
    //         .then(location => {
    //             console.warn(location.latitude);

    //             let region = {
    //                 latitude: location.latitude,
    //                 longitude: location.longitude,
    //                 latitudeDelta: 0.00922 * 1.5,
    //                 longitudeDelta: 0.00421 * 1.5
    //             }

    //             this.setState({
    //                 mapRegion: region,
    //                 latitude: location.latitude,
    //                 longitude: location.longitude
    //             })
    //         })
    //         .catch(error => {
    //             const { code, message } = error;
    //             console.warn(code, message);
    //         })
    // }

    // Register = () => {
    //     if (this.state.fullName == '' && this.state.email == '' && this.state.password == '') {
    //         alert('Harap mengisi Semua Form!')
    //     }
    //     else {
    //         Auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
    //             .then((response) => {
    //                 console.log(response)
    //                 Database.ref('/user/' + response.user.uid).set({
    //                     name: this.state.name,
    //                     status: 'Offline',
    //                     email: this.state.email,
    //                     photo: 'https://i.imgur.com/zpjUVPT.png',
    //                     latitude: this.state.latitude,
    //                     longitude: this.state.longitude,
    //                     id: response.user.uid
    //                 })
    //                     .catch(error => {
    //                         alert(error.message)
    //                         this.setState({
    //                             name: '',
    //                             email: '',
    //                             password: '',
    //                         });
    //                     })
    //                 Alert.alert(
    //                     'Register',
    //                     'Register Success', [
    //                         { text: 'OK', onPress: () => this.props.navigation.navigate('Login') }
    //                     ]
    //                 )
    //             })
    //             .catch(error => {
    //                 alert(error.message)
    //                 this.setState({
    //                     name: '',
    //                     email: '',
    //                     password: '',
    //                 });
    //             })
    //     }
    // };
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Register</Text>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'http://icons.iconarchive.com/icons/mysitemyway/blue-jeans-social-media/256/mail-icon.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://png.pngtree.com/svg/20170602/user_circle_1048392.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="name"
                        keyboardType="default"
                        underlineColorAndroid='transparent'
                        onChangeText={(name) => this.setState({ name })} />
                </View>



                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://image.flaticon.com/icons/png/512/69/69891.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.Register}>
                    <Text style={styles.loginText}>Register</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text>Login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
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
        marginBottom: 30
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
        backgroundColor: "#27f607",
    },
    loginText: {
        color: 'white',
    }
});