import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
    justifyContent: "center",
  },
  box: {
    width: 100,
    alignSelf: "stretch",
    justifyContent: "center", alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 1, borderStyle: "dashed", borderColor: "darkslategray",
  },
  boxText: { color: "darkslategray", fontWeight: "bold" },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "stretch",
  },

  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "stretch",
  },
  
  item: {
    margin: 5,
    padding: 5,
    color: "slategrey",
    backgroundColor: "ghostwhite",
    textAlign: "center",
  },
});
