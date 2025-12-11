import axios from 'axios'

export const url = 'https://recawi.com.mx'
export const urlsocket = 'wss://recawi.com.mx'

export const raffleApiConnection = axios.create({ baseURL: `${url}/api-posada-cdmx` })
