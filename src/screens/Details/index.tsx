import React from "react";
import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function Details() {
    const route = useRoute<any>();
    const { characterId } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes do personagem</Text>
            <Text>ID recebido {characterId}</Text>
        </View>
    );
}