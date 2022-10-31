import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <MovieCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E0E0E0",
    flex: 1,
  },
});
