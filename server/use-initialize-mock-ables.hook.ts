import {useEffect} from "react"

// import AsyncStorage from "@react-native-async-storage/async-storage"

import {endpoints} from "./endpoints/endpoints"

const initializeRiders = async () => {
  const riders = await endpoints.rider.list()
  if (riders?.length) {
    return
  }

  await endpoints.rider.create({name: "Rider 1"})
  await endpoints.rider.create({name: "Rider 2"})
  await endpoints.rider.create({name: "Rider 3"})
}
const initializeDrivers = async () => {
  const drivers = await endpoints.driver.list()
  if (drivers?.length) {
    return
  }

  await endpoints.driver.create({name: "Driver 1"})
  await endpoints.driver.create({name: "Driver 2"})
  await endpoints.driver.create({name: "Driver 3"})
}

const initializeRides = async () => {
  const rides = await endpoints.ride.list()
  if (rides?.length) {
    return
  }

  await endpoints.ride.create({
    rider_id: "0",
    pickup_location: "Pickup Location 1",
    dropoff_location: "Dropoff Location 1",
  })
  await endpoints.ride.create({
    rider_id: "1",
    pickup_location: "Pickup Location 2",
    dropoff_location: "Dropoff Location 2",
  })
  await endpoints.ride.create({
    rider_id: "2",
    pickup_location: "Pickup Location 3",
    dropoff_location: "Dropoff Location 3",
  })
}

export const useInitializeMockTables = () => {
  useEffect(() => {
    // AsyncStorage.clear()
    initializeRiders()
    initializeDrivers()
    initializeRides()
  })
}
