<template>
  <div>
    <h1 :class="titleClass">{{ msg }}</h1>
    <h3 class="text-center text-xl text-slate-600 lg:text-left dark:text-slate-300">
      You’ve successfully created a project with
      <a
        href="https://vite.dev/"
        target="_blank"
        rel="noopener"
      >
        Vite
      </a>
      +
      <a
        href="https://vuejs.org/"
        target="_blank"
        rel="noopener"
      >
        Vue 3
      </a>
      . What's next?
    </h3>
  </div>
</template>

<script setup lang="ts">
import { tw } from '@/utils/tailwind';

defineProps<{
  msg: string;
}>();

const titleClass = tw(
  'relative -top-2.5 text-center text-[2.6rem] font-medium text-vue-green lg:text-left'
);
</script>
