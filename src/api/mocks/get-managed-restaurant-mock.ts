import { http, HttpResponse } from 'msw'

import { GetRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    managerId: 'c©ustom-user-id',
    name: 'Pizza shop',
    description: 'managed custom restaurant...',
    createdAt: new Date(),
    updateAt: null,
  })
})
