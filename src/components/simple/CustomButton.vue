<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <button class="px-2 py-3 rounded-md text-black bg-slate-50 font-medium" :class="class">
    <slot></slot>
  </button>
</template>