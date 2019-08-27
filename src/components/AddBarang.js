import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

class AddBarang extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.back}>
          <Icon
            name="arrow-back"
            color="#000000"
            size={32}
            style={styles.menuIcon}
            onPress={() => this.props.navigation.navigate('ProfileToko')}
          />
        </View>
        <View style={styles.label}>
          <Text>Profile Toko</Text>
        </View>
      </View>
    );
  }
}

export default AddBarang;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
  },
  back: {
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  menuIcon: {
    width: 20,
    height: 30,
  },
  label: {
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 40,
  },
  title: {
    fontSize: 17,
  },
});
