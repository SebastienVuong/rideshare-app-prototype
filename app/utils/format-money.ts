export const formatMoney = (amount: number) => {
  return amount.toLocaleString("en-CA", {style: "currency", currency: "CAD"})
}
