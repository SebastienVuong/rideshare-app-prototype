import AsyncStorage from "@react-native-async-storage/async-storage"

export enum ERideStatus {
  REQUESTED = "requested",
  ACCEPTED = "accepted",
  PICKED_UP = "picked_up",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export interface IRide {
  id: string
  rider_id?: string
  driver_id?: string
  pickup_location: string
  dropoff_location: string
  declined_by: string[]
  status: ERideStatus
}

export const ridesTable = {
  get: async (id: string) => {
    try {
      const jsonRides = await AsyncStorage.getItem("rides")
      if (!jsonRides) {
        return []
      }
      const rides = JSON.parse(jsonRides)
      const thisRide = rides.find((ride: IRide) => ride.id === id)
      return thisRide
    } catch {}
  },
  getByDriverId: async (driverId: string) => {
    try {
      const jsonRides = await AsyncStorage.getItem("rides")
      if (!jsonRides) {
        return []
      }
      const rides = JSON.parse(jsonRides)
      const thisRide = rides.find(
        (ride: IRide) =>
          ride.driver_id === driverId &&
          ride.status !== ERideStatus.COMPLETED &&
          ride.status !== ERideStatus.CANCELLED,
      )
      return thisRide
    } catch {}
  },
  getByRiderId: async (riderId: string) => {
    try {
      const jsonRides = await AsyncStorage.getItem("rides")
      if (!jsonRides) {
        return []
      }
      const rides = JSON.parse(jsonRides)
      const thisRide = rides.find(
        (ride: IRide) =>
          ride.rider_id === riderId &&
          ride.status !== ERideStatus.COMPLETED &&
          ride.status !== ERideStatus.CANCELLED,
      )
      return thisRide
    } catch {}
  },
  list: async (driverId?: string) => {
    try {
      const jsonRides = await AsyncStorage.getItem("rides")
      if (!jsonRides) {
        return []
      }
      const rides = JSON.parse(jsonRides)
      const openRides = rides.filter(
        (ride: IRide) =>
          !ride.declined_by.includes(driverId || "") &&
          ride.status !== ERideStatus.COMPLETED &&
          ride.status !== ERideStatus.CANCELLED,
      )
      return openRides
    } catch {}
  },
  add: async (ride: IRide) => {
    try {
      const jsonRides = await AsyncStorage.getItem("rides")
      const existingRides = jsonRides ? JSON.parse(jsonRides) : []
      existingRides.push(ride)
      await AsyncStorage.setItem("rides", JSON.stringify(existingRides))
      return ride
    } catch {}
  },
  update: async (ride: IRide) => {
    try {
      const jsonRides = await AsyncStorage.getItem("rides")
      const existingRides = jsonRides ? JSON.parse(jsonRides) : []
      const rideIndex = existingRides.findIndex((r: IRide) => r.id === ride.id)
      existingRides[rideIndex] = ride
      await AsyncStorage.setItem("rides", JSON.stringify(existingRides))
      return ride
    } catch {}
  },
}
