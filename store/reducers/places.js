import { CREATE_PLACE } from "../actions/places";
import placesData from "../../data/PlacesData";
import { fetchPlaces } from "../../helpers/db";

const places = [];

const dbResults = async () => {
  try {
    places = await fetchPlaces();
  } catch (err) {}
};

dbResults();

const initialState = {
  places: places.rows._array.length > 0 ? places.rows._array : placesData
};

export default placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PLACE: {
      let updatedPlaces = [...state.places];
      //console.log(updatedPlaces);
      updatedPlaces.push(action.place);
      //return state;
      return { ...state, places: updatedPlaces };
    }
  }
  return state;
};
