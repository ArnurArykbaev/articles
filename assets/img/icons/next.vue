<template>
    <svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 7.5L14.5 12.5L9.5 17.5" stroke="#494949" stroke-width="1.3" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    default: '32'
  },
  height: {
    type: String,
    default: '32'
  }
})
</script>