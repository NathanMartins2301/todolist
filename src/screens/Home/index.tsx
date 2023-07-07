import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Logo from "../../assets/logo.png";
import { Card } from "../../components/Card";
import { EmptyCards } from "../../components/EmptyCards";

export interface TaskType {
  text: string;
  id: number;
  checked: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskName, setTaskName] = useState("");
  const [countDone, setCountDone] = useState(0);

  function handleAddTask() {
    setTasks((prevState) => [
      ...prevState,
      { text: taskName, id: tasks.length + 1, checked: false },
    ]);
    setTaskName("");
  }

  function handleRemoveTask(id: number) {
    Alert.alert("Remover", "Deseja remover a tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((task) => task.id !== id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleChecked(id: number) {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === id) {
          if (task.checked) {
            setCountDone((item) => item - 1);
          } else {
            setCountDone((item) => item + 1);
          }
          return { ...task, checked: !task.checked };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <>
      <View style={styles.header}>
        <Image source={Logo} />
      </View>
      <View style={styles.body}>
        <View style={styles.form}>
          <TextInput
            placeholder="Digite algo"
            style={styles.input}
            placeholderTextColor="#6B6B6B"
            onChangeText={setTaskName}
            value={taskName}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Icon name="plus-circle-outline" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.countContainer}>
          <View style={styles.section}>
            <Text style={styles.created}>Criadas</Text>
            <View style={styles.count}>
              <Text style={styles.countText}>{tasks.length}</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.done}>Concluídas</Text>
            <View style={styles.count}>
              <Text style={styles.countText}>{countDone}</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card
                task={item}
                handleRemoveTask={handleRemoveTask}
                handleChecked={handleChecked}
                key={item.id}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={EmptyCards}
          />
        </View>
      </View>
    </>
  );
}
