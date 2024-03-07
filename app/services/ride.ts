import {ERideStatus, TRide} from "app/types/api-response"

import {endpoints} from "server/endpoints/endpoints"

export const ridesService = {
  getForDriverId: async (driverId: string): Promise<TRide> =>
    await endpoints.ride.get({driverId}),
  getForRiderId: async (riderId: string): Promise<TRide> =>
    await endpoints.ride.get({riderId}),
  accept: async ({
    rideId,
    driverId,
  }: {
    rideId: string
    driverId: string
  }): Promise<TRide> =>
    await endpoints.ride.accept({
      id: rideId,
      driver_id: driverId,
    }),
  decline: async ({
    rideId,
    driverId,
  }: {
    rideId: string
    driverId: string
  }): Promise<TRide> =>
    await endpoints.ride.decline({
      id: rideId,
      driver_id: driverId,
    }),
  pickup: async (rideId: string): Promise<TRide> =>
    await endpoints.ride.update({id: rideId, status: ERideStatus.PICKED_UP}),
  dropoff: async (rideId: string): Promise<TRide> =>
    await endpoints.ride.update({id: rideId, status: ERideStatus.COMPLETED}),
  cancel: async (rideId: string): Promise<TRide> =>
    await endpoints.ride.update({id: rideId, status: ERideStatus.CANCELLED}),
  getAvailable: async (driverId: string): Promise<TRide[]> =>
    await endpoints.ride.list({driverId}),
  request: async ({
    riderId,
    pickupLocation,
    dropoffLocation,
  }: {
    riderId: string
    pickupLocation: string
    dropoffLocation: string
  }): Promise<TRide | undefined> =>
    await endpoints.ride.create({
      rider_id: riderId,
      pickup_location: pickupLocation,
      dropoff_location: dropoffLocation,
    }),
}
