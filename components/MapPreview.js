import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const MapPreview = props => {
  let imagePreviewUrl;
  if (props.location) {
    imagePreviewUrl =
      "https://maps.googleapis.com/maps/api/staticmap?" +
      `center=${props.location.lat}, ${props.location.lng}` +
      "&zoom=13&size=400x200" +
      "&maptype=roadmap" +
      `&markers=color:red%7Clabel:S%7C${props.location.lat},${props.location.lng}` +
      "&key=YOUR_API_KEY";
  }
  return (
    <TouchableOpacity onPress={props.OnPress}>
      {props.location ? (
        <Image source={{ uri: imagePreviewUrl }} />
      ) : (
        props.children
      )}
    </TouchableOpacity>
  );
};

export default MapPreview;
