import {RiderHomeScreen} from "app/features/rider/screens/home/rider-home"
import {RiderLandingScreen} from "app/features/rider/screens/landing/screen"

import {createAppStackNavigator} from "../../core/navigation/create-router.util"

const routerConfig = {
  RiderAuthentication: {
    component: RiderLandingScreen,
    options: {title: "Goober Rider"},
  },
  RiderHome: {
    component: RiderHomeScreen,
    options: {title: "Rider Home "},
  },
}

export const RiderNavigator = () => createAppStackNavigator(routerConfig)

export type TRiderRouteNames = keyof typeof routerConfig

export type TRiderStackParamList = {
  RiderAuthentication: undefined
  RiderHome: undefined
}
