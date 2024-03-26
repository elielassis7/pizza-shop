import { api } from '@/lib/axios'

export interface GetRestaurantResponse {
  id: string
  name: string
  createdAt: Date | null
  updateAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getRestaurant() {
  const response = await api.get<GetRestaurantResponse>('/managed-restaurant')

  return response.data
}
