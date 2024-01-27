import {ERideStatus, TRide} from "app/types/api-response"

import {endpoints} from "server/endpoints/endpoints"

export const ridesService = {
  getForDriverId: async (driverId: string): Promise<TRide> =>
    await endpoints.ride.get({driverId}),
  getForRiderId: async (riderId: string): Promise<TRide> =>
    await endpoints.ride.get({riderId}),
  pickup: async (rideId: string): Promise<TRide> =>
    await endpoints.ride.update({id: rideId, status: ERideStatus.PICKED_UP}),
  dropoff: async (rideId: string): Promise<TRide> =>
    await endpoints.ride.update({id: rideId, status: ERideStatus.COMPLETED}),
  cancel: async (rideId: string): Promise<TRide> =>
    await endpoints.ride.update({id: rideId, status: ERideStatus.CANCELLED}),
  getAvailable: async (): Promise<TRide[]> => await endpoints.ride.list(),
}
