<script lang="ts" setup>
const { loggedIn, user, session, fetch, clear } = useUserSession()

if (loggedIn) {
  await fetch()
  console.log(session.value)
} else {
  navigateTo('/')
}
</script>


<template>
  <div>
    2222
  </div>
</template>>