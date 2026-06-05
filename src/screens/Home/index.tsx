import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Home() {
    const navigation = useNavigation<any>();

  return (
    <View>
        <Text>Home</Text>

        <Button
            title="Ver detalhes do personagem"
            onPress={() => navigation.navigate('Details', {characterId: 1})}
        />
    </View>
  );
}