import React from "react";
import { Pressable, Text, StyleSheet } from "react-native"
import Styles from "../utils/styles";

interface PropTypes {
  title: string,
  onPress: () => void,
  style?: {
    button?: object,
    title?: object,
  },
};

const Button = ({ title, onPress, style }: PropTypes) => {

  return (
    <Pressable style={[style?.button ? style.button : styles.button]} onPress={onPress}>
      <Text style={[style?.title ? style.title : Styles.textSmall]}>{title}</Text>
    </Pressable>
  );
}

export default Button;


const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "grey",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3
  },
})
