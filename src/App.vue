<template>
  <div
    class="mx-auto min-h-screen max-w-6xl px-8 py-8 lg:grid lg:grid-cols-2 lg:items-center lg:px-8"
  >
    <header class="flex flex-col items-center lg:flex-row lg:items-center lg:pr-16">
      <img alt="Vue logo" class="mb-8 block size-31.25 lg:mr-8 lg:mb-0" src="@/assets/logo.svg" />

      <div class="flex w-full flex-col items-center lg:items-start">
        <HelloWorld msg="You did it!" />

        <div class="mt-8 flex w-full items-center justify-center gap-2 lg:justify-start">
          <nav class="flex items-center">
            <RouterLink :class="navLinkClass" to="/">Home</RouterLink>
            <RouterLink :class="navLinkClass" to="/about">About</RouterLink>
          </nav>

          <button
            type="button"
            class="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-vue-green dark:text-slate-300 dark:hover:bg-slate-800"
            @click="toggleDark()"
          >
            {{ isDark ? 'Light' : 'Dark' }}
          </button>
        </div>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { RouterLink, RouterView } from 'vue-router';

import { tw } from '@/utils/tailwind.ts';

import HelloWorld from './components/HelloWorld.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const navLinkClass = tw(
  'rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-vue-green dark:text-slate-300 dark:hover:bg-slate-800 [&.router-link-exact-active]:text-vue-green',
);
</script>
