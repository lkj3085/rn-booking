import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";

export default function Header() {
  const types = [
    {
      id: "0",
      name: "IMAX",
    },
    {
      id: "1",
      name: "4DX",
    },
    {
      id: "2",
      name: "PXL",
    },
    {
      id: "3",
      name: "GOLD",
    },
    {
      id: "4",
      name: "PLAYHOME",
    },
  ];

  return (
    <View>
      <ImageBackground
        style={styles.image}
        source={{
          uri: "https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00020779.jpg",
        }}
      >
        <Pressable style={styles.pressableStyle}>
          <Text style={styles.date}>D-Day 1</Text>

          <View style={styles.cardContainer}>
            <View>
              <Text style={styles.title}>VIKRANT ROMA</Text>
              <Text style={styles.textStyle}>U/A * KANNADA</Text>
            </View>

            <Pressable style={styles.pressableStyle2}>
              <Text style={styles.bookingText}>예약</Text>
            </Pressable>
          </View>
          <Text style={styles.genre}>판타지 , 스릴러 , 액션</Text>
        </Pressable>
      </ImageBackground>
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {types.map((item, index) => (
            <View style={styles.scrollview} key={index}>
              <Text style={styles.scrollviewText}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 5 / 2,
    height: 170,
  },
  pressableStyle: {
    position: "absolute",
    height: 130,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 6,
    top: 140,
    left: 20,
    width: Platform.OS === "android" ? "84%" : "92%",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  date: {
    fontSize: 14,
    fontWeight: "500",
    color: "gray",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "400",
    color: "grey",
    marginTop: 4,
  },
  pressableStyle2: {
    backgroundColor: "#ffc40c",
    padding: 10,
    borderRadius: 6,
  },
  bookingText: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  genre: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: "500",
  },
  container: {
    marginTop: 110,
  },
  scrollview: {
    margin: 10,
    borderColor: "#C0C0C0",
    borderWidth: 0.5,
    borderRadius: 4,
    padding: 10,
  },
  scrollviewText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
  },
});
