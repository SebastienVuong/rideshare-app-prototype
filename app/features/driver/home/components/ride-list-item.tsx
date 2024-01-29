import React from "react"
import {Text, View} from "react-native"

import {useAtomValue} from "jotai"

import {userAtom} from "app/core/atoms/userAtoms"
import {ridesService} from "app/services/ride"
import {Button} from "app/shared/components/button"
import {TDriver, TRide} from "app/types/api-response"

export const RideListItem = ({
  ride,
  refetch,
}: {
  ride: TRide
  refetch: () => Promise<void>
}) => {
  const {id: driverId} = useAtomValue(userAtom) as TDriver

  const buttonsProps = [
    {
      text: "✅",
      onPress: async () => {
        await ridesService.accept({rideId: ride.id, driverId})
        await refetch()
      },
    },
    {
      text: "❌",
      onPress: async () => {
        await ridesService.decline({rideId: ride.id, driverId})
        // XXX(Seb): This is not refetching the list of rides without the declined one; why?
        await refetch()
      },
    },
  ]
  return (
    <View
      style={{
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}>
      <View style={{justifyContent: "space-evenly"}}>
        <Text>{ride.pickup_location}</Text>
        <Text>{ride.dropoff_location}</Text>
        <Text>
          {ride.declined_by.map((id) => (
            <Text>{id}</Text>
          ))}
        </Text>
      </View>
      {buttonsProps.map((buttonProps) => (
        <Button key={buttonProps.text} {...buttonProps} style={{width: 60}} />
      ))}
    </View>
  )
}
