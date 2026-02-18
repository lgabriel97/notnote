<template>
  <aside class="mt-20 menu w-full grow is-drawer-close:hidden">
    <h2 class="text-lg font-bold mx-4">Proyectos</h2>
    <p v-if="projectsStore.empty" class="text-sm text-gray-500 mx-4">No hay proyectos</p>

    <ul v-else class="menu w-56">
      <li v-for="p in projectsStore.projectsList" :key="p.id">
        <details open>
          <summary>{{ p.name }}</summary>
          <ul>
            <li v-if="p.tasks.length === 0">
              <span class="text-sm text-gray-500 font-light">No hay tareas asociadas</span>
            </li>
            <li v-for="t in p.tasks" :key="t.id">
              <RouterLink :to="`/project/${p.id}`">{{ t.name }}</RouterLink>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import { useProjectsStore } from '../store/projects.store';

const projectsStore = useProjectsStore();
</script>
