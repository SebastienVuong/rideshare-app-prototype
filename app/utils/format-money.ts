/**
 * Format a number as a currency string
 *
 * @param amount - The amount to format
 * @returns The formatted currency string
 */
export const formatMoney = (amount: number) => {
  return amount.toLocaleString("en-CA", {style: "currency", currency: "CAD"})
}
