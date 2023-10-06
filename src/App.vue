<script setup lang="ts">
import RiMoonFill from 'vue-remix-icons/icons/ri-moon-fill.vue'
import RiSunFill from 'vue-remix-icons/icons/ri-sun-fill.vue'
import { RouterView } from 'vue-router'

import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

// onBeforeMount(() => setTheme())
</script>

<template>
  <header>
    <button
      @click="toggleDark()"
      :aria-label="'Switch to ' + (isDark ? 'dark' : 'light') + ' theme'"
      class="absolute top-5 right-5 rounded-lg border border-black dark:border-white transition-transform hover:scale-105 focus-visible:scale-105"
    >
      <ri-sun-fill v-if="isDark" class="w-10 aspect-square p-2 fill-white" aria-hidden />
      <ri-moon-fill v-else class="w-10 aspect-square p-2" aria-hidden />
    </button>
  </header>

  <main>
    <RouterView />
  </main>

  <footer></footer>
</template>
