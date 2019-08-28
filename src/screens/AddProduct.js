import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item, Picker, } from 'native-base';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';

class Add extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         book: [],
    //         loading: false,
    //         filePath: null
    //     };

    // }
    // onClickListener = (viewId) => {
    //     Alert.alert("Alert", "Button pressed " + viewId);
    // }
    chooseFile = () => {
        var options = {
            title: 'Choose Picture',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);
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
    // bookAdd = () => (
    //     dataFile = new FormData(),
    //     dataFile.append('image',
    //         {
    //             uri: this.state.filePath.uri,
    //             type: 'image/jpg',
    //             name: 'lah'
    //         }
    //     ),
    //     dataFile.append('name', this.state.name),
    //     dataFile.append('writer', this.state.writer),
    //     dataFile.append('location', this.state.location),
    //     dataFile.append('description', this.state.description),
    //     dataFile.append('idCat', this.state.idCat),
    //     this.props.dispatch(postBook(dataFile))
    //         .then(() => {
    //             Alert.alert(
    //                 'Success',
    //                 'Donation Success, Thank you',
    //                 [
    //                     { text: 'OK', onPress: () => this.props.navigation.navigate('Home') },
    //                 ],
    //             )
    //         })
    //         .catch(() => {
    //             Alert.alert(
    //                 'Failed',
    //                 'Donation Failed',
    //                 [
    //                     { text: 'Try Again' },
    //                 ],
    //             )
    //         })
    // )

    render() {


        return (

            <ScrollView>
                <View style={styles.wrapper}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignItems: 'center', left: 50 }}>Add New Product</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputs}
                            placeholder="Product Name"
                            onChangeText={val => this.setState({ 'name_item': val })} />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputs}
                            placeholder="Price"
                            onChangeText={val => this.setState({ 'price': val })} />
                    </View>
                    <TouchableOpacity
                        style={styles.inputBox}
                        onPress={this.chooseFile.bind(this)}>
                        <Text style={{ color: 'black', height: 50, marginTop: 10, marginBottom: -20 }}>Choose Photo </Text>
                    </TouchableOpacity>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputs}
                            placeholder="Description"
                            multiline={true}
                            onChangeText={val => this.setState({ 'description': val })} />
                    </View>
                    <Item rounded style={{ marginVertical: 10, borderColor: 'white', backgroundColor: '#DCDCDC', width: 250, marginBottom: 30 }}>
                        <Picker
                            mode="dropdown"
                            placeholder="Select Category"
                            // selectedValue={this.state.id_subcategory}
                            placeholderStyle="#DCDCDC"
                            placeholderIconColor="#DCDCDC"
                            style={{ paddingLeft: 20, color: 'black' }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ id_subcategory: itemValue })
                            }>
                            <Picker.Item label="Daging" value="1" />
                            <Picker.Item label="Sayur" value="3" />
                            <Picker.Item label="Buah" value="4" />
                        </Picker>
                    </Item>
                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}>
                        <Text style={styles.loginText}>Add Product</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>

        );
    }
}
const mapStateToProps = state => {
    return {
        book: state.book
    };
};
export default connect(mapStateToProps)(Add);

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