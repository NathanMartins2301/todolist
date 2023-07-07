import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TaskType } from "../../screens/Home";
type Props = {
  task: TaskType;
  handleRemoveTask: (id: number) => void;
  handleChecked: (id: number) => void;
};

export function Card({ task, handleRemoveTask, handleChecked }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleChecked(task.id)}>
        <Icon
          name={
            task.checked
              ? "checkbox-marked-circle"
              : "checkbox-blank-circle-outline"
          }
          size={20}
          color={task.checked ? "#5E60CE" : "#4EA8DE"}
        />
      </TouchableOpacity>
      <Text style={task.checked ? styles.textTaskChecked : styles.textTask}>
        {task.text}
      </Text>
      <TouchableOpacity onPress={() => handleRemoveTask(task.id)}>
        <Icon name="trash-can-outline" size={20} style={styles.trash} />
      </TouchableOpacity>
    </View>
  );
}
