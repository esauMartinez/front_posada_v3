export interface Employee {
  id?: number
  idr?: string
  name: string
  winner?: boolean
  proyecto?: string
  localidad?: string
  isAvailable?: boolean
  isDelivered?: boolean
  gift?: Gift
  qrCode?: string
  emailSended?: boolean
}

export interface Gift {
  id: number
  number_gift: number
  description: string
  isSelected: boolean
}
