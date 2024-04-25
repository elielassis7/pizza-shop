import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getMonthOrdersAmount } from '@/api/get-month-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metric-card-skeleton'

export function MouthOrdersAmounthCard() {
  const { data: monthOrderAmount } = useQuery({
    queryFn: getMonthOrdersAmount,
    queryKey: ['metrics', 'month-orders-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="spaca-y-1">
        {monthOrderAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrderAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthOrderAmount.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthOrderAmount.diffFromLastMonth}%
                  </span>
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthOrderAmount.diffFromLastMonth}%
                  </span>
                </>
              )}{' '}
              em relação ao mês passado
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
