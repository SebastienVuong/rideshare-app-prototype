import AsyncStorage from "@react-native-async-storage/async-storage"

export interface IRider {
  id: string
  name: string
}
export const ridersTable = {
  get: async (id: string) => {
    try {
      const jsonRiders = await AsyncStorage.getItem("riders")
      if (!jsonRiders) {
        return []
      }
      const riders = JSON.parse(jsonRiders)
      const thisRider = riders.find((rider: IRider) => rider.id === id)
      return thisRider
    } catch {}
  },
  list: async () => {
    try {
      const jsonRiders = await AsyncStorage.getItem("riders")
      if (!jsonRiders) {
        return []
      }
      const riders = JSON.parse(jsonRiders)
      return riders
    } catch {}
  },
  add: async (rider: IRider) => {
    try {
      const jsonRiders = await AsyncStorage.getItem("riders")
      const existingRiders = jsonRiders ? JSON.parse(jsonRiders) : []
      existingRiders.push(rider)
      await AsyncStorage.setItem("riders", JSON.stringify(existingRiders))
      return rider
    } catch {}
  },
}
