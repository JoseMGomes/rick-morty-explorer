import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { fetchCharacterById } from "../../services/api";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { styles } from "./styles";

export function Details() {
  const route = useRoute<any>();
  const { characterId } = route.params;

  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const [character, setCharacter] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCharacterDetails();
  }, [characterId]);

  const loadCharacterDetails = async () => {
    try {
      const data = await fetchCharacterById(characterId);
      setCharacter(data);
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível carregar os detalhes do personagem.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading || !character) {
    return (
      <View style={[styles.container, { justifyContent: "center" }]}>
        <ActivityIndicator size="large" color="#4939BA" />
      </View>
    );
  }

  const isFavorite = favorites.some((fav) => fav.id === character.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(character.id);
    } else {
      addFavorite({
        id: character.id,
        name: character.name,
        image: character.image,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />

      <Text style={styles.name}>{character.name}</Text>

      <Text style={styles.info}>
        <Text style={styles.bold}>Status:</Text> {character.status}
      </Text>
      <Text style={styles.info}>
        <Text style={styles.bold}>Espécie:</Text> {character.species}
      </Text>
      <Text style={styles.info}>
        <Text style={styles.bold}>Gênero:</Text> {character.gender}
      </Text>

      <TouchableOpacity
        style={[
          styles.favButton,
          { backgroundColor: isFavorite ? "#ff4444" : "#00C851" },
        ]}
        onPress={handleFavoriteToggle}
      >
        <Text style={styles.favButtonText}>
          {isFavorite ? "Remover dos Favoritos" : "Favoritar Personagem"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
