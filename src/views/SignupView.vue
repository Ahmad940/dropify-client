<script setup lang="ts">
import Button from '@/components/simple/Button.vue'
import Input from '@/components/simple/Input.vue'
import { Notify } from 'notiflix'
import { ref } from 'vue'
import RiArrowRightLine from 'vue-remix-icons/icons/ri-arrow-right-line.vue'
import { useRouter } from 'vue-router'

import authRequests from '@/utils/apiRequests/auth.request'

const router = useRouter()

const username = ref('')
const password = ref('')

const loading = ref(false)

const signup = async () => {
  if (!username.value || !password.value) {
    Notify.failure('Please fill in all fields')
    return
  }

  if (username.value && password.value) {
    loading.value = true
    const response = await authRequests().signUp({
      username: username.value,
      password: password.value
    })
    loading.value = false

    if (response.success) {
      Notify.success('Signup successful')
      router.push('/dashboard')
    } else Notify.failure(response.message)
  }
}
</script>

<template>
  <div class="min-h-screen grid place-items-center">
    <div>
      <h1 class="text-3xl text-center font-black mb-5 max-w-[20ch]">Create your Dropify account</h1>

      <form class="grid gap-3" @submit.prevent="signup">
        <Input
          type="text"
          v-model="username"
          placeholder="Username"
          ariaLabel="Username"
          required
        />
        <Input
          type="password"
          v-model="password"
          placeholder="Password"
          ariaLabel="Password"
          required
        />

        <Button :loading="loading" type="submit" class="mt-2">Submit</Button>

        <span class="mt-2 text-center">
          Already have an account?
          <RouterLink
            to="/auth/login"
            class="underline transition-colors duration-500 text-blue-600 hover:text-blue-800 dark:hover:text-blue-300 [&>svg]:hover:fill-blue-800 [&>svg]:dark:hover:fill-blue-300"
          >
            Login
            <ri-arrow-right-line
              class="transition-colors duration-500 fill-blue-600 inline w-4 h-4"
            />
          </RouterLink>
        </span>
      </form>
    </div>
  </div>
</template>
@/utils/apiRequests/auth.request
