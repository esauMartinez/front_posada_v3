import { raffleApiConnection } from '@/api'
import type { Raffle } from '@/interfaces/raffle'

export const getRaffle = async (): Promise<Raffle> => {
  const { data } = await raffleApiConnection.get<Raffle>(`/raffle`)

  return data
}
