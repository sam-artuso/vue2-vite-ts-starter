<template>
  <p class="my-component">this is a test component</p>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'my-component',
})
</script>

<style scoped>
.my-component {
  font-weight: bold;
}
</style>