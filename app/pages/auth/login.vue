<script lang="ts" setup>
const { loggedIn, user, session, fetch, clear } = useUserSession()

async function login(event: Event) {
  const target = event.target as HTMLFormElement

  await $fetch('/api/login', {
    method: 'POST',
    body: {
      email: target.email.value,
      password: target.password.value,
    },
  })
  .then(fetch)
  .then(async () => {
    await navigateTo("/")
  }).catch((err) => {
    console.log(err)
  })
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <TaMaRA />
    <div class="flex flex-col justify-center">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <form  @submit.prevent="login($event)" class="space-y-2">
          <div>
            <label for="email" class="block text-sm/6 font-medium text-gray-600">Адрес электронной почты</label>
            <div class="mt-1">
              <input id="email" type="email" name="email" required autocomplete="email" class="block w-full rounded-md border bg-white/5 px-2 py-1 text-base text-black placeholder:text-gray-500 sm:text-sm/6" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-medium text-gray-600">Пароль</label>
              <div class="text-sm hidden">
                <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
              </div>
            </div>
            <div class="mt-1">
              <input id="password" type="password" name="password" required autocomplete="current-password" class="block w-full rounded-md border bg-white/5 px-2 py-1 text-base text-black placeholder:text-gray-500 sm:text-sm/6" />
            </div>
          </div>

          <div>
            <UButton class="button-taiwanese p-2 w-full">Войти</UButton>
          </div>
          <div class="flex items-center justify-between">
            <div class="block">
              Если у вас ещё нет учётной записи на сайте, воспользуйтесь <NuxtLink class="" to="/auth/register">страницей регистрации</NuxtLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
