import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import PlaceComponent from "../components/PlaceComponent";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderComponent from "../components/UI/HeaderComponent";
import Color from "../constants/Color";

const PlacesScreen = props => {
  const places = useSelector(state => state.places.places);
  console.log(places);
  const DetailPlaceHandler = place => {
    //console.log(place.id);
    //props.navigation.setParams({ id: place.id, title: place.title });
    props.navigation.navigate({
      routeName: "PlaceDetail",
      params: {
        place: place
      }
    });
  };

  const renderItems = itemData => {
    return (
      <PlaceComponent
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        address={itemData.item.address}
        DetailPlaceHandler={DetailPlaceHandler.bind(this, itemData.item)}
      />
    );
  };

  return (
    <FlatList
      data={places}
      keyExtractor={(item, index) => item.id}
      renderItem={renderItems}
    />
  );
};

PlacesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Place   Screen",
    headerStyle: {
      backgroundColor: Color.primary
    },
    headerTitleStyle: {
      color: "white"
    },
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderComponent}>
        <Item
          title="Add"
          iconName="md-create"
          onPress={() => {
            navData.navigation.navigate({ routeName: "CreatePlace" });
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({});

export default PlacesScreen;
