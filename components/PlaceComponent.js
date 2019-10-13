import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import Color from "../constants/Color";

const PlaceComponent = props => {
  return (
    <TouchableOpacity onPress={props.DetailPlaceHandler} style={styles.screen}>
      <View style={styles.image}>
        <Text>{props.imageUrl}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{props.title}</Text>

        <View style={styles.address}>
          <Text>{props.address.line1}</Text>
          <Text>{props.address.line2}</Text>
          <Text>{props.address.city}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center"
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 25,
    width: 250
  },
  title: {
    color: "#666",
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold"
  },
  address: {
    color: "#666",
    fontSize: 16
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: Color.primary,
    backgroundColor: "gray"
  }
});

export default PlaceComponent;
