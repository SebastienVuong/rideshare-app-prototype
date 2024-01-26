import React from "react"

import {EUserType} from "app/core/navigation/root-navigator"
import {BaseAuthScreen} from "app/shared/template-screens/base-auth-screen"

export const DriverLandingScreen = () => (
  <BaseAuthScreen userType={EUserType.DRIVER} />
)
