export const roundNumber = (num: number, decimalPlaces: number): number => {
  const factorOfTen = Math.pow(10, decimalPlaces)
  return Math.round(num * factorOfTen) / factorOfTen
}
