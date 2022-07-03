<template>
    <h1>{{ heading }}</h1>
</template>

<script setup lang="ts">
defineProps({
    heading: {
        type: String,
        default: "Default Heading"
    }
})
</script>