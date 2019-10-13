import React from "react";
import {} from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
const CustomHeaderComponent = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color="white"
    />
  );
};

export default CustomHeaderComponent;
