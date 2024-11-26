<script setup lang="ts">
import { useSocketState } from './stores/socket'
const socketState = useSocketState()
socketState.connect()
</script>

<template>
  <RouterView />
</template>

<style lang="scss" scoped></style>
