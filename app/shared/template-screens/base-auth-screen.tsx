import React from "react"
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"

import {useSetAtom} from "jotai"

import {userAtom} from "app/core/atoms/userAtoms"
import {EUserType} from "app/core/navigation/root-navigator"
import {useNavigation} from "app/core/navigation/use-navigation.hook"
import {useRequest} from "app/core/network/request-service"
import {driversService} from "app/services/driver"
import {ridersService} from "app/services/rider"
import {Button} from "app/shared/components/button"
import {GlobalStyles} from "app/shared/styles"
import {TDriver, TRider} from "app/types/api-response"

const options: {
  [key in EUserType]: {
    userTypeLabel: string
    registerFunction: any
    getAllUsersFunction: any
    nextRoute: string
  }
} = {
  [EUserType.RIDER]: {
    registerFunction: ridersService.create,
    getAllUsersFunction: ridersService.list,
    userTypeLabel: "Rider",
    // FIXME: Replicate Driver pattern
    nextRoute: "RiderHome2",
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

  // FIXME: Implement shared loading indicator
  if (isUsersListLoading) {
    return <Text>Loading...</Text>
  }
  return (
    <View style={styles.viewContainer}>
      <View style={styles.topSection}>
        <Text
          style={
            GlobalStyles.textStyles.title
          }>{`New ${props.userTypeLabel}?`}</Text>
        <TextInput
          style={styles.defaultTextInput}
          value={name}
          onChangeText={setName}
        />
        <Button
          text={`Register ${name}`}
          onPress={async () => {
            const me = await props.registerFunction(name)
            setUser(me)
            navigate(props.nextRoute)
          }}
        />
      </View>
      <View style={styles.bottomSection}>
        <Text
          style={
            GlobalStyles.textStyles.title
          }>{`Returning ${props.userTypeLabel}?`}</Text>
        <FlatList
          data={users}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigate(props.nextRoute)
                setUser(item)
              }}
              style={styles.returningUserOption}>
              <Text>{`Reconnect as ${item.name}`}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
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
  defaultTextInput: {
    height: 40,
    width: "100%",
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#ccc",
    borderRadius: 5,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#fff",
  },
  returningUserOption: {
    margin: 3,
    padding: 10,
    borderRadius: 5,
    backgroundColor: GlobalStyles.colors.secondary,
  },
})
