import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  ImageProps,
} from "react-native";
import React from "react";

type Pokemon = {
  name: string;
  image: ImageProps;
  type: string;
  hp: number;
  moves: string[];
  weakness: string[];
};

const PokemonCard = ({ name, image, type, hp, moves, weakness }: Pokemon) => {
  return (
    <View style={styles.card}>
      <View>
        <Text>{name}</Text>
        <Text>{hp}</Text>
      </View>
      <Image source={image} accessibilityLabel={`${name} Pokemon`} />
      <View>
        <Text>{type}</Text>
      </View>
      <View>
        <Text>Moves: {moves.join(", ")}</Text>
      </View>
      <View>
        <Text>Weakness: {weakness.join(", ")}</Text>
      </View>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
