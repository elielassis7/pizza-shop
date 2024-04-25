import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getDayOrdersAmount } from '@/api/get-day-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metric-card-skeleton'

export function DayOrdersAmounthCard() {
  const { data: dayOrderAmount } = useQuery({
    queryFn: getDayOrdersAmount,
    queryKey: ['metrics', 'day-orders-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita Total (dia)
        </CardTitle>
        <Utensils className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="spaca-y-1">
        {dayOrderAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrderAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {dayOrderAmount.diffFromYesterday >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {dayOrderAmount.diffFromYesterday}%
                  </span>
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {dayOrderAmount.diffFromYesterday}%
                  </span>
                </>
              )}{' '}
              em relação a ontem
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
