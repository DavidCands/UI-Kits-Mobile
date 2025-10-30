import { Card, Text, Switch, IconButton } from "react-native-paper";

export function CardTask({ task, onDelete, onCheck }) {
  return (
    <Card style={{ marginVertical: 5, padding: 10 }}>
      <Card.Content
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          variant="bodyLarge"
          style={{
            textDecorationLine: task.done ? "line-through" : "none",
          }}
        >
          {task.description}
        </Text>

        <Switch
          value={task.done}
          onValueChange={() => onCheck(task)}
          color="#6200ee"
        />

        <IconButton
          icon="delete"
          iconColor="red"
          size={20}
          onPress={() => onDelete(task.objectId)}
        />
      </Card.Content>
    </Card>
  );
}
