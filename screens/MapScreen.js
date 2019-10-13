import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderComponent from "../components/UI/HeaderComponent";
import MapView, { Marker } from "react-natvie-maps";
const MapScreen = props => {
  const [selectedLocation, setSelectedLocation] = useState();

  const selectLocationHandler = event => {
    setSelectedLocation({
      lat: event.nativeEvent.latitude,
      lng: event.nativeEvent.longitude
    });
  };

  const mapRegion = {
    latitude: 34.23,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  let markerCoordinate;

  if (selectedLocation) {
    markerCoordinate = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng
    };
  }

  const savePickedLocationHandler = useCallback(() => {
    if (selectedLocation) {
      props.navigation.navigate({
        routeName: "CreatePlace",
        params: { pickedLocation: selectedLocation }
      });
    }
  }, [selectedLocation]);

  useCallback(() => {
    props.navigation.setParams({ saveLocation: savePickedLocationHandler });
    //savePickedLocation();
  }, [savePickedLocationHandler]);

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onPress={selectLocationHandler}
    >
      {markerCoordinate && (
        <Marker title="Picked Location" coordinate={markerCoordinate}></Marker>
      )}
    </MapView>
  );
};

MapScreen.navigationOptions = props => {
  const saveLocationHandler = props.navigation.getParam("saveLocation");

  return {
    headerTitle: "Map Screen",
    headerStyle: {
      backgroundColor: Color.primary
    },
    headerTitleStyle: {
      color: "white"
    },
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderComponent}>
        <Item title="Add" iconName="md-save" onPress={saveLocationHandler} />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default MapScreen;
