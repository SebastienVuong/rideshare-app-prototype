import {useNavigation as useRNNavigation} from "@react-navigation/native"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"

import {TNavigationParamList} from "./types"

/**
 * HACK:  Wrap the react-navigation hook to isolate this type hack so we can
 *        resolve it in 1 spot in the future.
 */
export const useNavigation = () => {
  const navigation =
    useRNNavigation<NativeStackNavigationProp<TNavigationParamList>>()
  return navigation
}
