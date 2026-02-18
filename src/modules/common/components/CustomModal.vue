<template>
  <dialog class="modal modal-bottom sm:modal-middle" :open="open">
    <div class="modal-box">
      <div class="border-b border-blue-500">
        <!-- Header -->
        <slot name="header" />
      </div>

      <div>
        <!-- Body -->
        <slot name="body" />
      </div>

      <div class="modal-action">
        <slot name="footer" />
      </div>
    </div>
  </dialog>
  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen"
  ></div>
</template>

<script lang="ts" setup>
interface Props {
  open: boolean;
}

defineProps<Props>();
</script>
