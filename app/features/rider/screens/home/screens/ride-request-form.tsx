import React from "react"
import {Text, View} from "react-native"

import {useAtomValue} from "jotai"

import {userAtom} from "app/core/atoms/userAtoms"
import {ridesService} from "app/services/ride"
import {Button} from "app/shared/components/button"
import {TextInput} from "app/shared/components/text-input"
import {GlobalStyles} from "app/shared/styles"
import {TRider} from "app/types/api-response"
import {calculateRidePrice} from "app/utils/calculate-ride-price"
import {formatMoney} from "app/utils/format-money"

export const RideRequestForm = ({refetch}: {refetch: () => Promise<any>}) => {
  const {id: riderId} = useAtomValue(userAtom) as TRider
  const [pickupLocation, setPickupLocation] = React.useState("")
  const [dropoffLocation, setDropoffLocation] = React.useState("")

  const price = calculateRidePrice({pickupLocation, dropoffLocation})

  return (
    <View style={{flex: 1, padding: 10, alignItems: "center"}}>
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
      <Text>{`Cost: ${formatMoney(price)}`}</Text>
      <Button
        text="Request ride"
        onPress={async () => {
          await ridesService.request({riderId, pickupLocation, dropoffLocation})
          await refetch()
        }}
        disabled={!pickupLocation || !dropoffLocation || !price}
      />
    </View>
  )
}
