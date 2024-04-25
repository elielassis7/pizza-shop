import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metric-card-skeleton'

export function MouthCancelOrdersAmounthCard() {
  const { data: monthCanceledOrderAmount } = useQuery({
    queryFn: getMonthCanceledOrdersAmount,
    queryKey: ['metrics', 'month-canceled-orders-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="spaca-y-1">
        {monthCanceledOrderAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledOrderAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthCanceledOrderAmount.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthCanceledOrderAmount.diffFromLastMonth}%
                  </span>
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    +{monthCanceledOrderAmount.diffFromLastMonth}%
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
