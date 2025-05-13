<template>
  <div 
    class="bg-white/5 p-3 rounded-md border border-white/10 flex justify-center cursor-pointer items-center gap-2 hover:bg-white/10 transition-all duration-300" 
    :class="[`hover:shadow-md hover:shadow-${props.color}-900/20`]"
  >
    <Icon :icon="props.icon" :class="`text-${props.color}-400`" width="1.2rem" height="1.2rem" />
    <span class="text-white/80 text-sm">{{ props.name }}</span>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps<{
  name: string
  icon: string
  color: string
}>()
</script>