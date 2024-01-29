import React, {useCallback} from "react"
import {Text} from "react-native"

import {useAtomValue} from "jotai"

import {userAtom} from "app/core/atoms/userAtoms"
import {useRequest} from "app/core/network/request-service"
import {ridesService} from "app/services/ride"
import {TRider} from "app/types/api-response"

import {RiderRideDetails} from "./screens/rider-ride-details"
import {RideRequestForm} from "./screens/ride-request-form"

export const RiderHomeScreen = () => {
  const {id: riderId} = useAtomValue(userAtom) as TRider
  const {
    loading: isCurrentRideLoading,
    data: currentRide,
    // fetch: fetchCurrentRide,
  } = useRequest({
    request: useCallback(
      async () => ridesService.getForRiderId(riderId),
      [riderId],
    ),
  })

  if (isCurrentRideLoading) {
    return <Text>Loading...</Text>
  }

  return currentRide ? (
    <RiderRideDetails ride={currentRide} />
  ) : (
    <RideRequestForm />
  )
}
