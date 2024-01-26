import {useEffect} from "react"

import {ERideStatus} from "./database/rides-table"
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
    pickup_location: "Pickup Location 1",
    dropoff_location: "Dropoff Location 1",
    declined_by: [],
    status: ERideStatus.REQUESTED,
  })
  await endpoints.ride.create({
    pickup_location: "Pickup Location 2",
    dropoff_location: "Dropoff Location 2",
    declined_by: [],
    status: ERideStatus.REQUESTED,
  })
  await endpoints.ride.create({
    pickup_location: "Pickup Location 3",
    dropoff_location: "Dropoff Location 3",
    declined_by: [],
    status: ERideStatus.REQUESTED,
  })
}

export const useInitializeMockTables = () => {
  useEffect(() => {
    initializeRiders()
    initializeDrivers()
    initializeRides()
  })
}
