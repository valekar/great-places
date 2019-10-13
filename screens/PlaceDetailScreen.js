import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Color from "../constants/Color";

const PlaceDetailScreen = props => {
  const place = props.navigation.getParam("place");
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.imageContainer}>
        <Text>{place.imageUrl}</Text>
      </View>
      <View style={styles.map}>
        <Text>Maps</Text>
      </View>
    </ScrollView>
  );
};

PlaceDetailScreen.navigationOptions = navData => {
  const place = navData.navigation.getParam("place");
  //console.log(id);
  return {
    headerTitle: place.title,
    headerStyle: {
      backgroundColor: Color.primary
    },
    headerTitleStyle: {
      color: "white",
      fontWeight: "bold",
      width: "85%"
    }
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  imageContainer: {
    maxHeight: 300,
    height: "50%"
  },
  map: {
    maxHeight: 300,
    height: "50%"
  }
});

export default PlaceDetailScreen;
