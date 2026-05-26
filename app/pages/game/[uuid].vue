<script lang="ts" setup>
import { ref } from 'vue';
import type { FetchError } from 'ofetch';
import { errorMessages } from 'vue/compiler-sfc';

const { loggedIn, user, session, fetch, clear } = useUserSession()
const route = useRoute()
const data = ref({
  errorMessage: ''
})

async function Update() {
  data.value.errorMessage = ""
  if (loggedIn.value) {
    try {
      const game = await $fetch(`/api/game/${route.params.uuid}/state`);
    } catch (ex) {
      const error = (ex as FetchError).data
      data.value.errorMessage = error.message
    }
  } else {
    console.log('Goto /')
    await navigateTo('/')
  }
}

Update()
</script>


<template>
  <UAlert
    color="error"
    title="Ошибка"
    :description="data.errorMessage"
    v-if="data.errorMessage != ''"
  />
  <div class="text-center" v-if="loggedIn">
    {{session?.currentGame.uuid}}
  </div>
</template>>