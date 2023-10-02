<script setup lang="ts">
import { RiEyeFill } from "vue-remix-icons"

type TextOrEmailInputProps = {
  type: 'text' | 'email'
}

type PasswordInputProps = {
  type: 'password'
  showPassword: boolean
  toggleShowPassword: () => void
}

type InputProps = {
  modelValue: string
  placeholder?: string
  ariaLabel: string
} & (TextOrEmailInputProps | PasswordInputProps)

defineProps<InputProps>()

defineEmits<{
  (e: 'update:modelValue', modelValue: string): void
}>()
</script>

<template>
  <div class="relative">
    <input :type="(type === 'password' && showPassword) ? 'text' : type" :placeholder="placeholder"
      :aria-label="ariaLabel" :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)" />

    <button v-if="type === 'password'">
      <ri-eye-fill />
    </button>
  </div>
</template>