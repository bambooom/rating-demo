// record count for each star rating
export interface RateData {
  r1: number,
  r2: number,
  r3: number,
  r4: number,
  r5: number,
}

export interface CurrentRate {
  rate: number,
  total: number;
  rounded: number;
}
