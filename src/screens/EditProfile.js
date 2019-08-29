import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../publics/redux/actions/user';
import { Item, Picker, } from 'native-base';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, AsyncStorage, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.navigation.getParam('name'),
            email: props.navigation.getParam('email'),
            telp: props.navigation.getParam('telp'),
            id_user: "",
            address: props.navigation.getParam('address'),
            user: [],
            filePath: null
        };
        AsyncStorage.getItem('userid').then(value => {
            this.setState({ id_user: value });
        });
    }
    chooseFile = () => {
        var options = {
            title: 'Choose Picture',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                console.log('Cancel');
                alert('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
                alert('ImagePicker Error: ' + response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                let source = response;
                this.setState({
                    filePath: source,
                });
            }
        });
    };

    updateProfile = () => (
        dataFile = new FormData(),
        dataFile.append('image',
            {
                uri: this.state.filePath.uri,
                type: 'image/jpg',
                name: 'lah'
            }
        ),
        dataFile.append('name', this.state.name),
        dataFile.append('email', this.state.email),
        dataFile.append('address', this.state.address),
        this.props.dispatch(updateUser(this.state.id_user, dataFile))

    )

    render() {

        return (
            <ScrollView>
                <View style={styles.wrapper}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignItems: 'center', left: 70 }}>Edit Profile</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputs}
                            placeholder="Name"
                            onChangeText={val => this.setState({ 'name': val })}
                            value={this.state.name} />
                    </View>

                    <View style={styles.inputContainer1}>
                        <TextInput style={styles.inputs}
                            placeholder="Address"
                            multiline={true}
                            onChangeText={val => this.setState({ 'address': val })}
                            value={this.state.address} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputs}
                            placeholder="Email"
                            onChangeText={val => this.setState({ 'email': val })}
                            value={this.state.email} />
                    </View>
                    <TouchableOpacity
                        style={styles.inputBox}
                        onPress={this.chooseFile.bind(this)}>
                        <Text style={{ color: 'black', height: 50, marginTop: 10, marginBottom: -20 }}>Choose Photo </Text>
                    </TouchableOpacity>
                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.updateProfile}>
                        <Text style={styles.loginText}>Save</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>

        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Edit)

const styles = StyleSheet.create({
    wrapper: {
        marginLeft: 70,
        marginTop: 80
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#DCDCDC',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    inputContainer1: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#DCDCDC',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 75,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: 250,
        borderRadius: 30,
    },
    inputBox: {
        width: 250,
        paddingHorizontal: 10,
        fontSize: 16,
        color: 'black',
        marginVertical: 10,
        backgroundColor: "#DCDCDC",
        borderRadius: 30,
        borderColor: 'black'
    },
    loginButton: {
        backgroundColor: "#008000",
    },
    loginText: {
        color: 'white',
    }
});