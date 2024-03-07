import React from "react"
import {
  TouchableOpacityProps,
  TextStyle,
  StyleSheet,
  ViewStyle,
} from "react-native"
import {Button as PaperButton} from "react-native-paper"

import {GlobalStyles} from "app/shared/styles"

interface IButtonProps extends TouchableOpacityProps {
  text: string
  textStyle?: TextStyle
  style?: ViewStyle
}

export const Button = ({
  text,
  textStyle,
  onPress,
  style,
  disabled,
}: IButtonProps) => (
  <PaperButton
    mode="contained-tonal"
    onPress={onPress}
    disabled={disabled}
    style={{...styles.defaultButton, ...style}}
    labelStyle={{...styles.defaultText, ...textStyle}}>
    {text}
  </PaperButton>
)

const styles = StyleSheet.create({
  defaultButton: {
    padding: 8,
    width: "80%",
    backgroundColor: GlobalStyles.colors.primary,
  },
  defaultText: {color: "#FFFFFF", textAlign: "center", fontSize: 20},
})
