import React from "react"

import {RiderLandingScreen} from "app/features/rider/landing/screen"

import {Stack} from "./root-navigator"

// FIXME: Standardize stack screens with a createStackScreens() function
export const RiderStackScreens = (
  <>
    <Stack.Screen
      name="RiderHome"
      options={{title: "Rider Home"}}
      component={RiderLandingScreen}
    />
    <Stack.Screen
      name="RiderHome2"
      options={{title: "Rider Home 2"}}
      component={RiderLandingScreen}
    />
  </>
)
