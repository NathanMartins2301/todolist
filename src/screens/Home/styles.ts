import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0D0D0D",
    height: 173,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "#1A1A1A",
    flex: 1,
    padding: 24,
  },
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -55,
    height: 54,
  },
  input: {
    backgroundColor: "#262626",
    padding: 16,
    borderRadius: 5,
    fontSize: 16,
    color: "#808080",
    flex: 1,
    marginRight: 4,
  },
  button: {
    width: 54,
    height: 54,
    backgroundColor: "#1E6F9F",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  countContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 33,
  },
  section: {
    flexDirection: "row",
  },
  done: {
    color: "#8284FA",
    marginRight: 8,
  },
  created: {
    color: "#4EA8DE",
    marginRight: 8,
  },
  count: {
    backgroundColor: "#333",
    borderRadius: 10,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
  },
  countText: {
    color: "#FFF",
  },
  cardContainer: {
    marginTop: 20,
  },
});
