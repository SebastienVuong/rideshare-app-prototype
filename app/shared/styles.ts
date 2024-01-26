import {TextStyle} from "react-native"

export enum EColors {
  primary = "#3845AC",
  secondary = "#9DAEF0",
}

const textStyles: {[key: string]: TextStyle} = {
  title: {
    textAlign: "center",
    paddingTop: 50,
    fontSize: 36,
    color: EColors.primary,
  },
}

export const GlobalStyles = {colors: EColors, textStyles}
