<script lang="ts" setup>
const { loggedIn, user, session, fetch, clear } = useUserSession()
</script>

<template>
  <div class="flex flex-col gap-4">
      <TaMaRA />
      <div class="flex w-full">
        <div class="flex flex-col w-full gap-y-2" v-if="loggedIn && user && session">
          <div class="w-full text-center">Добро пожаловать, {{ user.name ?? "" }}!</div>
          <NuxtLink class="w-full button rounded-md button-taiwanese p-2 text-center" to="/auth/logout">Выйти</NuxtLink>
        </div>
        <div class="flex flex-col w-full gap-y-1" v-else>
          <NuxtLink class="button rounded-md button-taiwanese p-2 text-center" to="/auth/login">Войти</NuxtLink>
          <NuxtLink class="button rounded-md button-taiwanese p-2 text-center" to="/auth/register">Зарегистрироваться</NuxtLink>
        </div>
      </div>
    </div>
</template>
