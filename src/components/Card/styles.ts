import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#262626",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    overflow: "hidden",
  },
  textTask: {
    color: "#fff",
    flex: 1,
    fontSize: 14,
    fontWeight: "normal",
    marginLeft: 8,
  },
  textTaskChecked: {
    color: "#808080",
    flex: 1,
    fontSize: 14,
    fontWeight: "normal",
    marginLeft: 8,
    textDecorationLine: "line-through",
  },
  trash: {
    color: "#808080",
  },
});
