import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MaterialButtonShare from "../components/buttontest";

export default class Untitled1 extends Component {
  render() {
    return (
      <View style={styles.root}>
        <ScrollView
          horizontal={false}
          style={styles.scrollArea}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
        
          <MaterialButtonShare style={styles.materialButtonShare} />
          <MaterialButtonShare style={styles.materialButtonShare2} />
          <MaterialButtonShare style={styles.materialButtonShare3} />
          <MaterialButtonShare style={styles.materialButtonShare4} />
          <MaterialButtonShare style={styles.materialButtonShare5} />
          <MaterialButtonShare style={styles.materialButtonShare6} />
          <MaterialButtonShare style={styles.materialButtonShare7} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  scrollArea: {
    top: 65.35,
    left: 0,
    width: 606.13,
    height: 93.7,
    position: "absolute"
  },
  scrollArea_contentContainerStyle: {},
  materialButtonShare: {
    top: 18.85,
    left: 10.49,
    width: 56,
    height: 56,
    position: "absolute"
  },
  materialButtonShare2: {
    top: 18.85,
    left: 222.75,
    width: 56,
    height: 56,
    position: "absolute"
  },
  materialButtonShare3: {
    top: 18.85,
    left: 81.25,
    width: 56,
    height: 56,
    position: "absolute"
  },
  materialButtonShare4: {
    top: 18.85,
    left: 152,
    width: 56,
    height: 56,
    position: "absolute"
  },
  materialButtonShare5: {
    top: 18.85,
    left: 293.51,
    width: 56,
    height: 56,
    position: "absolute"
  },
  materialButtonShare6: {
    top: 18.85,
    left: 364.26,
    width: 56,
    height: 56,
    position: "absolute"
  },
  materialButtonShare7: {
    top: 18.85,
    left: 435.01,
    width: 56,
    height: 56,
    position: "absolute"
  }
});
