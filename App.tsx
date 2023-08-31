import { ImageProps, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import PokemonCard from "./components/PokemonCard";
import React from "react";

type Pokemon = {
  name: string;
  image: ImageProps;
  type: string;
  hp: number;
  moves: string[];
  weakness: string[];
};

const App = () => {
  const charmanderData: Pokemon = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakness: ["Water", "Rock"],
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      <PokemonCard {...charmanderData} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
});

export default App;
