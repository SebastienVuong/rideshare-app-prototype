import React from "react"
import {FlatList, Text, View} from "react-native"

import {GlobalStyles} from "app/shared/styles"
import {TRide} from "app/types/api-response"

import {RideListItem} from "../components/ride-list-item"

export const DriverRideList = ({rides}: {rides?: TRide[]}) => {
  return (
    <View style={{flex: 1}}>
      <Text style={GlobalStyles.textStyles.title}>Open Rides:</Text>
      <FlatList
        data={rides}
        renderItem={({item}) => RideListItem(item)}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
