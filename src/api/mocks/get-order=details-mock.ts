import { http, HttpResponse } from 'msw'

import {
  GetOrdersDetailsParams,
  GetOrdersDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrdersDetailsParams,
  never,
  GetOrdersDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Jonh Doe',
      email: 'johndoe@example.com',
      phone: '1245678123',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Mussarela' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        product: { name: 'Pizza Napolitana' },
        quantity: 2,
      },
    ],
  })
})
