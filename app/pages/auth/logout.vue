<script setup lang="ts">
const { clear } = useUserSession()
await clear()
await navigateTo("/")
</script>

<template>
  <div>
  </div>
</template>