import React from "react"
import {Text, View} from "react-native"

import {TRide} from "app/types/api-response"

export const RideListItem = (ride: TRide) => {
  return (
    <View style={{borderWidth: 1}}>
      <Text>{ride.pickup_location}</Text>
      <Text>{ride.dropoff_location}</Text>
    </View>
  )
}
