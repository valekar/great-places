import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import PlacesScreen from "../screens/PlacesScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import CreatePlaceScreen from "../screens/CreatePlaceScreen";
import MapScreen from "../screens/MapScreen";
import Color from "../constants/Color";

const PlacesNavigator = createStackNavigator(
  {
    Places: PlacesScreen,
    PlaceDetail: PlaceDetailScreen,
    CreatePlace: CreatePlaceScreen,
    Map: MapScreen
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerTitle: "Screens",
      headerBackTitleStyle: {
        color: "white"
      }
    }
  }
);

export default createAppContainer(PlacesNavigator);
