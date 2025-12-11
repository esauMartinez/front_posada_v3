import { raffleApiConnection } from '@/api'
import type { Employee } from '@/interfaces/employe'
import type { ResponseData } from '@/interfaces/response'

export const getEmployees = async (): Promise<Employee[]> => {
  const { data } = await raffleApiConnection.get<Employee[]>('/employess')

  return data
}

export const sendQrEmployee = async (id: number): Promise<ResponseData> => {
  const { data } = await raffleApiConnection.get<ResponseData>(`/send-email-qr/${id}`)
  return data
}
