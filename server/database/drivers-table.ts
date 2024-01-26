import AsyncStorage from "@react-native-async-storage/async-storage"

export enum EDriverStatus {
  AVAILABLE = "available",
  BUSY = "busy",
  OFFLINE = "offline",
}

export interface IDriver {
  id: string
  name: string
  status: EDriverStatus
}

export const driversTable = {
  get: async (id: string) => {
    try {
      const jsonDrivers = await AsyncStorage.getItem("drivers")
      if (!jsonDrivers) {
        return []
      }
      const drivers = JSON.parse(jsonDrivers)
      const thisDriver = drivers.find((driver: IDriver) => driver.id === id)
      return thisDriver
    } catch {}
  },
  list: async () => {
    try {
      const jsonDrivers = await AsyncStorage.getItem("drivers")
      if (!jsonDrivers) {
        return []
      }
      const drivers = JSON.parse(jsonDrivers)
      return drivers
    } catch {}
  },
  add: async (driver: IDriver) => {
    try {
      const jsonDrivers = await AsyncStorage.getItem("drivers")
      const existingDrivers = jsonDrivers ? JSON.parse(jsonDrivers) : []
      existingDrivers.push(driver)
      await AsyncStorage.setItem("drivers", JSON.stringify(existingDrivers))
      return driver
    } catch {}
  },
}
