<template>
  <NuxtLayout :name="layout">
    <b>some page content</b>
  </NuxtLayout>
  <button @click="enableCustomLayout('default')">Light Mode</button>
  <button @click="enableCustomLayout('dark-layout')">Dark Mode</button>
</template>

<script setup lang="ts">
// You might choose this based on an API call or logged-in status
const layout = ref("default");

function enableCustomLayout (_layout: string) {
   layout.value = _layout;
}
</script>
