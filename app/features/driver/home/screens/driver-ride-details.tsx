import React from "react"
import {Text, View} from "react-native"

import {ridesService} from "app/services/ride"
import {Button} from "app/shared/components/button"
import {GlobalStyles} from "app/shared/styles"
import {ERideStatus, TRide} from "app/types/api-response"

export const DriverRideDetails = ({
  ride,
  refetch,
}: {
  ride: TRide
  refetch: () => Promise<void>
}) => {
  const renderBody = () => {
    switch (ride.status) {
      case ERideStatus.ACCEPTED:
        return (
          <>
            <Text style={GlobalStyles.textStyles.title}>
              {`Picking Rider up at ${ride.pickup_location}`}
            </Text>
            <Button
              text="Picked Rider up"
              onPress={async () => {
                await ridesService.pickup(ride.id)
                await refetch()
              }}
            />
          </>
        )
      case ERideStatus.PICKED_UP:
        return (
          <>
            <Text style={GlobalStyles.textStyles.title}>
              {`Dropping Rider off at ${ride.dropoff_location}`}
            </Text>
            <Button
              text="Dropped Rider off"
              onPress={async () => {
                await ridesService.dropoff(ride.id)
                await refetch()
              }}
            />
            <Button
              text="Cancel Ride"
              onPress={async () => {
                await ridesService.dropoff(ride.id)
                await refetch()
              }}
            />
          </>
        )
    }
  }
  return <View style={{flex: 1}}>{renderBody()}</View>
}
