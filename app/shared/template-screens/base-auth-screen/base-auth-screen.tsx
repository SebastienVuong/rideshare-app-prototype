import React from "react"
import {FlatList, StyleSheet, Text, View} from "react-native"

import {useSetAtom} from "jotai"

import {userAtom} from "app/core/atoms/userAtoms"
import {EUserType} from "app/core/navigation/root-navigator"
import {useNavigation} from "app/core/navigation/use-navigation.hook"
import {useRequest} from "app/core/network/request-service"
import {driversService} from "app/services/driver"
import {ridersService} from "app/services/rider"
import {Button} from "app/shared/components/button"
import {TextInput} from "app/shared/components/text-input"
import {LoadingHandler} from "app/shared/layout/loading-handler"
import {GlobalStyles} from "app/shared/styles"
import {TDriver, TRider} from "app/types/api-response"

import {UserSelectionItem} from "./components/user-selection-item"

const options: {
  [key in EUserType]: {
    userTypeLabel: string
    registerFunction: (
      userName: string,
    ) => Promise<TRider | TDriver | undefined>
    getAllUsersFunction: () => Promise<Array<TDriver | TRider>>
    nextRoute: "RiderHome" | "DriverHome"
  }
} = {
  [EUserType.RIDER]: {
    registerFunction: ridersService.create,
    getAllUsersFunction: ridersService.list,
    userTypeLabel: "Rider",
    nextRoute: "RiderHome",
  },
  [EUserType.DRIVER]: {
    registerFunction: driversService.create,
    getAllUsersFunction: driversService.list,
    userTypeLabel: "Driver",
    nextRoute: "DriverHome",
  },
}

type TUser = TRider | TDriver

export const BaseAuthScreen = ({userType}: {userType: EUserType}) => {
  const setUser = useSetAtom(userAtom)
  const {navigate} = useNavigation()
  const props = options[userType]

  const {loading: isUsersListLoading, data: users} = useRequest<TUser[]>({
    request: props.getAllUsersFunction,
  })
  const [name, setName] = React.useState("")

  const registerUser = async () => {
    const me = await props.registerFunction(name)
    setUser(me)
    navigate(props.nextRoute)
  }

  return (
    <LoadingHandler loading={isUsersListLoading}>
      <View style={styles.viewContainer}>
        <View style={styles.topSection}>
          <Text style={styles.titleStyle}>{`New ${props.userTypeLabel}?`}</Text>
          <TextInput value={name} onChangeText={setName} />
          <Button text={`Register ${name}`} onPress={registerUser} />
        </View>
        <View style={styles.bottomSection}>
          <Text style={styles.titleStyle}>
            {`Returning ${props.userTypeLabel}?`}
          </Text>
          <FlatList
            data={users}
            renderItem={({item: user}) => (
              <UserSelectionItem
                text={`Reconnect as ${user.name}`}
                onPress={() => {
                  navigate(props.nextRoute)
                  setUser(user)
                }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </LoadingHandler>
  )
}

const styles = StyleSheet.create({
  viewContainer: {backgroundColor: "white", height: "100%", padding: 12},
  topSection: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bottomSection: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  titleStyle: GlobalStyles.textStyles.title,
})
