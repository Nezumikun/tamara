<script lang="ts" setup>
import * as z from 'zod'
const { fetch } = useUserSession()

import type { FormError, FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  email: z.email('Неправильный e-mail'),
  password: z.string('Обязательное поле').min(8, 'Должно быть не меньше 8 символов')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined
})

const toast = useToast()

async function login(event: FormSubmitEvent<Schema>) {
  console.log(event)
  const target = event.target as HTMLFormElement

  try {
    await $fetch('/api/login', {
      method: 'POST',
      body: {
        email: target.email.value,
        password: target.password.value,
      },
    })
    await fetch()
    await navigateTo("/")
  } 
  catch(err) {
    console.log('Ошибка входа', err)
    toast.add({ title: "Ошибка", description: "Неправильный логин или пароль", color: 'error', duration: 2000 })
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <TaMaRA />
    <div class="flex flex-col justify-center">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <UForm :schema="schema" :state="state" @submit.prevent="login($event)" class="space-y-2">
          <UFormField label="Адрес электронной почты" name="email">
            <UInput v-model="state.email" type="email" required autocomplete="email" class="w-full"/>
          </UFormField>
          <UFormField label="Пароль" name="password">
            <UInput v-model="state.password" type="password" required autocomplete="current-password" class="w-full" />
          </UFormField>
          <UButton class="button-taiwanese p-2 w-full" type="submit">Войти</UButton>
          <div class="flex items-center justify-between">
            <div class="block text-sm">
              Если у вас ещё нет учётной записи на сайте, воспользуйтесь <NuxtLink class="" to="/auth/register">страницей регистрации</NuxtLink>
            </div>
          </div>
        </UForm>
      </div>
    </div>
  </div>
</template>
