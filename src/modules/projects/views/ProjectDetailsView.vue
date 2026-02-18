<template>
  <div class="w-full">
    <nav>
      <BreadCrubs :name="project?.name ?? 'No deberías ver esto'" />
    </nav>
    <section>
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    class="checkbox"
                    @change="onTableCheckToggle"
                    :value="tableCheck"
                  />
                </label>
              </th>
              <th>Tarea</th>
              <th>Completada en</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="t in project?.tasks" :key="t.id">
              <th>
                <label>
                  <input
                    type="checkbox"
                    class="checkbox"
                    :checked="!!t.completedAt"
                    @change="onTaskToggle(t.id)"
                  />
                </label>
              </th>
              <td>{{ t.name }}</td>
              <td class="transition-all">{{ t.completedAt?.toLocaleString() ?? '' }}</td>
            </tr>

            <!-- ✅ th y td dentro de su propio tr -->
            <tr class="hover">
              <th></th>
              <td class="flex gap-3">
                <input
                  type="text"
                  class="input input-primary w-full opacity-60 transition-all hover:opacity-100"
                  placeholder="Nueva tarea"
                  v-model="taskName"
                  @keyup.enter="onNewTask"
                />
                <button @click="onNewTask" class="btn btn-success">Agregar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue';
import { useRouter } from 'vue-router';

import BreadCrubs from '@/modules/common/components/BreadCrubs.vue';
import { useProjectsStore } from '../store/projects.store';
import type { Project } from '../interfaces/project.interface';

interface Props {
  id: string;
}

const props = defineProps<Props>();
const { projectsList, addTask, toggleTask, toggleAllTasks } = useProjectsStore();
const router = useRouter();

const project = ref<Project | undefined>();
const taskName = ref<string>('');
const tableCheck = ref<boolean>(false);

const onNewTask = () => {
  if (taskName.value.trim().length === 0) return;

  addTask(props.id, taskName.value);
  taskName.value = '';
};

const onTaskToggle = (taskId: string) => {
  toggleTask(props.id, taskId);
};

const onTableCheckToggle = (event: Event) => {
  const checked = (event.target as HTMLInputElement).checked;
  const completedValue = checked ? new Date() : undefined;
  toggleAllTasks(props.id, completedValue);
};

watch(
  () => props.id,
  () => {
    project.value = projectsList.find((p) => p.id === props.id);
    if (!project.value) router.replace({ name: 'projects' });
  },
  { immediate: true },
);
</script>

<style scoped></style>
