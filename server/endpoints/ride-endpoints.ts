import {database} from "server/database/database"
import {ERideStatus, IRide} from "server/database/rides-table"
import {getDistance} from "server/utils/get-distance"

const ACCEPTABLE_DISTANCE_TO_PICKUP = 10

interface IRideByRiderIdArgs {
  riderId: Pick<IRide, "rider_id">["rider_id"]
  driverId?: never
}
interface IRideByDriverIdArgs {
  riderId?: never
  driverId: Pick<IRide, "driver_id">["driver_id"]
}
type IRideByIdArgs = IRideByRiderIdArgs | IRideByDriverIdArgs

export const rideEndpoints = {
  create: async (ride: Omit<IRide, "id" | "declined_by" | "status">) => {
    const rides = await database.rides.list()
    return await database.rides.add({
      id: rides.length.toString(),
      declined_by: [],
      status: ERideStatus.REQUESTED,
      ...ride,
    })
  },
  get: async ({driverId, riderId}: IRideByIdArgs) => {
    if (driverId) {
      return await database.rides.getByDriverId(driverId)
    }
    if (riderId) {
      return await database.rides.getByRiderId(riderId)
    }
  },
  list: async ({
    driverId,
    driverLocation,
  }: {
    driverId?: string
    driverLocation?: string
  }) => {
    const rides = await database.rides.list(driverId)
    if (!driverId || !driverLocation) {
      return rides
    }
    const nearbyRides = rides.filter((ride: IRide) => {
      const distanceToPickup = getDistance({
        departure: driverLocation,
        arrival: ride.pickup_location,
      })
      return distanceToPickup < ACCEPTABLE_DISTANCE_TO_PICKUP
    })
    return nearbyRides
  },
  accept: async ({id, driver_id}: Pick<IRide, "id" | "driver_id">) => {
    const ride = await database.rides.get(id)
    const updatedRide = {
      ...ride,
      driver_id,
      status: ERideStatus.ACCEPTED,
    }
    await database.rides.update(updatedRide)
    return updatedRide
  },
  decline: async ({id, driver_id}: Pick<IRide, "id" | "driver_id">) => {
    const ride = await database.rides.get(id)
    ride.declined_by.push(driver_id)
    await database.rides.update(ride)
    return ride
  },
  update: async ({id, status}: Pick<IRide, "id" | "status">) => {
    const ride = await database.rides.get(id)
    const updatedRide = {...ride, status}
    await database.rides.update(updatedRide)
    return updatedRide
  },
}
