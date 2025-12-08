import { raffleApiConnection } from '@/api'

export const selectWinner = async (): Promise<string> => {
  const { data } = await raffleApiConnection.get<string>(`/selectWinner`)

  return data
}
