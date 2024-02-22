import React, {useCallback} from "react"

import {useAtomValue} from "jotai"

import {userAtom} from "app/core/atoms/userAtoms"
import {useRequest} from "app/core/network/request-service"
import {ridesService} from "app/services/ride"
import {LoadingHandler} from "app/shared/layout/loading-handler"
import {TRider} from "app/types/api-response"

import {RideRequestForm} from "./screens/ride-request-form"
import {RiderRideDetails} from "./screens/rider-ride-details"

export const RiderHomeScreen = () => {
  const {id: riderId} = useAtomValue(userAtom) as TRider
  const {
    loading: isCurrentRideLoading,
    data: currentRide,
    fetch: fetchCurrentRide,
  } = useRequest({
    request: useCallback(
      async () => ridesService.getForRiderId(riderId),
      [riderId],
    ),
  })

  return (
    <LoadingHandler loading={isCurrentRideLoading}>
      {currentRide ? (
        <RiderRideDetails ride={currentRide} />
      ) : (
        <RideRequestForm refetch={fetchCurrentRide} />
      )}
    </LoadingHandler>
  )
}
