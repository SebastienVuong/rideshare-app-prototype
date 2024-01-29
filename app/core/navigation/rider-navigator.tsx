import React from "react"

import {RiderHomeScreen} from "app/features/rider/home/rider-home"
import {RiderLandingScreen} from "app/features/rider/landing/screen"

import {Stack} from "./root-navigator"

// FIXME: Standardize stack screens with a createStackScreens() function
export const RiderNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="RiderAuthentication"
      options={{title: "Goober Rider"}}
      component={RiderLandingScreen}
    />
    <Stack.Screen
      name="RiderHome"
      options={{title: "Rider Home "}}
      component={RiderHomeScreen}
    />
  </Stack.Navigator>
)
