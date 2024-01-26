import React from "react"

import {DriverLandingScreen} from "app/features/driver/landing/screen"

import {Stack} from "./root-navigator"

// FIXME: Standardize stack screens with a createStackScreens() function
export const DriverStackScreens = (
  <>
    <Stack.Screen
      name="DriverHome"
      options={{title: "Driver Home"}}
      component={DriverLandingScreen}
    />
    <Stack.Screen
      name="DriverHome2"
      options={{title: "Driver Home 2"}}
      component={DriverLandingScreen}
    />
  </>
)
