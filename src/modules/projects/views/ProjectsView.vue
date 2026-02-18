<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(project, index) in projectsStore.projectsList"
          :key="project.id"
          class="hover:bg-base-300 cursor-pointer"
          @click="router.push(`project/${project.id}`)"
        >
          <th>{{ index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.tasks.length }}</td>
          <td>
            <progress
              class="progress progress-accent w-all"
              :value="projectsStore.getCompleteness(project.id) ?? 0"
              max="1"
            ></progress>
          </td>
        </tr>
      </tbody>
    </table>

    <InputModal
      :open="modalOpen"
      title="Nuevo Projecto"
      subtitle="Introduzca el nombre del nuevo proyecto"
      placeholder="Ej. Dominar Vue"
      @value="projectsStore.addProject"
      @close="onCloseModal"
    />

    <FabButton @clicked="onAddButton" position="bottom-right">
      <PlusIcon />
    </FabButton>
  </div>
</template>

<script setup lang="ts">
import PlusIcon from '../../common/icons/PlusIcon.vue';
// import CustomModal from '../components/CustomModal.vue';
import FabButton from '../../common/components/FabButton.vue';
import InputModal from '../../common/components/InputModal.vue';
import { ref } from 'vue';
import { useProjectsStore } from '../store/projects.store';
import { useRouter } from 'vue-router';

const modalOpen = ref(false);
const router = useRouter();

const projectsStore = useProjectsStore();

// Listeners
function onAddButton() {
  modalOpen.value = true;
}

function onCloseModal() {
  modalOpen.value = false;
}
</script>
