import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert
} from "react-native";
import Color from "../constants/Color";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapPreview from "./MapPreview";

const LocationPicker = props => {
  const [pickedLocation, setPickedLocation] = useState();
  const [isFetch, setIsFetch] = useState(false);

  const mapPickedLocation = props.navigation.getParam("pickedLocation");

  const { onLocationPicked } = props;

  useEffect(() => {
    if (mapPickedLocation) {
      setPickedLocation(mapPickedLocation);
      onLocationPicked(pickedLocation);
    }
  }, [mapPickedLocation, onLocationPicked]);
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== "granted") {
      Alert.alert("No Permissions", "Provide more permission ", [
        { text: "Okay" }
      ]);
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    try {
      setIsFetch(true);
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000
      });

      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      });

      props.onLocationPicked(pickedLocation);
    } catch (err) {
      Alert.alert("Could not fetch location", "Provide try again", [
        { text: "Okay" }
      ]);
      throw new Error(err);
    }
  };

  const pickOnMapHandler = () => {
    props.navigation.navigate("Map");
  };

  return (
    <View style={styles.locationPicker}>
      <MapPreview location={pickedLocation} onPress={pickOnMapHandler}>
        <View style={styles.mapPreview}>
          {isFetch ? (
            <ActivityIndicator size="large" color={Color.primary} />
          ) : (
            <Text>No location chosen</Text>
          )}
        </View>
      </MapPreview>
      <View>
        <Button
          title="Get User location"
          color={Color.primary}
          onPress={getLocationHandler}
        />
        <Button
          title="pick on Map"
          color={Color.primary}
          onPress={pickOnMapHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1
  },
  locationPicker: {
    marginBottom: 15
  }
});

export default LocationPicker;
