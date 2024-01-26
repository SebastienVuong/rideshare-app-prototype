import React from "react"

import {NavigationContainer} from "@react-navigation/native"

import {RootNavigator} from "app/core/navigation/root-navigator"

import {useInitializeMockTables} from "server/use-initialize-mock-ables.hook"

function App(): React.JSX.Element {
  useInitializeMockTables()

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

export default App
