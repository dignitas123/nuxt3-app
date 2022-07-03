<template>
  <div>
    Some default layout shared across all pages
    <slot />
    <LazyAtomsHeading v-if="bro" />
  </div>
</template>

<script setup lang="ts">
const bro = ref(true);
</script>