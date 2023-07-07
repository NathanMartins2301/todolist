import { View, Text, Image } from "react-native";
import ClipBoard from "../../assets/Clipboard.png";

import { styles } from "./styles";

export function EmptyCards() {
  return (
    <View style={styles.container}>
      <Image source={ClipBoard} />
      <Text style={styles.textTitle}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.textDescription}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
