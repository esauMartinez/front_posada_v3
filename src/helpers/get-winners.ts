import { raffleApiConnection } from '@/api'
import type { Employee } from '@/interfaces/employe'

export const getWinners = async (): Promise<Employee[]> => {
  const { data } = await raffleApiConnection.get<Employee[]>(`/winners`)

  return data
}
