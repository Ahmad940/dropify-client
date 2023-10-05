<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import RiMoonFill from 'vue-remix-icons/icons/ri-moon-fill.vue';
import RiSunFill from 'vue-remix-icons/icons/ri-sun-fill.vue';
import { RouterView } from 'vue-router';

const currentTheme = ref<'light' | 'dark'>('light')

const toggleTheme = () => {
  localStorage.theme === "dark" ? localStorage.theme = "light" : localStorage.theme = "dark"

  setTheme()
}

const setTheme = () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    currentTheme.value = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    currentTheme.value = 'light'
  }
}

onBeforeMount(() => setTheme())
</script>

<template>
  <header>
    <button @click="toggleTheme" :aria-label="'Switch to ' + (currentTheme === 'dark' ? 'light' : 'dark') + ' theme'"
      class="absolute top-5 right-5 rounded-lg border border-black dark:border-white transition-transform  hover:scale-105 focus-visible:scale-105">
      <ri-sun-fill v-if="currentTheme === 'dark'" class="w-10 aspect-square p-2 fill-white" aria-hidden />
      <ri-moon-fill v-else class="w-10 aspect-square p-2" aria-hidden />
    </button>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
  </footer>
</template>
