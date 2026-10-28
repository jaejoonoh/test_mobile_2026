import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "space-around",
    backgroundColor: "ghostwhite",
  },
  box: {
    width: 100,
    alignSelf: "stretch",
    justifyContent: "center", alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 1, borderStyle: "dashed", borderColor: "darkslategray",
  },
  boxText: { color: "darkslategray", fontWeight: "bold" },
});
