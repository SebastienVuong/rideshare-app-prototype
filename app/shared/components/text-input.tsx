import React from "react"
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  TextStyle,
} from "react-native"

interface ITextInputProps extends RNTextInputProps {
  style?: TextStyle
}

export const TextInput = ({style, ...props}: ITextInputProps) => (
  <RNTextInput style={{...styles.defaultTextInput, ...style}} {...props} />
)

const styles = StyleSheet.create({
  defaultTextInput: {
    height: 40,
    width: "100%",
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#ccc",
    borderRadius: 5,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#fff",
  },
})
