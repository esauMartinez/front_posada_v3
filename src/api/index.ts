import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL
const apiUrlSocket = import.meta.env.VITE_API_URL_SOCKET

export const url = apiUrl
export const urlsocket = apiUrlSocket

export const raffleApiConnection = axios.create({ baseURL: url })
