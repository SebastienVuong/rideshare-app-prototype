import React from "react"
import {StyleSheet, TextStyle} from "react-native"
import {TextInput as PaperTextInput} from "react-native-paper"

type TPaperTextInputProps = React.ComponentProps<typeof PaperTextInput>

interface ITextInputProps extends TPaperTextInputProps {
  style?: TextStyle
}

export const TextInput = ({style, ...props}: ITextInputProps) => (
  <PaperTextInput
    mode="outlined"
    style={{...styles.defaultTextInput, ...style}}
    {...props}
  />
)

const styles = StyleSheet.create({
  defaultTextInput: {
    height: 40,
    width: "100%",
    padding: 10,
    fontSize: 16,
    color: "#333",
  },
})
