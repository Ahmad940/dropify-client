<script setup lang="ts">
import CustomButton from '@/components/simple/CustomButton.vue';
import CustomInput from '@/components/simple/CustomInput.vue';
import { ref } from 'vue';

const email = ref('')
const password = ref('')

const login = () => {
  console.log('wee')
}
</script>

<template>
  <div class="min-h-screen grid place-items-center justify-center">
    <div>
      <h1 class="text-3xl text-center font-black mb-5">Log in to Dropify</h1>
      
      <form class="grid gap-3" @submit.prevent="login">
        <CustomInput type="email" v-model="email" placeholder="Email Address" ariaLabel="Email Address" />
        <CustomInput type="password" v-model="password" placeholder="Password" ariaLabel="Password" />
        
        <CustomButton class="mt-2">Submit</CustomButton>
      </form>
    </div>
  </div>
</template>