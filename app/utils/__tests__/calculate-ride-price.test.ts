import {calculateRidePrice} from "../calculate-ride-price"

describe("calculateRidePrice", () => {
  it("should calculate the price of a ride, given 2 locations", () => {
    expect(
      calculateRidePrice({
        pickupLocation: "123 Main St",
        dropoffLocation: "456 Elm St",
      }),
    ).toBe(150)
  })
})
