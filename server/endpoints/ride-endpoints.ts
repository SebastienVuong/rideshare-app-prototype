import {database} from "server/database/database"
import {ERideStatus, IRide} from "server/database/rides-table"

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
  create: async (ride: Omit<IRide, "id">) => {
    const rides = await database.rides.list()
    return await database.rides.add({
      id: rides.length.toString(),
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
  list: async (driverId?: string) => {
    const rides = await database.rides.list(driverId)
    return rides
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
