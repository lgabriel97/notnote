<template>
  <dialog class="modal modal-bottom sm:modal-middle" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p v-if="subtitle" class="py-4">{{ subtitle }}</p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input
            type="text"
            ref="inputRef"
            :placeholder="placeholder ?? 'Introduzca el dato'"
            class="input input-primary flex-1 w-full"
            v-model="inputValue"
          />
          <div class="flex justify-end mt-5 gap-2">
            <!-- Buttons -->
            <button @click="$emit('close')" type="button" class="btn btn-error">Cerrar</button>
            <button type="submit" class="btn btn-success">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen"
  ></div>
</template>

/***************************************************** */ /* SCRIPT SETUP */
/***************************************************** */
<script lang="ts" setup>
import { ref, watch } from 'vue';

// types
interface Props {
  open: boolean;
  title: string;
  subtitle?: string;
  placeholder?: string;
}

// Reactive elements
const inputValue = ref('');
const inputRef = ref<HTMLInputElement | null>(null);

// Vue props and emits
const props = defineProps<Props>();
const emits = defineEmits<{ close: [void]; value: [text: string] }>();

watch(props, ({ open }) => {
  if (open) inputRef.value?.focus();
});

// Listeners
function submitValue() {
  if (!inputValue.value.trim()) {
    inputRef.value?.focus();
    return;
  }

  emits('value', inputValue.value.trim());
  emits('close');

  inputValue.value = '';
}
</script>
