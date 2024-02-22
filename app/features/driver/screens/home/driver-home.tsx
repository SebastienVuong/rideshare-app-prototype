import React, {useCallback} from "react"

import {useAtomValue} from "jotai"

import {userAtom} from "app/core/atoms/userAtoms"
import {useRequest} from "app/core/network/request-service"
import {ridesService} from "app/services/ride"
import {LoadingHandler} from "app/shared/layout/loading-handler"
import {TDriver, TRide} from "app/types/api-response"

import {DriverRideDetails} from "./screens/driver-ride-details"
import {DriverRideList} from "./screens/driver-ride-list"

export const DriverHomeScreen = () => {
  const {id: driverId} = useAtomValue(userAtom) as TDriver
  const {
    loading: isCurrentRideLoading,
    data: currentRide,
    fetch: fetchCurrentRide,
  } = useRequest({
    request: useCallback(
      async () => ridesService.getForDriverId(driverId),
      [driverId],
    ),
  })
  const {data: availableRides} = useRequest<TRide[]>({
    request: useCallback(
      async () => ridesService.getAvailable(driverId),
      [driverId],
    ),
  })

  return (
    <LoadingHandler loading={isCurrentRideLoading}>
      {currentRide ? (
        <DriverRideDetails ride={currentRide} refetch={fetchCurrentRide} />
      ) : (
        <DriverRideList rides={availableRides} refetch={fetchCurrentRide} />
      )}
    </LoadingHandler>
  )
}
