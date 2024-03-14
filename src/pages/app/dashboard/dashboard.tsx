import { Helmet } from 'react-helmet-async'

import { DayOrdersAmounthCard } from './day-orders-amouth-card'
import { MouthCancelOrdersAmounthCard } from './mounth-cancel-orders-amounth-card'
import { MouthOrdersAmounthCard } from './mouth-orders-amounth-card'
import { MouthRevenueCard } from './mouth-revenue-card'
import { PopularProductsChart } from './popular-product-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MouthRevenueCard />
          <MouthOrdersAmounthCard />
          <DayOrdersAmounthCard />
          <MouthCancelOrdersAmounthCard />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
