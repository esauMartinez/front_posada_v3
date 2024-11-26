import { raffleApiConnection } from '@/api'
import type { ResponseData } from '@/interfaces/response'

export const deliverGift = async (idr: string | undefined): Promise<ResponseData> => {
  const { data } = await raffleApiConnection.post<ResponseData>(`/deliver`, { idr })

  return data
}
