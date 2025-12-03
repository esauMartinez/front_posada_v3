<script setup lang="ts">
import ListEmployees from '@/components/ListEmployees.vue'
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-5">
    <V-Card>
      <template #content>
        <ListEmployees />
      </template>
    </V-Card>
  </div>
</template>

<style scoped></style>
