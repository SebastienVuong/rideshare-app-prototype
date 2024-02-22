import React from "react"
import {StyleSheet, Text, TouchableOpacity} from "react-native"

import {GlobalStyles} from "app/shared/styles"

interface IUserSelectionItemProps {
  text: string
  onPress: () => void
}

export const UserSelectionItem = ({text, onPress}: IUserSelectionItemProps) => (
  <TouchableOpacity onPress={onPress} style={styles.returningUserOption}>
    <Text>{text}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  returningUserOption: {
    margin: 3,
    padding: 10,
    borderRadius: 5,
    backgroundColor: GlobalStyles.colors.secondary,
  },
})
