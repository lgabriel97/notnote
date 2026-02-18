<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';
import SideMenu from '../components/SideMenu.vue';
</script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Navbar -->
      <TopMenu />
      <!-- Page content here -->
      <div class="p-4">
        <RouterView />
      </div>
    </div>
    <div class="drawer-side is-drawer-close:overflow-visible">
      <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
      <div
        class="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-0 is-drawer-open:w-64"
      >
        <!-- Sidebar content here -->
        <SideMenu />
      </div>
    </div>
  </div>
</template>
