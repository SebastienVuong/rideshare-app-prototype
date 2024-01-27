import React, {useCallback} from "react"
import {Text} from "react-native"

import {useAtomValue} from "jotai"

import {userAtom} from "app/core/atoms/userAtoms"
import {useRequest} from "app/core/network/request-service"
import {ridesService} from "app/services/ride"
import {TDriver, TRide} from "app/types/api-response"

import {DriverRideDetails} from "./screens/driver-ride-details"
import {DriverRideList} from "./screens/driver-ride-list"

export const DriverHomeScreen = () => {
  const {id} = useAtomValue(userAtom) as TDriver
  const {
    loading: isCurrentRideLoading,
    data: currentRide,
    fetch: fetchCurrentRide,
  } = useRequest({
    request: useCallback(async () => ridesService.getForDriverId(id), [id]),
  })
  const {data: availableRides} = useRequest<TRide[]>({
    request: ridesService.getAvailable,
  })

  if (isCurrentRideLoading) {
    return <Text>Loading...</Text>
  }
  return currentRide ? (
    <DriverRideDetails ride={currentRide} refetch={fetchCurrentRide} />
  ) : (
    <DriverRideList rides={availableRides} />
  )
}
