import {calculateRideDistance} from "../calculate-ride-distance"

describe("calculateRideDistance", () => {
  it("should calculate the distance between two locations", () => {
    expect(calculateRideDistance("123 Main St", "456 Elm St")).toBe(100)
  })
})
