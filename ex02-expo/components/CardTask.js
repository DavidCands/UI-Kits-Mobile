import { Card, Button, Switch, Text } from "react-native-paper";
import { View } from "react-native";

export function CardTask({ task, onDelete, onCheck }) {
  return (
    <Card style={{ marginVertical: 5 }}>
      <Card.Title title={task.description} />
      <Card.Content>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Switch value={task.done} onValueChange={() => onCheck(task)} />
          <Button
            mode="outlined"
            onPress={() => onDelete(task.objectId)}
            textColor="red"
          >
            Excluir
          </Button>
        </View>
      </Card.Content>
    </Card>
  );
}
