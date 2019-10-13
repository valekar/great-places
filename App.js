import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import placeReducer from "./store/reducers/places";
import PlacesNavigator from "./navigation/DefaultNavigator";
import { Provider } from "react-redux";
import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("initialized database");
  })
  .catch(err => {
    console.log("initialiing db failed");
    console.log(err);
  });

const rootReducer = combineReducers({
  places: placeReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
