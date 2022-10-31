import {
  FlatList,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import movies from "../data/movies";
import Header from "./Header";

export default function MovieCard() {
  return (
    <View>
      <FlatList
        ListHeaderComponent={Header}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={movies}
        renderItem={({ item }) => (
          <Pressable style={styles.pressable}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.textStyle}>
              {item.name.substr(0, 16) + "..."}
            </Text>
            <Text style={styles.language}>{item.language}</Text>
            <Text style={styles.genre}>{item.genre}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 2 / 3,
    height: 240,
    borderRadius: 6,
    // marginLeft: Platform.OS === "android" ? 0 : 20,
  },
  pressable: {
    margin: 10,
    marginHorizontal: 15,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "600",
    width: 170,
    marginTop: 10,
  },
  language: {
    marginTop: 4,
    fontSize: 15,
    color: "gray",
  },
  genre: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: "bold",
  },
});
