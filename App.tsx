import React from "react"

import {NavigationContainer} from "@react-navigation/native"

import {RootNavigator} from "app/core/navigation/root-navigator"

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

export default App
