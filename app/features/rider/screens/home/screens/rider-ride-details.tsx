import React from "react"
import {Text, View} from "react-native"

import {GlobalStyles} from "app/shared/styles"
import {ERideStatus, TRide} from "app/types/api-response"

export const RiderRideDetails = ({ride}: {ride: TRide}) => {
  const renderBody = () => {
    switch (ride.status) {
      case ERideStatus.REQUESTED:
        return (
          <>
            <Text style={GlobalStyles.textStyles.title}>
              Requested - Searching for Driver...
            </Text>
          </>
        )
      case ERideStatus.ACCEPTED:
        return (
          <>
            <Text style={GlobalStyles.textStyles.title}>
              Driver is on the way!
            </Text>
          </>
        )
      case ERideStatus.PICKED_UP:
        return (
          <>
            <Text style={GlobalStyles.textStyles.title}>Ride in progress</Text>
          </>
        )
    }
  }

  return <View style={{flex: 1, alignItems: "center"}}>{renderBody()}</View>
}
