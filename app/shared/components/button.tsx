import React from "react"
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  TextStyle,
  StyleSheet,
  ViewStyle,
} from "react-native"

import {GlobalStyles} from "app/shared/styles"

interface IButtonProps extends TouchableOpacityProps {
  text: string
  textStyle?: TextStyle
  style: ViewStyle
}
export const Button = ({text, textStyle, onPress, style}: IButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={{...styles.defaultButton, ...style}}>
    <Text style={{...styles.defaultText, ...textStyle}}>{text}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  defaultButton: {
    padding: 20,
    borderRadius: 99999, // HACK: Round corners to make it look like a button
    width: "80%",
    backgroundColor: GlobalStyles.colors.primary,
  },
  defaultText: {color: "#FFFFFF", textAlign: "center"},
})
