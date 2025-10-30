import { addTask, deleteTask, getTasks, updateTask } from "@/api";
import { CardTask } from "@/components/CardTask";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { FlatList, View } from "react-native";
import { Button, TextInput, Text, Divider } from "react-native-paper";

export default function TaskList() {
  const [description, setDescription] = useState("");
  const queryClient = useQueryClient();
  const { data, isFetching, error, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: getTasks,
  });

  const addMutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setDescription("");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isFetching) return <Text>Carregando...</Text>;
  if (error) return <Text>Erro: {error.message}</Text>;
  if (!data) return <Text>Nenhuma tarefa encontrada</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Text variant="headlineSmall" style={{ marginBottom: 10 }}>
        Lista de Tarefas
      </Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          placeholder="Adicionar tarefa"
          value={description}
          onChangeText={setDescription}
          style={{ flex: 1, marginRight: 10 }}
        />
        <Button
          mode="contained"
          onPress={() => addMutation.mutate({ description })}
        >
          Adicionar
        </Button>
      </View>

      <Divider style={{ marginVertical: 10 }} />

      <FlatList
        data={data.results}
        keyExtractor={(item) => item.objectId}
        renderItem={({ item: task }) => (
          <CardTask
            key={task.objectId}
            task={task}
            onDelete={deleteMutation.mutate}
            onCheck={updateMutation.mutate}
          />
        )}
      />

      {isPending && <Text>Atualizando...</Text>}
    </View>
  );
}
