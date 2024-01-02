import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Styles from "../utils/styles";

interface PropTypes {
  title: string;
  onPress: () => void;
  style?: {
    primary?: string;
    secondary?: string;
    width?: number;
  };
}

const Button = ({ title, onPress, style }: PropTypes) => {

  const styles = StyleSheet.create({
    button: {
      backgroundColor: style?.primary ? style.primary : "white",
      borderWidth: 1,
      borderColor: style?.secondary ? style.secondary : "grey",
      padding: 5,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 3,
      width: style?.width ? style.width : "auto",
    },
  });

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={Styles.textSm}>{title}</Text>
    </Pressable>
  );
};

export default Button;
