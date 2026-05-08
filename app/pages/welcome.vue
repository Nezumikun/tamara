<script lang="ts" setup>
const { loggedIn, user, session, fetch, clear } = useUserSession()
console.log(user)
</script>

<template>
  <div class="flex flex-col gap-4">
      <TaMaRA />
      <div>
        <div v-if="loggedIn && user && session">
          <h1>Welcome {{ user }}!</h1>
          <p>Logged in since {{ session.loggedInAt }}</p>
          <button @click="clear">Logout</button>
        </div>
        <div class="flex flex-col gap-y-1" v-else>
          <NuxtLink class="button rounded bg-blue-300 p-2 text-center" to="/auth/login">Войти</NuxtLink>
          <NuxtLink class="button rounded bg-blue-300 p-2 text-center" to="/auth/register">Зарегистрироваться</NuxtLink>
        </div>
      </div>
    </div>
</template>
