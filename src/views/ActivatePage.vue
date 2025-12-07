<script setup lang="ts">
import { ref } from 'vue'
import { QrcodeStream } from 'qrcode-reader-vue3'
import { useUpdate } from '@/composables/useUpdate'

const result = ref('')
const loading = ref(true)
const cameraAllowed = ref(true)

const { updateEmployeeFunctionId } = useUpdate()

const onDecode = (decodedString) => {
  updateEmployeeFunctionId(+result.value)
  result.value = decodedString
  // Opcional: vibrar el celular al escanear
  if (navigator.vibrate) {
    navigator.vibrate(200)
  }
}

const onInit = async (promise) => {
  try {
    await promise
    loading.value = false
    cameraAllowed.value = true
  } catch (error) {
    loading.value = false
    if (error.name === 'NotAllowedError') {
      cameraAllowed.value = false
      alert('Por favor permite el acceso a la cámara')
    } else if (error.name === 'NotFoundError') {
      alert('No se encontró cámara en tu dispositivo')
    } else if (error.name === 'NotReadableError') {
      alert('La cámara está siendo usada por otra aplicación')
    } else {
      alert('Error al acceder a la cámara: ' + error.message)
    }
  }
}

// Dibuja un cuadro alrededor del QR detectado
const paintBoundingBox = (detectedCodes, ctx) => {
  for (const detectedCode of detectedCodes) {
    const { boundingBox } = detectedCode
    ctx.lineWidth = 2
    ctx.strokeStyle = '#00ff00'
    ctx.strokeRect(boundingBox.x, boundingBox.y, boundingBox.width, boundingBox.height)
  }
}
</script>

<template>
  <div class="qr-scanner">
    <h2>Escanear QR</h2>

    <div v-if="!cameraAllowed" class="warning">⚠️ Necesitas permitir el acceso a la cámara</div>

    <qrcode-stream @decode="onDecode" @init="onInit" :track="paintBoundingBox" class="qr-video">
      <div v-if="loading" class="loading">📷 Iniciando cámara...</div>
    </qrcode-stream>

    <div v-if="result" class="result">
      <h3>✅ Código escaneado:</h3>
      <p>{{ result }}</p>
      <button @click="result = ''">Escanear otro</button>
    </div>
  </div>
</template>

<style scoped>
.qr-scanner {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.qr-video {
  width: 100%;
  max-width: 500px;
  border: 3px solid #007bff;
  border-radius: 10px;
  overflow: hidden;
}

.loading {
  text-align: center;
  padding: 50px;
  font-size: 18px;
}

.result {
  margin-top: 20px;
  padding: 20px;
  background: #d4edda;
  border-radius: 8px;
  word-break: break-all;
}

.warning {
  padding: 15px;
  background: #fff3cd;
  border-radius: 5px;
  margin-bottom: 15px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
