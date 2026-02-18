<template>
  <button @click="$emit('clicked')" :class="['btn btn-circle btn-accent fixed', position]">
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface Props {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

defineEmits(['clicked']);

withDefaults(defineProps<Props>(), { position: 'bottom-right' });
</script>

<style scoped>
@import 'tailwindcss';

.top-left {
  @apply top-10 left-10;
}
.top-right {
  @apply top-10 right-10;
}
.bottom-left {
  @apply bottom-10 left-10;
}
.bottom-right {
  @apply bottom-10 right-10;
}
</style>
