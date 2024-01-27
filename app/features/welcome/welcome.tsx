import React from "react"
import {Text, View} from "react-native"

import {useNavigation} from "app/core/navigation/use-navigation.hook"
import {Button} from "app/shared/components/button"
import {GlobalStyles} from "app/shared/styles"

export const Welcome = () => {
  const {navigate} = useNavigation()
  const userButtonsProps = [
    {
      text: "Rider",
      onPress: () => navigate("Rider"),
    },
    {
      text: "Driver",
      onPress: () => navigate("Driver"),
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
