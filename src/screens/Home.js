import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class Home extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <StatusBar backgroundColor='white' barStyle='dark-content' />
                    <Text>Home</Text>
                </View>
            </ScrollView>
        );
    }
}