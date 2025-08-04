<script setup lang="ts">
defineProps<{
  logo: object
}>()

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>

<template>
  <NuxtImg
    :src="isDark ? logo.dark : logo.light"
    :alt="logo.alt"
  />
</template>
