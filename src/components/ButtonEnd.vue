<script setup lang="ts"></script>
<template>
  <div class="fixed-end">
    <button class="rounded-button-end animate__animated animate__bounce animate__infinite">
      <i class="lni lni-arrow-downward text-4xl text-white"></i>
    </button>
  </div>
</template>

<style scoped>
.fixed-end {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 20px;
  z-index: 20;
}

.rounded-button-end {
  background-color: rgb(243, 148, 23);
  border-radius: 50%;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
