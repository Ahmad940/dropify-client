<script setup lang="ts">
defineProps<{
  type: 'button' | 'reset' | 'submit'
  class?: string
}>()
</script>

<template>
  <button :type="type" class="px-2 py-3 rounded-md text-black bg-slate-50 font-medium" :class="class">
    <slot></slot>
  </button>
</template>