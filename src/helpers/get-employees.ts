import { raffleApiConnection } from '@/api'
import type { Employee } from '@/interfaces/employe'

export const getEmployees = async (): Promise<Employee[]> => {
  const { data } = await raffleApiConnection.get('/employess')

  return data
}
