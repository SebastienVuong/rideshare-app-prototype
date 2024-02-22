import React from "react"

import {EUserType} from "app/core/navigation/root-navigator"
import {BaseAuthScreen} from "app/shared/template-screens/base-auth-screen/base-auth-screen"

export const RiderLandingScreen = () => (
  <BaseAuthScreen userType={EUserType.RIDER} />
)
