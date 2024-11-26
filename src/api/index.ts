import axios from 'axios'

export const url = 'http://192.168.4.5:3000'

export const raffleApiConnection = axios.create({ baseURL: url })
