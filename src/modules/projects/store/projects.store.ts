import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';

const initialTask: Project = {
  id: uuidv4(),
  name: 'Proyecto de prueba',
  tasks: [{ id: uuidv4(), name: 'Tarea de prueba' }],
};

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', [initialTask]));

  const addProject = (projectName: string) => {
    const project = { id: uuidv4(), name: projectName, tasks: [] };
    projects.value.push(project);
  };

  const addTask = (projectId: string, taskName: string) => {
    console.log('Nueva tarea store');

    const project = projects.value.find((p) => p.id === projectId);
    const task = { id: uuidv4(), name: taskName };

    project?.tasks.push(task);
  };

  const toggleTask = (projectId: string, taskId: string) => {
    const project = projects.value.find((p) => p.id === projectId);
    const task = project?.tasks.find((t) => t.id === taskId);

    if (!task) return;

    if (!task.completedAt) task.completedAt = new Date();
    else task.completedAt = undefined;
  };

  const toggleAllTasks = (projectId: string, date?: Date) => {
    const project = projects.value.find((p) => p.id === projectId);
    if (!project) return;

    for (const t of project.tasks) {
      if (date && t.completedAt) continue;
      t.completedAt = date;
    }
  };

  const getCompleteness = (projectId: string) => {
    const project = projects.value.find((p) => p.id === projectId);
    if (!project) return;

    const totalTasks = project?.tasks.length;
    const completedTasks = project.tasks.filter((t) => !!t.completedAt).length;

    console.log(completedTasks / totalTasks);

    return completedTasks / totalTasks;
  };

  return {
    // Properties
    projects,

    // Getters
    projectsList: computed(() => [...projects.value]),
    empty: computed(() => projects.value.length === 0),

    // Actions
    addProject,
    addTask,
    toggleTask,
    toggleAllTasks,
    getCompleteness,
  };
});
