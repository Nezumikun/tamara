<script lang="ts" setup>
const { loggedIn, user, session, fetch, clear } = useUserSession()

if (loggedIn) {
  navigateTo(`/game/${session.value?.currentGame.uuid}`)
} else {
  navigateTo('/')
}
</script>


<template>
  <div class="text-center">
  </div>
</template>>