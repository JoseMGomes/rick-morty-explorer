import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fetchCharacters } from "../../services/api";
import { styles } from "./styles";
import { FavoritesContext } from "../../contexts/FavoritesContext";

export function Home() {
  const navigation = useNavigation<any>();
  const { favorites } = useContext(FavoritesContext);

  const [characters, setCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      loadCharacters(search);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  const loadCharacters = async (query: string) => {
    setLoading(true);
    try {
      const data = await fetchCharacters(query);
      setCharacters(data);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os dados da API.");
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Details", { characterId: item.id })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Personagens (Favoritos: {favorites.length})
      </Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar personagem (ex: Rick, Morty, Summer)..."
        placeholderTextColor="#999"
        value={search}
        onChangeText={setSearch}
      />

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#4939BA" />
        </View>
      ) : characters.length === 0 ? (
        <View style={styles.center}>
          <Text>Nenhum personagem encontrado com esse nome.</Text>
        </View>
      ) : (
        <FlatList
          data={characters}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
