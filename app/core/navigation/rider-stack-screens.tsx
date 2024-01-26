import React from "react"

import {DefaultLanding} from "app/features/default-landing"

import {Stack} from "./root-navigator"

// FIXME: Standardize stack screens with a createStackScreens() function
export const RiderStackScreens = (
  <>
    <Stack.Screen
      name="RiderHome"
      options={{title: "Rider Home"}}
      component={DefaultLanding}
    />
  </>
)
