<template>
  <div class="dark-layout">
    <h1>This is the dark Layout</h1>
    <slot />
    <component :is="MyInputButton" />
  </div>
</template>

<script setup lang="ts">
const MyInputButton = resolveComponent('BaseFooBarInput');
</script>

<style lang="scss">
.dark-layout {
    background: black;
    color: white;
}
</style>