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
