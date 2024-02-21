import {DriverHomeScreen} from "app/features/driver/screens/home/driver-home"
import {DriverAuthScreen} from "app/features/driver/screens/landing/screen"

import {createAppStackNavigator} from "../../core/navigation/create-router.util"

const routerConfig = {
  DriverAuthentication: {
    component: DriverAuthScreen,
    options: {title: "Goober Driver"},
  },
  DriverHome: {
    component: DriverHomeScreen,
    options: {title: "Driver Home"},
  },
}

export const DriverNavigator = () => createAppStackNavigator(routerConfig)

export type TDriverRouteNames = keyof typeof routerConfig

export type TDriverStackParamList = {
  DriverAuthentication: undefined
  DriverHome: undefined
}
