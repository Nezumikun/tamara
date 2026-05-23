<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const { loggedIn, user } = useUserSession()


const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Выйти',
  to: '/auth/logout'
}])
</script>

<template>
  <div>
      <UHeader class="taiwanese-header">
        <template #title>
          <ULink to="/">台 TaMaRA</ULink>
        </template>
        <UNavigationMenu :items="items" />

        <template #right>
          <UAvatar
            :alt="user?.fullName"
            v-if="loggedIn"
          />
        </template>

        <template #body>
          <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
        </template>      
      </UHeader>
      <UMain>
        <UContainer>
          <slot />
        </UContainer>
      </UMain>
  </div>
</template>
