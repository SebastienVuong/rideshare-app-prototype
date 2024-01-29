import {calculateDistance} from "./get-distance"

/**
 *  NOTE: In practice, this rate (and perhaps even the calculation) should be
 *        done on the server; this would be cafer and allow for quicker
 *        iteration since mobile releases cannot be pushed quickly.
 */
const MOCK_PRICE_PER_KM = 1.5

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
