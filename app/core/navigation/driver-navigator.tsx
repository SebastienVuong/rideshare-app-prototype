import React from "react"

import {DriverHomeScreen} from "app/features/driver/home/driver-home"
import {DriverLandingScreen} from "app/features/driver/landing/screen"

import {Stack} from "./root-navigator"

// FIXME: Standardize stack screens with a createStackScreens() function
export const DriverNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="DriverAuthentication"
      options={{title: "Goober Driver"}}
      component={DriverLandingScreen}
    />
    <Stack.Screen
      name="DriverHome"
      options={{title: "Driver Home"}}
      component={DriverHomeScreen}
    />
  </Stack.Navigator>
)
