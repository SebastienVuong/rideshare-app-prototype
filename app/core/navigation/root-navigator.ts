import {createNativeStackNavigator} from "@react-navigation/native-stack"

import {Welcome} from "app/features/welcome/welcome"

import {createAppStackNavigator} from "./create-router.util"
import {DriverNavigator} from "../../features/driver/driver.router"
import {RiderNavigator} from "../../features/rider/rider.router"

export const Stack = createNativeStackNavigator()

export enum EUserType {
  RIDER = "rider",
  DRIVER = "driver",
}

const routerConfig = {
  Welcome: {
    component: Welcome,
    options: {title: "Welcome"},
  },
  Rider: {
    component: RiderNavigator,
    options: {title: "Rider"},
  },
  Driver: {
    component: DriverNavigator,
    options: {title: "Driver"},
  },
}

export const RootNavigator = () => createAppStackNavigator(routerConfig)

export type TRootRouteNames = keyof typeof routerConfig

export type TRootStackParamList = {
  Welcome: undefined
  Rider: undefined
  Driver: undefined
}
