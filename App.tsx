import { SafeAreaView, StyleSheet } from "react-native";
import PokemonCard from "./components/PokemonCard";
import React from "react";

type Props = {};

const App = (props: Props) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <PokemonCard />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
