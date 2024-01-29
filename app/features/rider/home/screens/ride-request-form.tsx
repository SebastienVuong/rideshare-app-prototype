import React from "react"
import {Text, View} from "react-native"

import {Button} from "app/shared/components/button"
import {TextInput} from "app/shared/components/text-input"
import {GlobalStyles} from "app/shared/styles"

export const RideRequestForm = () => {
  const [pickupLocation, setPickupLocation] = React.useState("")
  const [dropoffLocation, setDropoffLocation] = React.useState("")

  return (
    <View style={{flex: 1, padding: 10}}>
      <Text style={GlobalStyles.textStyles.title}>Request a ride</Text>
      <TextInput
        placeholder="Pickup location"
        value={pickupLocation}
        onChangeText={setPickupLocation}
      />
      <TextInput
        placeholder="Dropoff location"
        value={dropoffLocation}
        onChangeText={setDropoffLocation}
      />
      <Button text="Request ride" onPress={() => null} />
    </View>
  )
}
