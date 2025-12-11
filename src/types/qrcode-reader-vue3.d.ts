declare module 'qrcode-reader-vue3' {
  import { DefineComponent } from 'vue'

  export const QrcodeStream: DefineComponent<{
    onDecode?: (result: string) => void
    onInit?: (promise: Promise<void>) => void
    track?: (detectedCodes: any[], ctx: CanvasRenderingContext2D) => void
  }>

  export const QrcodeDropZone: DefineComponent<{
    onDecode?: (result: string) => void
  }>

  export const QrcodeCapture: DefineComponent<{
    onDecode?: (result: string) => void
  }>
}
