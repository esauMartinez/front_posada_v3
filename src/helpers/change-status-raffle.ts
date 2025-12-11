import { raffleApiConnection } from '@/api'
import type { Raffle } from '@/interfaces/raffle'

export const changeStatusRaffle = async (): Promise<Raffle> => {
  const { data } = await raffleApiConnection.get<Raffle>(`/changeStatusRaffle`)

  return data
}
