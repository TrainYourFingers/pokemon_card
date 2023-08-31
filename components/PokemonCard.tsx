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

const getType = (type: string) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

const PokemonCard = ({ name, image, type, hp, moves, weakness }: Pokemon) => {
  const { borderColor, emoji } = getType(type);

  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>HP: ❤️{hp}</Text>
      </View>
      <Image
        source={image}
        accessibilityLabel={`${name} Pokemon`}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <Text style={[styles.listText, { color: "#16911f" }]}>
          Moves: {moves.join(", ")}
        </Text>
      </View>
      <View style={styles.listContainer}>
        <Text style={[styles.listText, { color: "#c00003" }]}>
          Weakness: {weakness.join(", ")}
        </Text>
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
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 20,
  },
  image: {
    height: 200,
    aspectRatio: 1,
    alignSelf: "center",
    marginBottom: 32,
  },
  typeContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  listContainer: {
    marginBottom: 16,
  },
  listText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
