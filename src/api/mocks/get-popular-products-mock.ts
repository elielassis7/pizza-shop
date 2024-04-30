import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Mussarela ', amount: 15 },
    { product: 'Ele e Ela', amount: 22 },
    { product: 'Lombo ', amount: 12 },
    { product: 'Napolitana', amount: 25 },
    { product: '3 queijo', amount: 30 },
  ])
})
