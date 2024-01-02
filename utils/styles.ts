import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  text1: { fontWeight: "bold", fontSize: 18 },
  text2: { color: "grey", fontSize: 14 },
  text3: { color: "grey", fontWeight: "bold" },
  textBold: { fontWeight: "bold" },
  textSm: { fontSize: 10 },
  textMd: { fontSize: 14 },
  textBg: { fontSize: 30 },
  textError: { color: "red", fontWeight: "bold" },
  title: { fontWeight: "bold", fontSize: 20 },
  errorContainer: {
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    minHeight: 400,
  },
  container: {
    justifyContent: "center",
    alignContent: "center",
    minHeight: 500,
  },
  imageSm: {
    resizeMode: "contain",
    height: 80,
    width: 80,
  },
  imageMd: {
    resizeMode: "contain",
    height: 140,
    width: 140,
  },
  imageBg: {
    width: 350,
    height: 350,
    resizeMode: "contain",
  },
});

export default Styles;
