<script setup lang="ts">
import { ref } from "vue";
import RiEyeCloseFill from "vue-remix-icons/icons/ri-eye-close-fill.vue";
import RiEyeFill from "vue-remix-icons/icons/ri-eye-fill.vue";

type InputProps = {
  type: 'text' | 'email' | 'password'
  modelValue: string
  ariaLabel: string
  autocomplete?: string
  placeholder?: string
  class?: string
}

defineProps<InputProps>()
defineEmits<{
  (e: 'update:modelValue', modelValue: string): void
}>()

const showPassword = ref<boolean>(false)
const toggleShowPassword = () => { showPassword.value = !showPassword.value }
</script>

<template>
  <div class="relative">
    <input
      class="px-2 py-3 rounded-md text-white outline outline-1 outline-slate-400 hover:outline-slate-100 focus:shadow-[0px_0px_0px_2px] transition-shadow duration-700 focus:shadow-slate-300 bg-transparent"
      :class="class" :type="((type === 'password') && showPassword) ? 'text' : type"
      :placeholder="placeholder"
      :aria-label="ariaLabel"
      :value="modelValue"
      :autocomplete="autocomplete"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)" />

    <button type="button" v-if="type === 'password'" @click.stop="toggleShowPassword"
      class="fill-black dark:fill-slate-50 absolute right-2 top-1/2 -translate-y-1/2 bottom-0 w-6 h-6"
      :title="showPassword ? 'Hide Password' : 'Reveal Password'">
      <ri-eye-close-fill v-if="showPassword" />
      <ri-eye-fill v-else />
    </button>
  </div>
</template>