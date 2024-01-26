import React from "react"
import {Text, View} from "react-native"

import {EUserType} from "app/core/navigation/root-navigator"
import {INavigationProp} from "app/core/navigation/types"
import {Button} from "app/shared/components/button"
import {GlobalStyles} from "app/shared/styles"

interface IWelcomeProps extends INavigationProp {
  setUserType: (userType: EUserType) => void
}

export const Welcome = ({navigation, setUserType}: IWelcomeProps) => {
  const userButtonsProps = [
    {
      text: "Rider",
      onPress: () => {
        setUserType(EUserType.RIDER)
        navigation.navigate("Home2")
      },
    },
    {
      text: "Driver",
      onPress: () => {
        setUserType(EUserType.DRIVER)
        navigation.navigate("Home2")
      },
    },
  ]

  // FIXME: This layout should be made into a base screen template
  return (
    <View style={{flex: 1, backgroundColor: "#FFFFFF"}}>
      <Text
        style={{
          ...GlobalStyles.textStyles.title,
          flex: 1,
        }}>
        I am a Goober...
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingVertical: 20,
        }}>
        {userButtonsProps.map((userButtonProps) => (
          <Button
            key={userButtonProps.text}
            {...userButtonProps}
            style={{width: "40%"}}
          />
        ))}
      </View>
    </View>
  )
}
