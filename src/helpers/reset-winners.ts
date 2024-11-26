import { raffleApiConnection } from '@/api'
import type { ResponseData } from '@/interfaces/response'

export const resetWinners = async (): Promise<ResponseData> => {
  const { data } = await raffleApiConnection.get<ResponseData>(`/resetWinners`)

  return data
}
