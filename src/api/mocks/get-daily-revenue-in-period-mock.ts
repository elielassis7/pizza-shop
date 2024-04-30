import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/02/2024', receipt: 2150 },
    { date: '02/02/2024', receipt: 2480 },
    { date: '03/02/2024', receipt: 1150 },
    { date: '04/02/2024', receipt: 3050 },
    { date: '05/02/2024', receipt: 2950 },
    { date: '06/02/2024', receipt: 2100 },
    { date: '07/02/2024', receipt: 1980 },
  ])
})
