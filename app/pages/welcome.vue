<script lang="ts" setup>
const { loggedIn, user, session, fetch, clear } = useUserSession()

async function updateSession() {
  if (loggedIn) {
    console.log('Надо бы обновить сессию', new Date())
    try {
      await $fetch('/api/session/update', {
        method: 'GET',
      })
      await fetch()
      console.log(session.value)
    }
    catch(err) {
      console.log(err)
    }
  }
  setTimeout(updateSession, 10 * 1000)
}

await updateSession()
</script>

<template>
  <div class="flex flex-col gap-4">
      <TaMaRA />
      <div class="flex w-full">
        <div class="flex flex-col w-full gap-y-2" v-if="loggedIn && user && session">
          <div class="w-full text-center">Добро пожаловать, {{ user.name ?? "" }}!</div>
          <UButton class="button-taiwanese p-2" to="/game/current" v-if="session.currentGame">Вернуться в игру</UButton>
          <UButton class="button-taiwanese p-2" to="/game/create" v-else>Начать игру</UButton>
          <UButton class="button-taiwanese p-2" to="/auth/logout">Выйти</UButton>
        </div>
        <div class="flex flex-col w-full gap-y-1 text-center" v-else>
          <UButton class="button-taiwanese p-2" to="/auth/login">Войти</UButton>
          <UButton class="button-taiwanese p-2" to="/auth/register">Зарегистрироваться</UButton>
        </div>
      </div>
    </div>
</template>
