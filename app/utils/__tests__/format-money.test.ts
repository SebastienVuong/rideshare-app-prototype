import {formatMoney} from "../format-money"

describe("formatMoney", () => {
  it("should format a number as a currency string", () => {
    expect(formatMoney(1234)).toBe("$1,234.00")
  })
})
