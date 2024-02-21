import {TRootRouteNames, TRootStackParamList} from "./root-navigator"
import {
  TDriverRouteNames,
  TDriverStackParamList,
} from "../../features/driver/driver.router"
import {
  TRiderRouteNames,
  TRiderStackParamList,
} from "../../features/rider/rider.router"

export type TAppRouteName =
  | TDriverRouteNames
  | TRiderRouteNames
  | TRootRouteNames

export interface INavigationProp {
  navigation: {
    navigate: (routeName: TAppRouteName) => void
  }
}
export type TNavigationParamList = TRootStackParamList &
  TDriverStackParamList &
  TRiderStackParamList
