import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Button,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const HotstarCard = ({ element }) => {
  const [colo, setColo] = useState("#fff");
  return (
    <View style={styles.container}>
      <View style={styles.poster}>
        <View>
          <Image
            style={styles.imageStyle}
            source={{
              uri: element.item.uri,
            }}
          />
        </View>
        <View>
          <Text style={styles.desc}>{element.item.desc}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={styles.button}
            title="Watch Now"
            onPress={() => {
              Linking.openURL(
                "https://www.primevideo.com/dp/amzn1.dv.gti.dee30146-6ccd-49e4-bfe4-0ce20142f693?autoplay=0&ref_=atv_cf_strg_wb"
              );
              console.log("pressed");
            }}
          >
            <Text style={{ fontSize: 20, paddingRight: 10, color: "#fff" }}>
              Watch Now
            </Text>
            <FontAwesome name="play" size={30} color="#fff" />
          </Pressable>
          <MaterialIcon
            onPress={() => {
              if (colo === "#fff") setColo("red");
              else setColo("#fff");
            }}
            style={{ marginTop: 14, marginLeft: 5 }}
            name="favorite-border"
            size={30}
            color={colo}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  poster: {
    flex: 1,
    width: 368,
    height: "100%",
    alignItems: "center",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#1190e4",
    padding: 8,
    borderWidth: 2,
    borderRadius: 15,
  },
  desc: {
    margin: 7,
    fontSize: 20,
    color: "#fff",
  },
  imageStyle: {
    width: "100%",
    height: 325,
    // height:"95%",
    aspectRatio: 1,
  },
});

export default HotstarCard;
