import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Image, View } from "react-native";
import { Button, Text, TextInput, Card } from "react-native-paper";

export default function Index() {
  const router = useRouter();
  const [idade, setIdade] = useState("");
  const [showDetails, setShowDetails] = useState(true);
  const anoNasc = new Date().getFullYear() - parseInt(idade);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="headlineMedium" style={{ marginBottom: 20 }}>
        Olá Turma!
      </Text>

      <Image
        style={styles.avatar}
        source={require("@/assets/images/avatar.jpg")}
      />

      <Card
        style={{ marginVertical: 20, width: "90%" }}
        onPress={() => setShowDetails(!showDetails)}
      >
        <Card.Content>
          <Text variant="bodyMedium" numberOfLines={showDetails ? 0 : 1}>
            Este é um App de exemplo da disciplina Programação Web e Mobile
            do Curso de Ciência da Computação da Universidade Católica de
            Pernambuco (semestre 2025.2)
          </Text>
        </Card.Content>
      </Card>

      {!isNaN(anoNasc) && (
        <Text variant="titleMedium">Você nasceu em {anoNasc}</Text>
      )}

      <TextInput
        label="Qual a sua idade?"
        mode="outlined"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
        style={{ width: 250, marginVertical: 10 }}
      />

      <View style={styles.buttonsContainer}>
        <Button mode="contained" onPress={() => alert("Botão OK pressionado")}>
          OK
        </Button>
        <Button mode="outlined" onPress={() => alert("Botão Cancel pressionado")}>
          Cancel
        </Button>
      </View>

      <Button
        mode="contained-tonal"
        style={{ marginTop: 20 }}
        onPress={() => router.navigate("/taskList")}
      >
        Ir para Lista de Tarefas
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "beige",
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 250,
    marginTop: 10,
  },
});
