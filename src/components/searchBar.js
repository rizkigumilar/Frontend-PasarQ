import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import Icon from "@builderx/icons";

export default class MaterialSearchBar extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.rect1}>
          <TouchableOpacity style={styles.leftIconButton}>
            <Icon
              name={"arrow-left"}
              type={"MaterialCommunityIcons"}
              style={styles.leftIcon}
            />
          </TouchableOpacity>
          <TextInput placeholder={"Search"} style={styles.inputStyle} />
          <TouchableOpacity style={styles.rightIconButton}>
            <Icon
              name={"close"}
              type={"MaterialCommunityIcons"}
              style={styles.rightIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(3,127,3,1)",
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  rect1: {
    top: 4,
    left: 4,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    right: 4,
    bottom: 4,
    borderRadius: 2
  },
  leftIconButton: {
    top: 5,
    left: 5,
    position: "absolute",
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#000",
    fontFamily: "roboto-regular",
    fontSize: 24,
    opacity: 0.6
  },
  inputStyle: {
    top: 4,
    left: 72,
    width: "70%",
    height: 48,
    color: "#000",
    position: "absolute",
    alignSelf: "flex-start",
    paddingRight: 5,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  rightIconButton: {
    top: 5,
    position: "absolute",
    alignItems: "center",
    right: 5,
    padding: 11
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#000",
    fontFamily: "roboto-regular",
    fontSize: 24,
    opacity: 0.6
  }
});
