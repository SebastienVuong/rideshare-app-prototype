/**
 * A function to calculate the distance between two locations.
 *
 * @param pickupLocation - The location where the ride starts.
 * @param dropoffLocation - The location where the ride ends.
 * @returns The distance between the two locations in kilometers.
 */
export const calculateDistance = (
  pickupLocation: string,
  dropoffLocation: string,
) => {
  console.log({pickupLocation, dropoffLocation})
  /**
   *  HACK: A library should be used to convert the locations and compute the
   *        driving trajectory distance rather than the bird-eye distance.
   * */
  return 100
}
