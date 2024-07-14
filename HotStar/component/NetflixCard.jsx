import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const NetflixCard = () => {
  const [imgUri, setImgUri] = useState(
    "https://images4.alphacoders.com/109/thumbbig-1092638.webp"
  );

  const arrayUri = [
    "https://images.alphacoders.com/136/thumbbig-1361721.webp",
    "https://images8.alphacoders.com/129/thumbbig-1292972.webp",
    "https://images.alphacoders.com/136/thumbbig-1362150.webp",
    "https://images4.alphacoders.com/124/thumbbig-1242636.webp",
  ];

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % arrayUri.length;
      setImgUri(arrayUri[currentIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Amazon Prime Card</Text>
      <View style={styles.poster}>
        <View>
          <Image
            style={styles.imageStyle}
            source={{
              uri: imgUri,
            }}
          />
        </View>
        <View>
          {<Text style={styles.title}> The BOYS</Text>}
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nulla
            iste minus harum animi error? Unde, ut delectus inventore eius
            obcaecati praesentium voluptatem odio fugit rerum quis ex, accusamus
            reiciendis!
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Pressable
            style={styles.button}
            title="Watch Now"
            onPress={() => {
              Linking.openURL(
                "https://www.primevideo.com/dp/amzn1.dv.gti.dee30146-6ccd-49e4-bfe4-0ce20142f693?autoplay=0&ref_=atv_cf_strg_wb"
              );
            }}
          >
            <Text style={{ fontSize: 20, paddingRight: 10, color: "#fff" }}>
              Watch Now
            </Text>
            <FontAwesome name="play" size={30} color="#fff" />
          </Pressable>
          <MaterialIcon
            style={{ marginTop: 14, marginLeft: 5 }}
            name="favorite-border"
            size={30}
            color="#fff"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#040b35",
    height: "100%",
    width: "100%",
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    color: "cyan",
  },
  poster: {
    alignItems: "center",
    width: 275,
    height: "83%",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "cyan",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    margin: 10,
    textAlign: "center",
    color: "cyan",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#1190e4",
    padding: 8,
    borderWidth: 2,
    borderRadius: 15,
    margin: 5,
  },
  desc: {
    marginBottom: 10,
    color: "#fff",
    // fontSize: 30,
    paddingHorizontal: 20,
  },
  imageStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default NetflixCard;
