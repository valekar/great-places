import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Keyboard } from "react-native";
import Color from "../constants/Color";
import { TextInput, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import * as placeActions from "../store/actions/places";
import Place from "../models/Place";
import ImageSelector from "../components/ImageSelector";
import LocationPicker from "../components/LocationPicker";
import Address from "../models/Address";

const CreatePlaceScreen = props => {
  const dispatch = useDispatch();

  const [titleValue, setTitleValue] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [location, setLocation] = useState();

  const titleChangeHandler = text => {
    setTitleValue(text);
  };

  const imageTakenHandler = imagePath => {
    setSelectedImage(imagePath);
  };

  const savePlaceHandler = () => {
    const address = new Address(location.lat, location.lng, "city");
    const place = new Place(
      new Date().toString(),
      titleValue,
      address,
      selectedImage
    );
    dispatch(placeActions.createPlace(place));
    props.navigation.goBack();
  };

  const locationPickedHandler = useCallback(location => {
    setLocation(location);
  }, []);

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}> Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <ImageSelector onImageTaken={imageTakenHandler} />
        <LocationPicker
          navigation={props.navigation}
          onLocationPicked={locationPickedHandler}
        />
        <Button
          title="Save title"
          color={Color.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

CreatePlaceScreen.navigationOptions = navData => {
  return {
    headerTitle: "Place Screen",
    headerStyle: {
      backgroundColor: Color.primary
    },
    headerTitleStyle: {
      color: "white"
    }
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  lable: {
    fontSize: 18,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
});

export default CreatePlaceScreen;
