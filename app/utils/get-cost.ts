import {calculateDistance} from "./get-distance"

/**
 *  NOTE: In practice, this rate (and perhaps even the calculation) should be
 *        done on the server; this would be cafer and allow for quicker
 *        iteration since mobile releases cannot be pushed quickly.
 */
const MOCK_PRICE_PER_KM = 1.5

/**
 * A function to calculate the price of a ride based on the distance between
 * the pickup and dropoff locations.
 *
 * @param pickupLocation - The location where the ride starts.
 * @param dropoffLocation - The location where the ride ends.
 * @returns The price of the ride in dollars.
 */
export const calculateRidePrice = ({
  pickupLocation,
  dropoffLocation,
}: {
  pickupLocation: string
  dropoffLocation: string
}) => {
  if (!pickupLocation || !dropoffLocation) {
    return 0
  }
  const distance = calculateDistance(pickupLocation, dropoffLocation)
  return distance * MOCK_PRICE_PER_KM
}
