import {
  ImageProps,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
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
  const bulbasaurData: Pokemon = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"),
    type: "Grass",
    hp: 57,
    moves: ["Tie", "Ember", "Growl", "Leer"],
    weakness: ["Blade", "Fire"],
  };
  const pikachuData: Pokemon = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"),
    type: "Electric",
    hp: 43,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakness: ["Water", "Rock"],
  };
  const squirtleData: Pokemon = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"),
    type: "Water",
    hp: 35,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakness: ["Fire", "Soil"],
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
        <PokemonCard {...charmanderData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
        <PokemonCard {...squirtleData} />
      </SafeAreaView>
    </ScrollView>
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
