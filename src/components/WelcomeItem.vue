<template>
  <div class="mt-8 flex gap-4 lg:mt-0 lg:py-4">
    <div
      class="flex size-8 shrink-0 items-center justify-center text-slate-700 lg:size-12 lg:rounded-lg lg:border lg:border-slate-200 lg:bg-white dark:text-slate-200 dark:lg:border-slate-700 dark:lg:bg-slate-900"
    >
      <slot name="icon"></slot>
    </div>
    <div class="min-w-0 flex-1">
      <h3 class="mb-1 text-lg font-medium text-slate-800 dark:text-slate-100">
        <slot name="heading"></slot>
      </h3>
      <div class="text-sm leading-6 text-slate-600 dark:text-slate-400">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
