import React from "react"

import {DefaultLanding} from "app/features/default-landing"

import {Stack} from "./root-navigator"

// FIXME: Standardize stack screens with a createStackScreens() function
export const DriverStackScreens = (
  <>
    <Stack.Screen
      name="DriverHome"
      options={{title: "Driver Home"}}
      component={DefaultLanding}
    />
  </>
)
