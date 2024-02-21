import React from "react"

import {NativeStackNavigationOptions} from "@react-navigation/native-stack"

import {Stack} from "./root-navigator"
import {TAppRouteName} from "./types"

interface IRouterScreenProps {
  component: React.ComponentType
  options?: NativeStackNavigationOptions
}

interface IRouterConfig {
  [key: string]: IRouterScreenProps
}

interface IStackScreenProps extends IRouterScreenProps {
  name: TAppRouteName
}

export const createAppStackNavigator = (
  routerConfig: IRouterConfig,
  defaultOptions?: NativeStackNavigationOptions,
) => {
  // HACK: This is a workaround to Object.keys() returning a string[] instead of a TRouteName[]
  const routeNames: TAppRouteName[] = Object.keys(
    routerConfig,
  ) as TAppRouteName[]
  const stackScreens: IStackScreenProps[] = routeNames.map((routeName) => ({
    ...defaultOptions,
    name: routeName,
    ...routerConfig[routeName],
  }))
  const createStackScreen = (stackScreenProps: IStackScreenProps) => (
    <Stack.Screen {...defaultOptions} {...stackScreenProps} />
  )
  return (
    <Stack.Navigator>{stackScreens.map(createStackScreen)}</Stack.Navigator>
  )
}
