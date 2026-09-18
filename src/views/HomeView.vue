<template>
  <main>
    <section class="mb-8 rounded-xl border border-slate-200 p-4 dark:border-slate-800">
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Pinia counter:
        <span class="font-medium text-slate-900 dark:text-slate-100">{{ count }}</span> (double:
        {{ doubleCount }})
      </p>
      <button
        type="button"
        class="mt-3 rounded-md bg-vue-green px-3 py-1.5 text-sm font-medium text-white transition hover:bg-vue-green-dark"
        @click="counter.increment()"
      >
        Increment
      </button>
    </section>

    <TheWelcome />
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useCounterStore } from '@/stores/counter';

import TheWelcome from '../components/TheWelcome.vue';

const counter = useCounterStore();
const { count, doubleCount } = storeToRefs(counter);
</script>
