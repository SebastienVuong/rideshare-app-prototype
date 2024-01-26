import React, {useState} from "react"

import {createNativeStackNavigator} from "@react-navigation/native-stack"

import {DefaultLanding} from "app/features/default-landing"
import {Welcome} from "app/features/welcome/welcome"

import {DriverStackScreens} from "./driver-stack-screens"
import {RiderStackScreens} from "./rider-stack-screens"

export const Stack = createNativeStackNavigator()

export enum EUserType {
  RIDER = "rider",
  DRIVER = "driver",
}

export const RootNavigator = () => {
  // XXX(Seb): Pass the setter into the Welcome screen
  const [userType, setUserType] = useState<EUserType>()

  const loadUserStack = () => {
    if (userType === "rider") return RiderStackScreens
    if (userType === "driver") return DriverStackScreens
    return (
      <>
        <Stack.Screen
          name="Home"
          options={{title: "Welcome"}}
          // NOTE:  'component' is not designed to accept a render function;
          //        switch to children to pass props to the screen component.
          // component={Welcome}>
        >
          {(props) => <Welcome {...props} setUserType={setUserType} />}
        </Stack.Screen>
        <Stack.Screen
          name="Home2"
          options={{title: "Welcome2"}}
          // NOTE:  'component' is not designed to accept a render function;
          //        switch to children to pass props to the screen component.
          component={DefaultLanding}
        />
      </>
    )
  }

  return <Stack.Navigator>{loadUserStack()}</Stack.Navigator>
}
