import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    text1:{ fontWeight: "bold", fontSize: 18 },
    text2: { color: "grey", fontSize: 12 },
    text3: { color: "grey", fontWeight: "bold" },
    textSmall: { fontSize: 10 },
    textError: { color: "red", fontWeight: "bold" },
    errorContainer: {
        alignSelf: "center",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        minHeight: 400,
      },
});

export default Styles