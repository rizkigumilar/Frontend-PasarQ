import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { withNavigation } from "react-navigation"


class DetailPembayaran extends Component {

    rek = () => {
        let bank = this.props.navigation.state.params.bank
        if (bank == "Mandiri") {
            return "0982748490293847"
        }
        if (bank == "BCA") {
            return "0928347283736"
        }
        if (bank == "CIMB") {
            return "92837485738272"
        }
        if (bank == "BNI") {
            return "09838928375896"
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}>
                <Text style={{ textAlign: 'center' }}>Bank {this.props.navigation.state.params.bank}</Text>
                <Text style={{ textAlign: 'center' }}>Please transfer to this rek : {'\n'} {this.rek()}</Text>
                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Home')}><Text style={styles.loginText}>lanjut Belanja</Text></TouchableOpacity>
            </View>
        )
    }
}

export default withNavigation(DetailPembayaran)

const styles = StyleSheet.create({
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        width: 250,
        borderRadius: 30,
        marginTop: 30
    },
    loginButton: {
        backgroundColor: "#008000",
    },
    loginText: {
        color: 'white',
    },
})