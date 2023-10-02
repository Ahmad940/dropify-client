<script setup lang="ts">
import CustomInput from '@/components/simple/CustomInput.vue';
import { ref } from 'vue';

const email = ref('')
const password = ref('')

const showPassword = ref<boolean>(false)
const toggleShowPassword = () => { showPassword.value = !showPassword.value }
</script>

<template>
  <div class="login">
    <h1>Log in to Dropify</h1>

    <form>
      <CustomInput type="email" v-model="email" placeholder="Email Address" ariaLabel="Email Address" />
      <CustomInput type="password" v-model="password" placeholder="Password" ariaLabel="Password"
        :showPassword="showPassword" :toggleShowPassword="toggleShowPassword" />
    </form>
  </div>
</template>