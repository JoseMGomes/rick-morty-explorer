import React from "react";
import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";

export function Details() {
    const route = useRoute<any>();
    const { characterId } = route.params;

    return (
        <View>
            <Text>Detalhes do personagem</Text>
            <Text>ID recebido {characterId}</Text>
        </View>
    );
}