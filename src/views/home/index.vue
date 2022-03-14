<template>
  <div>page:{{ home }}</div>
</template>
<script lang="ts" setup>
import { ref } from '@vue/composition-api'

const home = ref('home')
</script>
