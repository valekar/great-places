import * as FileSystem from "expo-file-system";
import { insertPlace } from "../../helpers/db";

export const CREATE_PLACE = "CREATE_PLACE";

export const createPlace = place => {
  return async dispatch => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng${place.address.line1},${place.address.line2}&key=YOUR_API_KEY&callback=initMap`
    );

    if (!response.ok) {
      throw new Error("");
    }

    const resData = await response.json();

    if (!resData.results) {
      throw new Error("Something went wrong");
    }

    const fileName = place.imageUrl.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.moveAsync({
        from: place.imageUrl,
        to: newPath
      });

      place.imageUrl = newPath;

      const result = await insertPlace(place);
      place.placeID = result.id;

      dispatch({
        type: CREATE_PLACE,
        place: place
      });
    } catch (err) {
      throw err;
    }
  };
};
