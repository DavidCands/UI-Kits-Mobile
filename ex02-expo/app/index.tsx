import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Image, Pressable } from "react-native";
import { Text, TextInput, Button, Card } from "react-native-paper";

export default function Index() {
  const router = useRouter();
  const [idade, onChangeIdade] = useState("");
  const [showDetails, setShowDetails] = useState(true);
  const anoNasc = new Date().getFullYear() - parseInt(idade);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="headlineLarge" style={{ marginBottom: 30 }}>
        Olá Turma!
      </Text>

      <Card style={{ borderRadius: 100, overflow: "hidden", marginBottom: 20 }}>
        <Image
          style={styles.avatar}
          source={require("@/assets/images/avatar.jpg")}
          resizeMode="cover"
        />
      </Card>

      <Pressable onPress={() => setShowDetails(!showDetails)}>
        <Text
          numberOfLines={showDetails ? 0 : 1}
          style={{ fontSize: 16, marginBottom: 20 }}
        >
          Este é um App de exemplo da disciplina Programação Web e Mobile do
          Curso de Ciência da Computação da Universidade Católica de Pernambuco
          (semestre 2025.2)
        </Text>
      </Pressable>

      {!isNaN(anoNasc) && (
        <Text variant="bodyLarge">Você nasceu em {anoNasc}</Text>
      )}

      <TextInput
        mode="outlined"
        label="Qual a sua idade?"
        value={idade}
        onChangeText={onChangeIdade}
        keyboardType="numeric"
        style={{ width: 250, marginVertical: 15 }}
      />

      <Button
        mode="contained"
        onPress={() => router.navigate("/taskList")}
        style={{ marginVertical: 10 }}
      >
        Ir para Lista de Tarefas
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "beige",
    padding: 15,
  },
  avatar: {
    width: 150,
    height: 150,
  },
});
