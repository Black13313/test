<script setup lang="ts">

import {useRoute} from "vue-router";

const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  noAction: {
    type: Boolean,
    default: false
  },
})

</script>

<template>
  <header class="bg-gray-50 mb-8">
    <div>
    </div>
    <div class=" max-w-screen px-8  py-7">
      <div class="sm:flex sm:items-center sm:justify-between  text-2xl ">
        {{ title }}
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
