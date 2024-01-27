import React from "react"

import {createNativeStackNavigator} from "@react-navigation/native-stack"

import {Welcome} from "app/features/welcome/welcome"

import {DriverNavigator} from "./driver-navigator"
import {RiderNavigator} from "./rider-navigator"

export const Stack = createNativeStackNavigator()

export enum EUserType {
  RIDER = "rider",
  DRIVER = "driver",
}

export const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      options={{title: "Welcome"}}
      component={Welcome}
    />
    <Stack.Screen
      name="Rider"
      options={{header: () => null}}
      component={RiderNavigator}
    />
    <Stack.Screen
      name="Driver"
      options={{header: () => null}}
      component={DriverNavigator}
    />
  </Stack.Navigator>
)
