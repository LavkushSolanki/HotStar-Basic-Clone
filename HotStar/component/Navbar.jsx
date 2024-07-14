import Icon from "react-native-vector-icons/Ionicons";
import { View } from "react-native";
import React from "react";

const Navbar = ({ setDisplay }) => {
  return (
    <View
      style={{
        backgroundColor: "#111215",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 45,
        padding: 5,
        width: "100%",
      }}
    >
      <Icon
        name="home-outline"
        style={{ marginLeft: 10 }}
        size={30}
        color="#fff"
        onPress={() => {
          setDisplay("login");
        }}
      />
      <Icon name="search-outline" size={30} color="#fff" />
      <Icon name="download-outline" size={30} color="#fff" />
      <Icon
        name="trending-up-outline"
        style={{ marginRight: 10 }}
        size={30}
        color="#fff"
      />
    </View>
  );
};

export default Navbar;
