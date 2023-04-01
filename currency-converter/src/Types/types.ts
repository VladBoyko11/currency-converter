export type latestChangeCurrency = {
    cc: string,
    exchangedate: string,
    rate: number,
    txt: string
}
export type currency = {
  base: string,
  date: string,
  rates: {
    EUR: number,
    USD: number
  },
  success: boolean
}